# Bootstrap Modal

An abstraction layer for [Bootstrap's modals](http://twitter.github.io/bootstrap/javascript.html#modals)
to create and manipulate them through JavaScrip without the need of any HTML/DOM
element.

## Installation

Add this line to your application's Gemfile:

    gem 'bootstrap-modal', github: 'ifad/bootstrap-modal'

Then execute:

    $ bundle

And then require the Javascript from your `application.js`:

    //= require bootstrap-modal

## Usage

From JavaScript:

    var bm = new BootstrapModal({
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
    });
    bm.show();
    bm.hide();

## Authors

* LLeir Borras Metje ([@lleirborras](https://github.com/lleirborras))
* Marcello Barnaba ([@vjt](https://github.com/vjt))

## Background

Spinned off a corporate [IFAD](http://github.com/ifad/) application in which
an user did too much damage because the confirm wasn't *THAT* explicit ... ;-).

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
