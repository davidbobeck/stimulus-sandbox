import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="play"
export default class extends Controller {
  static targets = [ "redBox", "bucket" ]
  static values = {
    color: String,
    background: String,
    colorBy: Boolean
  }
  static classes = [ "wow" ]

  //-----------------------
  // Life Cycle callbacks
  //-----------------------

  initialize() {
    // alert("initialize")
  }

  redBoxTargetConnected(el) {
    this.redBoxTarget.innerHTML = "click me and I will change color"
    // alert("redBoxTargetConnected")
    this.redBoxTarget.classList.add(...this.wowClasses)
  }

  connect() {
    // console.log("The " + this.identifier + " controller is alive")
    // alert("connect")
  }

  static afterLoad(identifier, application) {
    // alert("afterLoad")
  }

  //-----------------------
  // Custom methods
  //-----------------------

  fillRed(event) {
    // alert("fillRed was clicked")
    // console.log(event)

    if (this.hasColorByValue) {
      this.redBoxTarget.style.color = this.colorValue
      event.target.style.backgroundColor = this.backgroundValue
      this.colorByValue = undefined
    } else {
      this.redBoxTarget.style.color = event.params["color"]
      event.target.style.backgroundColor = event.params["background"]
    }

    alert(this.redBoxTargets.length + " redBox targets found")
    // this.backgroundValue = "lightblue"
  }

  keyPress(event) {
    console.log(event)
    alert("You smashed ctrl+space")
  }

  backgroundValueChanged(toColor, fromColor) {
    // this.redBoxTarget.style.backgroundColor = toColor
  }
}
