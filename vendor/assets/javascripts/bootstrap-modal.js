/*
 * Implements an interface to manage bootstrap modal windows. It allows
 * "data-settings" attribute ti personalize bootstrap's modal. MIT license.
 *
 *   - lleir@llegeix.me  Sat Nov 16 09:30:00 CEST 2013
 */
var BootstrapModal = function BootstrapModal(opts){
  this.defaults = {
    element: 'modal-window',
    header: {
      style: null,
      closeButton: {
        text: null,
        icon: 'icon-remove'
      },
      title: 'Modal panel',
      content: null
    },
    body: {
      content: 'Hello',
      style: null
    },
    footer: {
      content: 'Hello',
      style: null
    }
  };

  this.data = (function(self){
    return function(what){
      if(self.element){
        var data = self.element.data('modal-' + what);

        if(data)
          return $.parseJSON(data);
      }

      return {};
    }
  })(this);

  this.settings = $.extend(this.defaults, opts, this.data('settings'));

  this.setting = (function(self){
    return function(what){
      var setting = self.settings;

      $.each(what.split('.'), function(i,n){
        setting = (setting[n] = (setting[n] || {}))
      });

      setting
    };
  })(this);

  this.element = $('body #' + this.setting('element'));

  this.section = (function(self){
    return function(section) {
      var s = self.element.find('.modal-' + section);
      var settings = self.settings[section];

      if(s.size() == 0){

        if(settings){
          s = $("<div>", {class: 'modal-' + section + ' '+ settings.style, id: self.defaults.element + 'modal-' + section});

          if(settings.closeButton){
            var closeButtonContent = $('<i>', {class: 'icon-remove'});

            if(settings.closeButton.text)
              closeButtonContent = settigs.closeButton.text;

            if(settings.closeButton.icon)
              closeButtonContent.removeClass().addClass(settings.closeButton.icon);

            s.append(
              $('<button>', {class: "close", 'data-dismiss': "modal", 'aria-hidden': "true"})
                .append(closeButtonContent)
            );
          }

          if(settings.title){
            s.append(
              $('<h3>', {id: self.defaults.element + 'modal-' + section + '-title'})
                .append(settings.title)
            );
          }

          if(settings.content)
            s.append(settings.content);

        }
      }

      return s;
    }
  })(this);

  this.header = this.section('header');

  this.body = this.section('body');

  this.footer = this.section('footer');

  this.panel = (function(self){
    if(self.element)
      self.element.remove();

    var w  = self.element;
    var id = self.settings.element;

    w = $('<div>', {id: id, class: "modal hide fade", tabindex: "-1", role: "dialog",  'aria-labelledby': id+'Label', 'aria-hidden': "true"});
    w.append(self.header).append(self.body).append(self.footer);

    $('body').append(w);

    return w

  })(this);

  this.show = function(){
    this.panel.modal('show');
  };

  this.hide = function(){
    this.panel.modal('hide');
  };

  this.toggle = function(){
    this.panel.modal('toggle');
  };

  return {
       panel: this.panel,
      header: this.header,
        body: this.body,
      footer: this.footer,
        show: this.show,
        hide: this.hide,
      toggle: this.toggle
  };

};