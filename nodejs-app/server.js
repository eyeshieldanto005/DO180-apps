var createError = require('http-error');

var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Booking from pod: ' + process.environment.HOSTNAME + '\n')
});

app.listen(8080, function () {
  console.log('App listening on port 8080!');
});
const d = new Date();
d.setDate(30);

const d = new Date();
d.setHours(24);

const d = new Date();
d.setSeconds(60);

let text = "Pilih jadwal pakarmu";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "hari ini";
} else {
  text = "bukan hari ini";
}
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()];

