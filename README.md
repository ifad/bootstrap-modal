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

    //= require bootstrapmodal

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

Built after [data-confirm-modal](https://github.com/ifad/data-confirm-modal) - check it out.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
