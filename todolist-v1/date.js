//
module.exports.getDate = getDate;
function getDate() {
  // Declaring date related variables
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let today = new Date();
  let day = today.toLocaleString("en-US", options);

  return day;
}

//
exports.getDay = function getDay() {
  // Declaring date related variables
  const options = {
    weekday: "long",
  };

  const today = new Date();

  return today.toLocaleString("en-US", options);
};
