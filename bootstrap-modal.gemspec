# -*- encoding: utf-8 -*-
require File.expand_path('../lib/bootstrap-modal/version', __FILE__)

Gem::Specification.new do |s|
  s.name        = "bootstrap-modal"
  s.version     = BootstrapModal::VERSION
  s.platform    = Gem::Platform::RUBY
  s.authors     = ["Lleir Borras Metje"]
  s.email       = ["lleir@llegeix/me"]
  s.homepage    = "http://github.com/ifad/bootstrap-modal"
  s.summary     = "Manage bootstrap modals in a simple way"
  s.description = "This gem is an abstraction layer for bootstrap modal windows, it allows the dynamic creation and management"

  s.required_rubygems_version = ">= 1.3.6"

  s.add_dependency 'railties', '>= 3.0'
  s.add_dependency 'twitter-bootstrap-rails', '>= 2.0'

  s.files        = `git ls-files`.split("\n")
  s.require_path = 'lib'
end
