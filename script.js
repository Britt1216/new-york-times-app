var searchTerm = "";
var recordsToRetrieve = "";
var startYear = "";
var endYear = "";
var yourKey = "lzaKhKhSyfj6nKewCGpqpvRDzVP2ogHA";
var queryUrl =
  "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=" + yourKey;

$.ajax({
  url: queryUrl,
  method: "GET",
}).then(processResponse);
function processResponse(response) {
  console.log(response);
}

var maxNum = function (arr) {
  var max = arr[0];
  for (var i = 1; i < 5; i++) {
    var currentNum = arr[i];
    if (currentNum > max) {
      max = currentNum;
    }
  }
  return max;
};

$(document).ready(pageLoad);
function pageLoad() {
  var mt = new moment();
  var hour = mt.hour();
  var minute = mt.minute();
  var now = moment(new Date()).format("HH:mm");
  var calendarHour = $(".hour");
  var calendarEvent = $(".event");
  for (var i = 0; i < calendarHour.length; i++) {
    var box = calendarHour[i];
    var event = calendarEvent[i];
    var boxtime = box.dataset.time;
    if (boxtime > now) {
      event.classList.remove("future");
      event.classList.add("past");
    }
  }
}

var queryUrl =
  "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?q=" +
  searchTerm +
  "api-key=" +
  yourKey;
$.ajax({
  url: queryUrl,
  method: "GET",
}).then(processResponse);
function processResponse(response) {
  console.log(response);
}

