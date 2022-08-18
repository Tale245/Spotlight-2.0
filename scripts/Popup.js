export default class Popup {
  constructor(popupSelector){
    this._popup = document.querySelector(popupSelector)
  }

  open(){
    this.popup.classList.add('popup_active')
  }

  close(){
    this.popup.classList.remove('popup_active')
  }

  // setEventListeners(){
    
  // }
}