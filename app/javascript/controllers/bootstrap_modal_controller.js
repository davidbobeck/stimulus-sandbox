import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="bootstrap-modal"
export default class extends Controller {
  static targets = ["title"];
  // static values = {
  //   title: String, default: 'default title'
  // };

  // setTitle(title) {
  //   // alert("setTitle called")
  //   this.titleValue = title;
  // }

  // titleValueChanged() {
  //   // alert("titleValueChanged")
  //   this.titleTarget.innerHTML = this.titleValue;
  // }

  open() {
    // document.body.classList.add("modal-open");
    this.element.setAttribute("style", "display: block;");
    this.element.classList.add("show");
    document.body.innerHTML += '<div class="modal-backdrop fade show"></div>';
  }

  close() {
    // document.body.classList.remove("modal-open");
    this.element.removeAttribute("style");
    this.element.classList.remove("show");
    document.getElementsByClassName("modal-backdrop")[0].remove();
  }
}
