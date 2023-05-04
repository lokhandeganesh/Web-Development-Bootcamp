// document.onload(alert("javascript file loaded"));

// document.querySelector("button").addEventListener("click", buttonClick);

/*
document.querySelector("button").addEventListener("click", (event) => {
  alert("I got clicked!");
});
*/

function buttonClick(id) {
  new Audio(`sounds/${id}.mp3`).play();
  // console.log(id);
}

function funScaleImage(className, type, key) {
  var flag = true;
  switch (key) {
    case "a":
      var id = "tom-1";
      console.log("A");
      break;
    case "s":
      var id = "tom-2";
      console.log("S");
      break;
    case "d":
      var id = "tom-3";
      console.log("D");
      break;
    case "f":
      var id = "tom-4";
      console.log("F");
      break;
    case "j":
      var id = "snare";
      console.log("J");
      break;
    case "k":
      var id = "crash";
      console.log("K");
      break;
    case "l":
      var id = "kick-bass";
      console.log("L");
      break;

    default:
      console.log("no key found");
      var flag = false;
      break;
  }

  if (flag) {
    if (type === "add") {
      buttonClick(id);
      document.getElementById(id).classList.add(className);
    } else {
      document.getElementById(id).classList.remove(className);
    }
  }
}

document.addEventListener("keydown", function (e) {
  // console.log(e)
  var key = e.key;
  funScaleImage("scaleImage", "add", key);
});

document.addEventListener("keyup", function (e) {
  // console.log(e)
  var key = e.key;
  funScaleImage("scaleImage", "remove", key);
});

// Keyboard Binding
// document.addEventListener("keypress", function (e) {
//   var Key = e.key;
//   switch (Key) {
//     case "a":
//       var id = "tom-1";

//       buttonClick(id);
//       console.log("A");
//       break;
//     case "s":
//       var id = "tom-2";

//       buttonClick(id);
//       console.log("S");
//       break;
//     case "d":
//       var id = "tom-3";

//       buttonClick(id);
//       console.log("D");
//       break;
//     case "f":
//       var id = "tom-4";

//       buttonClick(id);
//       console.log("F");
//       break;
//     case "j":
//       var id = "snare";

//       buttonClick(id);
//       console.log("J");
//       break;
//     case "k":
//       var id = "crash";

//       buttonClick(id);
//       console.log("K");
//       break;
//     case "l":
//       var id = "kick-bass";

//       buttonClick(id);
//       console.log("L");
//       break;
//     default:
//       console.log("Check input");
//       break;
//   }
//   // console.log(e.key);
// });
