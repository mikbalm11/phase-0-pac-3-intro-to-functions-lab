
function shout(string) {
    return string.toUpperCase();
  }

function logShout(string) {
    console.log(string.toUpperCase());
    //return string.toUpperCase();
  }

function whisper(string) {
    return string.toLowerCase();
  }

function logWhisper(string) {
    console.log(string.toLowerCase());
    //return string.toUpperCase();
  }


function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    }

    else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }

    else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}

// alternative with switch

/*
function sayHiToHeadphonedRoommate(string) {
    switch(string) {
        case string.toLowerCase():
            return "I can't hear you!";
        case string.toUpperCase():
            return "YES INDEED!";
        case "Let's have dinner together!":
            return "I would love to!";
        default:
            console.log("shh!"):
            break;
      }
}
*/
