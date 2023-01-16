# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "https://ga.jspm.io/npm:@hotwired/stimulus@3.2.1/dist/stimulus.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin "stimulus-animated-number", to: "https://ga.jspm.io/npm:stimulus-animated-number@4.1.0/dist/stimulus-animated-number.mjs"
pin "stimulus-character-counter", to: "https://ga.jspm.io/npm:stimulus-character-counter@4.1.0/dist/stimulus-character-counter.es.js"
pin "stimulus-clipboard", to: "https://ga.jspm.io/npm:stimulus-clipboard@3.2.2/dist/stimulus-clipboard.es.js"
pin "stimulus-content-loader", to: "https://ga.jspm.io/npm:stimulus-content-loader@4.0.1/dist/stimulus-content-loader.es.js"
pin "stimulus-dropdown", to: "https://ga.jspm.io/npm:stimulus-dropdown@2.0.0/dist/stimulus-dropdown.es.js"
pin "hotkeys-js", to: "https://ga.jspm.io/npm:hotkeys-js@3.10.1/dist/hotkeys.esm.js"
pin "stimulus-use", to: "https://ga.jspm.io/npm:stimulus-use@0.50.0/dist/index.js"
pin "stimulus-password-visibility", to: "https://ga.jspm.io/npm:stimulus-password-visibility@2.0.0/dist/stimulus-password-visibility.es.js"
pin "stimulus-scroll-to", to: "https://ga.jspm.io/npm:stimulus-scroll-to@4.0.0/dist/stimulus-scroll-to.es.js"
pin "stimulus-popover", to: "https://ga.jspm.io/npm:stimulus-popover@6.1.0/dist/stimulus-popover.es.js"
pin "stimulus-chartjs", to: "https://ga.jspm.io/npm:stimulus-chartjs@5.0.0/dist/stimulus-chartjs.mjs"
pin "@kurkle/color", to: "https://ga.jspm.io/npm:@kurkle/color@0.3.1/dist/color.esm.js"
pin "chart.js/auto", to: "https://ga.jspm.io/npm:chart.js@4.1.1/auto/auto.js"
pin "stimulus-lightbox", to: "https://ga.jspm.io/npm:stimulus-lightbox@3.1.0/dist/stimulus-lightbox.es.js"
pin "lightgallery", to: "https://ga.jspm.io/npm:lightgallery@2.7.0/lightgallery.es5.js"
pin "stimulus-color-picker", to: "https://ga.jspm.io/npm:stimulus-color-picker@1.1.0/dist/stimulus-color-picker.mjs"
pin "@simonwep/pickr", to: "https://ga.jspm.io/npm:@simonwep/pickr@1.8.2/dist/pickr.min.js"
