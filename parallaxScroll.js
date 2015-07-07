// Options object must contain: containerId, backgroundImgUrl
// it may also contain an optional fadeElementId and scrollSpeed (1 to 5)

(function () {
  "use strict";
  if (window.jQPS !== undefined) {
    return;
  } else {
    // how is $.fn this different from $.prototype?
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
          "width": "100%",
          "z-index": "-1"
        });

      this.$container
        .html(this.$backgroundDiv)
        .append(this.$contentDiv);

      // var body = window.document.body;
      // var html = window.document.documentElement;

      // this.height = Math.max(
      //   body.scrollHeight,
      //   body.offsetHeight,
      //   html.clientHeight,
      //   html.scrollHeight,
      //   html.offsetHeight
      // );

      this.height = $(document).height();
      this.viewport = $(window).height();

      if (opts.fadeElementId !== void 0) {
        this.$fadeElement = $("#" + opts.fadeElementId)
          .css({
            // "position": "fixed",
          })
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
          var perc = st / that.viewport * 1.75
          that.$fadeElement.css("opacity", "calc(1 - " + perc + ")");
        }
      });
    };
  }
})();
