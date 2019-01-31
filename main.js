// TweenMax.from("#test", 1, { opacity: 0, y: 50 });

var extrainfo1 = document.getElementById("extra-info1");
var extrainfo2 = document.getElementById("extra-info2");
var extrainfo3 = document.getElementById("extra-info3");
var infobutton = document.getElementsByClassName("infobutton");
var singlecar = document.getElementsByClassName("single-car");
var selectcar1 = document.getElementById("select-car-button1");
var selectcar2 = document.getElementById("select-car-button2");
var selectcar3 = document.getElementById("select-car-button3");
var stepforminput = document.getElementById("step-form-input");
var appearcountry = document.getElementById("appear-country");

function Moreinfo1() {
  if (extrainfo1.style.display != "block") {
    extrainfo1.style.display = "block";

    window.setTimeout(function() {
      extrainfo1.style.opacity = 1;
      extrainfo1.style.left = "0px";
    }, 100);
  } else {
    extrainfo1.style.opacity = 0;
    extrainfo1.style.left = "-100px";
    window.setTimeout(function() {
      extrainfo1.style.display = "none";
    }, 1000);
  }
}

function Moreinfo2() {
  if (extrainfo2.style.display != "block") {
    extrainfo2.style.display = "block";
    window.setTimeout(function() {
      extrainfo2.style.opacity = 1;
      extrainfo2.style.left = "0px";
    }, 100);
  } else {
    extrainfo2.style.opacity = 0;
    extrainfo2.style.left = "-100px";
    window.setTimeout(function() {
      extrainfo2.style.display = "none";
    }, 1000);
  }
}

function Moreinfo3() {
  if (extrainfo3.style.display != "block") {
    extrainfo3.style.display = "block";
    window.setTimeout(function() {
      extrainfo3.style.opacity = 1;
      extrainfo3.style.left = "0px";
    }, 100);
  } else {
    extrainfo3.style.opacity = 0;
    extrainfo3.style.left = "-100px";
    window.setTimeout(function() {
      extrainfo3.style.display = "none";
    }, 1000);
  }
}

function displaycountry(id) {
  var country = document.getElementById(id);

  if (id == "country1") {
    country.style.background = "rgba(93, 173, 226, 0.6)";
    document.getElementById("country2").style.background =
      "rgba(245, 176, 65, 0.6)";
    document.getElementById("country3").style.background =
      "rgba(245, 176, 65, 0.6)";
  } else if (id == "country2") {
    country.style.background = "rgba(93, 173, 226, 0.6)";
    document.getElementById("country1").style.background =
      "rgba(245, 176, 65, 0.6)";
    document.getElementById("country3").style.background =
      "rgba(245, 176, 65, 0.6)";
  } else if (id == "country3") {
    country.style.background = "rgba(93, 173, 226, 0.6)";
    document.getElementById("country1").style.background =
      "rgba(245, 176, 65, 0.6)";
    document.getElementById("country2").style.background =
      "rgba(245, 176, 65, 0.6)";
  }
  window.setTimeout(function() {
    appearcountry.style.display = "block";
    appearcountry.style.marginTop = "0px";
    appearcountry.style.opacity = 0;
  }, 0);

  window.setTimeout(function() {
    appearcountry.style.marginTop = "30px";
    appearcountry.style.opacity = 1;
  }, 300);
}

function signinpop() {
  document.getElementById("bg-modal").style.display = "flex";
}
