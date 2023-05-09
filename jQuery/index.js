// alert("Javascript file loaded");

$("h1").css("color", "red");
// $("h1").addClass("big-title");

$("button").addClass("btn btn-primary");

$("body").on("keypress", function (e) {
  $("h1").text(`${e.key}`);
  // alert("button clicked");
});
 