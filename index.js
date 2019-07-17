function shout(string) {
  return string.toUpperCase();
}

var whisper = (string) => string.toLowerCase();

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  (string === string.toLowerCase()) ? "I can't hear you!";
}
