var moment = require("moment");
require("moment/min/locales.min");
moment.locale("be");
console.log(moment.locale("be"));
document.querySelector(".data").innerHTML = moment().format("LLLL");

const anime = require("animejs");

var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "bar",

  // The data for our dataset
  data: {
    labels: ["Пн", "Аў", "Ср", "Чц", "Пт", "Сб", "Нд"],
    datasets: [
      {
        label: "Тыднёвая актыўнасць",
        backgroundColor: "#9DABF9",
        // borderColor: 'rgb(255, 99, 132)',
        data: [5, 4, 20, 10, 40, 11, 18],
      },
    ],
  },

  // Configuration options go here
  options: {},
});

var ctx = document.getElementById("myChart2").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "polarArea",

  // The data for our dataset
  data: {
    labels: [
      "сям'я",
      "здароўе",
      "фінансы",
      "кар'ера",
      "асобасны рост",
      "духоўнасць",
      "адпачынак",
      "адносіны",
    ],
    datasets: [
      {
        label: "Кола балансу",
        backgroundColor: [
          "#FDD9D9",
          "#545AB1",
          "#E9E9F3",
          "#FD9AA4",
          "#9DABF9",
          "#D57A7F",
          "#AFBBED",
          "#898ED6",
        ],
        // borderColor: 'blue',
        data: [75, 66, 45, 34, 89, 78, 54, 21],
      },
    ],
  },

  // Configuration options go here
  options: {},
});

var ctx = document.getElementById("myChart3").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",
  tension: 3,

  // The data for our dataset
  data: {
    labels: ["Пн", "Аў", "Ср", "Чц", "Пт", "Сб", "Нд"],
    datasets: [
      {
        label: "Задачы",
        // backgroundColor: ["white"],
        borderColor: "#545AB1",
        data: [5, 4, 20, 10, 40, 11, 3, 2],
      },
    ],
  },

  // Configuration options go here
  options: {},
});

var ctx = document.getElementById("myChart4").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "bar",

  // The data for our dataset
  data: {
    labels: [" ", " ", " ", " ", " ", " ", " "],
    datasets: [
      {
        label: " ",
        backgroundColor: "#E9E9F3",
        // borderColor: 'rgb(255, 99, 132)',
        data: [5, 4, 20, 10, 40, 11, 18],
      },
    ],
  },

  // Configuration options go here
  options: {},
});
var ctx = document.getElementById("myChart5").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "bar",

  // The data for our dataset
  data: {
    labels: [" ", " ", " ", " ", " ", " ", " "],
    datasets: [
      {
        label: " ",
        backgroundColor: "#FDD9D9",
        // borderColor: "#9DABF9",
        data: [75, 66, 45, 34, 89, 78, 54],
      },
    ],
  },

  // Configuration options go here
  options: {},
});

var ctx = document.getElementById("myChart7").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "doughnut",

  // The data for our dataset
  data: {
    labels: ["70%", "30%"],
    datasets: [
      {
        label: "",
        backgroundColor: ["#D57A7F", "#E9E9F3"],
        // borderColor: 'rgb(255, 99, 132)',
        data: [70, 30],
      },
    ],
  },

  // Configuration options go here
  options: {},
});

anime({
  targets: ".backlog",
  translateX: {
    value: 263,
    duration: 800,
  },
  rotate: {
    value: 360,
    duration: 1800,
    easing: "easeInOutSine",
  },
  scale: {
    value: 2,
    duration: 1600,
    delay: 800,
    easing: "easeInOutQuart",
  },
  delay: 250, // All properties except 'scale' inherit 250ms delay
});
