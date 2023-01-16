import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="bootstrap-modal-demo"
export default class extends Controller {
  static targets = ["modal"];

  launchDemo(event) {
    let modalController = this.getModalController();
    // modalController.setTitle(event.params.title);
    modalController.open();
  }

  connect() {
    // document.getElementById("modal-save-button").addEventListener("click", function(){ alert("Save button pressed!"); });
    // document.getElementById("modal-save-button").addEventListener("click", this.save);
    // this.modalTarget.querySelector(".modal-save-button").addEventListener("click", this.save);

    let modalElement = this.getModalElement();
    let saveButton = modalElement.querySelector(".modal-save-button");
    if (saveButton !== null) {
      saveButton.addEventListener("click", this.save);
      console.log("connect event listener");
      console.log(saveButton);
    }
  }

  disconnect() {
    let modalElement = this.getModalElement();
    let saveButton = modalElement.querySelector(".modal-save-button");
    if (saveButton !== null) {
      saveButton.removeEventListener("click", this.save);
      console.log("disconnect event listener");
      console.log(saveButton);
    }
  }

  save(event) {
    alert("Save button pressed");
  }

  getModalElement() {
    // gets the child element.modal that encapuslates the bootstrap modal syntax.
    // Old-school javascript lets us stay loosely coupled.
    return this.element.querySelector(".modal");
  }

  getModalController() {
    // let modalController = this.application.getControllerForElementAndIdentifier(
    //   this.modalTarget,
    //   "bootstrap-modal"
    // );
    let modalElement = this.getModalElement();
    let modalController = this.application.getControllerForElementAndIdentifier(
      modalElement,
      "bootstrap-modal"
    );
    return modalController;
  }
}
