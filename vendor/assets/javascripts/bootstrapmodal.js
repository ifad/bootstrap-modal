/*
 * Implements an interface to manage bootstrap modal windows. It allows
 * "data-settings" attribute ti personalize bootstrap's modal. MIT license.
 *
 *   - lleir@llegeix.me  Sat Nov 16 09:30:00 CEST 2013
 */
var BootstrapModal = function BootstrapModal(opts){
  this.defaults = {
    element: 'modal-window',
    data: {},
    header: {
      'class': null,
      closeButton: {
        text: null,
        icon: 'icon-remove'
      },
      title: 'Modal panel',
      content: null
    },
    body: {
      content: 'Hello',
      'class': null
    },
    footer: {
      content: 'Hello',
      'class': null
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

  this.section = (function(self){
    return function(section) {
      var s = $('.modal-' + section, self.element);
      var settings = self.settings[section];


    if(settings){
      s = $("<div>", {'class': 'modal-' + section + ' '+ settings.class, id: self.defaults.element + 'modal-' + section});

      if(settings.closeButton){
        var closeButtonContent = $('<i/>', {'class': 'close'})
        var icon               = (settings.closeButton.icon || 'remove').match(/^(?:icon-)?(\w+)/)[1];
        closeButtonContent.addClass('icon-' + icon)

        if(settings.closeButton.text)
          closeButtonContent.append(settings.closeButton.text);

        s.append(
          $('<button>', {'class': "close", 'data-dismiss': "modal", 'aria-hidden': "true"})
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

    w = $('<div>', {id: id, 'class': "modal hide fade", tabindex: "-1", role: "dialog",  'aria-labelledby': id+'Label', 'aria-hidden': "true"});

    $.each(self.settings.data, function(k,v){
      w.attr('data-'+k, v);
    });

    w.append(self.header).append(self.body).append(self.footer);

    $('body').append(w);

    return w

  })(this);

  this.show = function(){ this.panel.modal('show'); };

  this.hide = function(){ this.panel.modal('hide'); };

  this.toggle = function(){ this.panel.modal('toggle'); };

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