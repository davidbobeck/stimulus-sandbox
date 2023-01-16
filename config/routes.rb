Rails.application.routes.draw do
  root "home#index"
  get 'home/index'

  get 'stimulus_animated_number', to: "home#stimulus_animated_number"
  get 'stimulus_chart', to: "home#stimulus_chart"
  get 'stimulus_character_counter', to: "home#stimulus_character_counter"
  get 'stimulus_clipboard', to: "home#stimulus_clipboard"
  get 'stimulus_color_picker', to: "home#stimulus_color_picker"
  get 'stimulus_content_loader', to: "home#stimulus_content_loader"
  get 'stimulus_content', to: "home#stimulus_content"
  get 'stimulus_dropdown', to: "home#stimulus_dropdown"
  get 'stimulus_lightbox', to: "home#stimulus_lightbox"
  get 'stimulus_password_visibility', to: "home#stimulus_password_visibility"
  get 'stimulus_popover', to: "home#stimulus_popover"
  get 'stimulus_popover_content', to: "home#stimulus_popover_content"
  get 'stimulus_scroll_to', to: "home#stimulus_scroll_to"

  get 'bootstrap_modal_demo', to: "home#bootstrap_modal_demo"

end
