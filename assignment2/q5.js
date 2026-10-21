// Report whether all smart-home security conditions are satisfied.
function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  const isSecure =
    isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
  const isUnsafe =
    !isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside;

  console.log(
    `Door locked: ${isDoorLocked}, window closed: ${isWindowClosed}, ` +
      `alarm on: ${isAlarmOn}, owner inside: ${isOwnerInside} -> ` +
      `${isSecure && !isUnsafe ? "Secure" : "Unsafe"}`
  );
}

// Test a secure state and two states with a failed security condition.
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;
checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside);

isDoorLocked = false;
checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside);

isDoorLocked = true;
isAlarmOn = false;
checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside);
