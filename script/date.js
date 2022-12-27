const now = new Date();

document.querySelector(".date").innerHTML = 
  now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();

// Admittedly a bit of a hack because the browser simply refuses not to display the seconds, no matter what.
// Trust me, I tried. Not defining seconds at all doesn't help.

document.querySelector(".time").innerHTML = now.toLocaleTimeString(
  "nl-BE", {
      hours: "2-digit",
      minutes: "2-digit"
  }
).slice(0, -3);