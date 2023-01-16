// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)


// to import into importmap, do this ...
// $ bin/importmap pin stimulus-animated-number
// $ bin/importmap pin stimulus-character-counter
// $ bin/importmap pin stimulus-clipboard
// $ bin/importmap pin stimulus-content-loader
// $ bin/importmap pin stimulus-dropdown
// $ bin/importmap pin stimulus-password-visibility
// $ bin/importmap pin stimulus-scroll-to
// $ bin/importmap pin stimulus-popover
// $ bin/importmap pin stimulus-chartjs
// $ bin/importmap pin stimulus-lightbox
// $ bin/importmap pin stimulus-color-picker

import AnimatedNumber from "stimulus-animated-number"
import CharacterCounter from "stimulus-character-counter"
import Clipboard from "stimulus-clipboard"
import ContentLoader from "stimulus-content-loader"
import Dropdown from "stimulus-dropdown"
import PasswordVisibility from "stimulus-password-visibility"
import ScrollTo from "stimulus-scroll-to"
import Popover from "stimulus-popover"
import Chart from "stimulus-chartjs"
import Lightbox from "stimulus-lightbox"
import ColorPicker from "stimulus-color-picker"

application.register('animated-number', AnimatedNumber)
application.register('character-counter', CharacterCounter)
application.register('clipboard', Clipboard)
application.register('content-loader', ContentLoader)
application.register('dropdown', Dropdown)
application.register('password-visibility', PasswordVisibility)
application.register('scroll-to', ScrollTo)
application.register('popover', Popover)
application.register('chart', Chart)
application.register('lightbox', Lightbox)
application.register('color-picker', ColorPicker)
