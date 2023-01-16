class HomeController < ApplicationController
  def index
  end

  def stimulus_animated_number
  end

  def stimulus_character_counter
  end

  def stimulus_chart
    @chart_data = {
      labels: %w[January February March April May June July],
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'transparent',
        borderColor: '#3B82F6',
        data: [37, 83, 78, 54, 12, 5, 99]
      }]
    }

    @chart_options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  end

  def stimulus_clipboard
  end

  def stimulus_color_picker
  end

  def stimulus_content_loader
  end

  def stimulus_content
    sleep(2)
    render plain: "This content dynamically loaded by Stimulus - FTW"
  end

  def stimulus_lightbox
  end

  def stimulus_password_visibility
  end

  def stimulus_popover
  end

  def stimulus_popover_content
    # render plain: "AJAX content"
    render partial: "stimulus_popover_content"
  end

  def stimulus_scroll_to
  end

  def bootstrap_modal_demo
  end

end
