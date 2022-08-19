export default class Popup {
  constructor(popupSelector){
    this._popup = document.querySelector(popupSelector)
  }

  open(){
    this._popup.classList.add('popup_active')
  }

  close(){
    this._popup.classList.remove('popup_active')
  }

  // setEventListeners(){
    
  // }
}