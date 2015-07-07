// Options object must contain: containerId, backgroundImgUrl
// it may also contain an optional fadeElementId and scrollSpeed (1 to 5)

(function () {
  "use strict";
  if (window.jQPS !== void 0) {
    return;
  } else {
    window.jQPS = $.fn.ParallaxScroll = function (opts) {
      this.opts = opts;

      this.setScrollSpeed();

      this.$container = $("#" + this.opts.containerId);
      this.setupContentDiv();
      this.setupBackgroundDiv();

      this.$container
        .html(this.$backgroundDiv)
        .append(this.$contentDiv);

      this.setupFadeElement();

      // these need to occur after all other DOM manipulations
      this.height = $(document).height();
      this.viewport = $(window).height();
      this.$backgroundDiv.css("height", this.height + "px");


      this.scroll();
    };

    jQPS.prototype.setScrollSpeed = function () {
      if (this.opts.scrollSpeed !== void 0) {
        this.scrollSpeed = this.opts.scrollSpeed;
      } else {
        this.scrollSpeed = 2;
      }
    };

    jQPS.prototype.setupBackgroundDiv = function () {
      this.$backgroundDiv = $("<div>")
        .addClass("background")
        .css({
          "background": "url(" + this.opts.backgroundImgUrl + ")",
          "background-size": "cover",
          "background-position": "center",
          "position": "fixed",
          "top": "0",
          "width": "100%",
          "z-index": "-1"
        });
    };

    jQPS.prototype.setupContentDiv = function () {
      this.$contentDiv = $("<div>")
        .addClass("content")
        .html(this.$container.html());
    };

    jQPS.prototype.setupFadeElement = function () {
      if (this.opts.fadeElementId !== void 0) {
        this.$fadeElement = $("#" + this.opts.fadeElementId)
          .css({
            "font-size": "100%"
          });
      } else {
        this.$fadeElement = null;
      }
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
