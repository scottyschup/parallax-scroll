// Options object must contain: containerId, backgroundImgUrl
// it may also contain an optional fadeElementId and scrollSpeed (1 to 5)

(function () {
  "use strict";
  if (window.jQPS !== void 0) {
    return;
  } else {
    window.jQPS = $.fn.ParallaxScroll = function (opts) {
      this.$container = $("#" + opts.containerId);
      this.$contentDiv = $("<div>")
        .addClass("content")
        .html(this.$container.html());

      this.$backgroundDiv = $("<div>")
        .addClass("background")
        .css({
          "background": "url(" + opts.backgroundImgUrl + ")",
          "background-size": "cover",
          "background-position": "center",
          "position": "fixed",
          "top": "0",
          "width": "100%",
          "z-index": "-1"
        });

      this.$container
        .html(this.$backgroundDiv)
        .append(this.$contentDiv);

      this.height = $(document).height();
      this.viewport = $(window).height();

      if (opts.fadeElementId !== void 0) {
        this.$fadeElement = $("#" + opts.fadeElementId)
          .css({
            "font-size": "100%"
          });
      } else {
        this.$fadeElement = null;
      }

      if (opts.scrollSpeed !== void 0) {
        this.scrollSpeed = opts.scrollSpeed;
      } else {
        this.scrollSpeed = 2;
      }

      this.setBackgroundHeight();
      this.scroll();
    };

    jQPS.prototype.setBackgroundHeight = function () {
      this.$backgroundDiv.css("height", this.height + "px");
    };

    jQPS.prototype.scroll = function () {
      var that = this;
      $(window).scroll(function () {
        var st = $(this).scrollTop();
        var yDelta = -st / that.scrollSpeed;
        that.$backgroundDiv.css("transform", "translateY(" + yDelta + "px)");
        if (that.$fadeElement) {
          var perc = st / that.viewport * 2;
          that.$fadeElement.css("opacity", "calc(1 - " + perc + ")");
        }
      });
    };
  }
})();
