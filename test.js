;(function($, doc, win) {
  "use strict";

  function dialog(el, opts) {
    this.$el = $(el);
    this.init(opts);

    // Setup overlay markup
    $('<div>').prop({
      id: 'custom-overlay'
    }).css(this.opts.css.overlay).append(
      $('<p>').css(this.opts.css.dialog).html($.parseHTML(this.opts.content)).append(this.opts.buttons)
    ).appendTo('body');
  }

  dialog.prototype.init = function(opts) {
    // Defaults
    var defaults = {
      content: '',
      css: {
        overlay: {
          width: '100%',
          height: '100%',
          zIndex: 100,
          top: 0,
          left: 0,
          position: 'fixed',
          background: 'rgba(0,0,0,.3) repeat'
        },
        dialog: {
          width: '50%',
          minHeight: '40%',
          padding: '2%',
          zIndex: 101,
          position: 'fixed',
          top: '60%',
          left: '50%',
          margin: '-20% 0 0 -25%',
          background: '#fafafa',
          color: '#222'
        }
      },
      buttons: [
        $('<button>').click(function() {
          $('#custom-overlay').remove();
          return true;
        }).text('Yes'),
        $('<button>').click(function() {
          $('#custom-overlay').remove();
          return false;
        }).text('No')
      ]
    }

    // Extend defaults with opts passed
    $.extend(defaults, opts);
    this.opts = defaults;
  };

  $.fn.dialog = function(opts) {	
    return this.each(function() {
      new dialog(this, opts);
    });
  };

})(jQuery, document, window);