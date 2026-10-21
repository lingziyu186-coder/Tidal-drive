(function (root) {
  'use strict';
  const clamp = (value, low, high) => Math.max(low, Math.min(high, value));
  const BOOST_DURATION=3/.44,BOOST_TOP_SPEED=120/3.6,BOOST_PULSE_MS=5400;
  const SPEEDBOAT_TOP_SPEED=100/3.6;
  const SPEEDBOAT_BOOST_TOP_SPEED=160/3.6;
  // One authoritative km/h table drives both simulation and UI readouts.
  const VEHICLE_SPECS=Object.freeze(Object.fromEntries(Object.entries({
    rowboat:{normal:17.28,boost:25.92,acceleration:2.7,thrust:4.2},
    jetski:{normal:70,boost:120,acceleration:6.5,thrust:14},
    kawasaki:{normal:85,boost:140,acceleration:6.8,thrust:16},
    speedboat:{normal:100,boost:160,acceleration:6.8,thrust:18},
    mercedes:{normal:240,boost:340,acceleration:8,thrust:36},
    xiaomi:{normal:260,boost:380,acceleration:9,thrust:39},
    jesko:{normal:295,boost:435,acceleration:10.3,thrust:43},
    aventador:{normal:310,boost:450,acceleration:10.6,thrust:44},
  }).map(([id,spec])=>[id,Object.freeze(spec)])));
  function createBoat(vehicle='rowboat') { if(!["rowboat","jetski","kawasaki","speedboat","mercedes","xiaomi","jesko","aventador","custom"].includes(vehicle))vehicle='jetski'; return { x: 0, z: 0, heading: 0, travelHeading:null, drifting:false, slipActive:false, driftAmount:0, speed: 0, distance: 0, vehicle, boostCharge:1, boostIntensity:0, boostLocked:false, boostCooldown:0, throttle:0, steer:0, acceleration:0, airborne:false, submerged:false, surfaceRequested:false, diveDepth:0, diveDistance:0, y:0, verticalSpeed:0, vx:0, vz:0, airTime:0, flightClearance:0, launchCount:0, landingCount:0, landingImpact:0 }; }
  function stepBoat(boat, input, elapsed) {
    const dt = clamp(Number.isFinite(elapsed) ? elapsed : 0, 0, 0.05);
    if(!dt)return boat;
    // Space remains drift on the surface; underwater it requests recovery.
    boat.surfaceRequested=!!boat.submerged&&!!(input.surface||input.drift);
    const previousSpeed=boat.speed;
    const previousHeading=boat.heading;
    const drifting=!!input.drift&&!input.brake&&!boat.airborne&&!boat.submerged&&Math.abs(boat.speed)>4;
    boat.drifting=drifting;
    boat.throttle=(input.forward?1:0)-(input.backward?1:0);
    boat.steer=(input.left?1:0)-(input.right?1:0);
    if(boat.vehicle!=='rowboat'&&(boat.customSpec||VEHICLE_SPECS[boat.vehicle])){
      const spec=boat.customSpec||VEHICLE_SPECS[boat.vehicle],large=boat.vehicle==='custom'?boat.customKind==='car':!['jetski','kawasaki'].includes(boat.vehicle),top=spec.boost/3.6;
      const requested=!!(input.boost||input.fast),active=requested&&!input.brake&&!boat.boostLocked&&boat.boostCharge>0;
      boat.boostIntensity=active?1:0;
      if(active){boat.boostCharge=Math.max(0,boat.boostCharge-dt/BOOST_DURATION);boat.boostCooldown=1.4;if(boat.boostCharge<1e-9){boat.boostCharge=0;boat.boostLocked=true;}}
      else{boat.boostCooldown=Math.max(0,boat.boostCooldown-dt);if(!boat.boostCooldown)boat.boostCharge=Math.min(1,boat.boostCharge+dt*.14);if(!requested&&boat.boostCharge>.30)boat.boostLocked=false;}
      if(boat.airborne){
        // Rocket thrust does not need water traction. Add to the launch vector
        // instead of replacing it with yaw; gravity remains the flight solver's job.
        const drag=Math.exp(-dt*(input.brake?.16:.035));boat.vx*=drag;boat.vz*=drag;
        if(active){const thrust=spec.thrust*dt;boat.vx-=Math.sin(boat.heading)*thrust;boat.vz-=Math.cos(boat.heading)*thrust;}
        const magnitude=Math.hypot(boat.vx,boat.vz);if(magnitude>top){boat.vx*=top/magnitude;boat.vz*=top/magnitude;}boat.speed=Math.hypot(boat.vx,boat.vz);
      }else if(input.brake)boat.speed*=Math.exp(-dt*5.5);
      else{
        const throttle=active?1:boat.throttle,max=active?top:spec.normal/3.6;
        if(throttle>0&&boat.speed<max)boat.speed=Math.min(max,boat.speed+dt*(active?spec.thrust:spec.acceleration));
        else if(throttle<0)boat.speed-=dt*7.0;
        else if(!throttle)boat.speed*=Math.exp(-dt*.24);
        if(boat.speed>max)boat.speed=max+(boat.speed-max)*Math.exp(-dt*1.2);
        boat.speed=clamp(boat.speed,large?-4:-3,top);
      }
      boat.heading+=boat.steer*(boat.airborne?.14:(large?.72:1)*(.18+Math.min(Math.abs(boat.speed)/6,1)*.82)/(1+Math.max(0,boat.speed-15)*.04))*dt;
    }else{
    boat.boostIntensity=0;
    if (input.brake) boat.speed *= Math.exp(-dt * 9);
    else {
      const throttle = (input.forward ? 1 : 0) - (input.backward ? 1 : 0);
      const fast=!!(input.boost||input.fast);
      if (throttle) boat.speed += throttle * (fast ? 4.2 : 2.7) * dt;
      else boat.speed *= Math.exp(-dt * 0.58);
      boat.speed = clamp(boat.speed, -1.8, fast ? 7.2 : 4.8);
    }
    const steering = (input.left ? 1 : 0) - (input.right ? 1 : 0);
    boat.heading += steering * (0.55 + Math.min(Math.abs(boat.speed), 4) * 0.15) * dt;
    }
    // Release grip while drifting: hull yaw changes faster than travel direction.
    // Releasing Space restores grip smoothly instead of snapping the velocity.
    if(!boat.airborne){
      if(drifting){boat.heading+=boat.steer*.75*dt;boat.speed*=Math.exp(-dt*.12);}
      let travel=Number.isFinite(boat.travelHeading)?boat.travelHeading:previousHeading;
      const delta=Math.atan2(Math.sin(boat.heading-travel),Math.cos(boat.heading-travel));
      if(drifting)boat.slipActive=true;
      if(boat.slipActive&&Math.abs(delta)>.008)travel+=delta*(1-Math.exp(-dt*(drifting?.7:input.brake?14:5)));
      else travel=boat.heading;
      if(!drifting&&Math.abs(delta)<.008)boat.slipActive=false;
      // Bound the slip angle before it becomes a backwards spin.
      const slip=clamp(Math.atan2(Math.sin(boat.heading-travel),Math.cos(boat.heading-travel)),-1.2,1.2);
      travel=boat.heading-slip;boat.driftAmount=slip;
      boat.travelHeading=travel;
    }else{boat.travelHeading=Math.atan2(-boat.vx,-boat.vz);boat.driftAmount=0;boat.slipActive=false;}
    // Submerged thrust/charging still works, with water drag rather than a
    // forced speed reset. Vertical recovery is handled by the contact solver.
    if(boat.submerged)boat.speed*=Math.exp(-dt*.32);
    if (Math.abs(boat.speed) < 0.005) boat.speed = 0;
    boat.acceleration=(boat.speed-previousSpeed)/dt;
    boat.heading = Math.atan2(Math.sin(boat.heading), Math.cos(boat.heading));
    const dx = boat.airborne?boat.vx*dt:-Math.sin(boat.travelHeading)*boat.speed*dt;
    const dz = boat.airborne?boat.vz*dt:-Math.cos(boat.travelHeading)*boat.speed*dt;
    boat.x += dx; boat.z += dz; boat.distance += Math.hypot(dx, dz);
    return boat;
  }
  root.TidalPhysics = Object.freeze({ createBoat, stepBoat, BOOST_DURATION, BOOST_TOP_SPEED, BOOST_PULSE_MS,SPEEDBOAT_TOP_SPEED,SPEEDBOAT_BOOST_TOP_SPEED,VEHICLE_SPECS });
})(typeof window === 'undefined' ? globalThis : window);
