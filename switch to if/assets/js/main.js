const day = "monday";

if (day === "monday") {
  console.log("plan");
  console.log("go");
} else if (day === "tuesday") {
  console.log("prepare");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write");
} else if (day === "friday") {
  console.log("record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("geniesen");
} else console.log("fehler");

switch (day) {
  case "monday": // day === "monday"
    console.log("plan");
    console.log("go");
    break;
  case "tuesday":
    console.log("prepare");
    break;
  case "wednesday":
  case "thursday":
    console.log("write");
    break;
  case "friday":
    console.log("record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("geniesen");
    break;
  default:
    console.log("fehler");
}
