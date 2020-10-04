$(document).ready(function () {
  if ($(window).width() >= "1024") {
    $(".card").tilt({
      maxTilt: 10,
      speed: 300,
      transition: true,
      glare: true,
      maxGlare: 0.3,
    });
  }
});
