// Let's make it so the divs don't need to be created by the user
// Create the divs, add the css/image, start the scroll function

(function () {
  if ($.fn.parallaxScroll) {
    return;
  } else {
    var jQPS = $.fn.parallaxScroll = function () {
      this.$container = $("#" + containerId);
      this.$background = $("#" + containerId + " background")[0];

      var body = window.document.body;
      var html = window.document.documentElement;

      this.height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    this.setBackgroundHeight();
    this.scroll();
    };

    jQPS.prototype.setBackgroundHeight = function () {
      if ($(".background").length < 1) {
        // create background div
        window.document.create("div.background") // ? or whatever the fuck the syntax should be
      }

      $(".background").css("height", this.height + "px");
  };

    jQPS.prototype.scroll = function () {
      $(window).scroll(function () {
      var st = $(this).scrollTop();
      var yDelta = -st / 5;
      $(".background").css("transform", "translateY(" + yDelta + "px)");
    });
    }
  };
})();
