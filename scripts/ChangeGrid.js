export default class ChangeGrid {
  constructor(selectorOne, selectorTwo, selectorThree, selectorFour){
    this._selectorOne = document.querySelectorAll(selectorOne)
    this._selectorTwo = document.querySelectorAll(selectorTwo)
    this._selectorThree = document.querySelectorAll(selectorThree)
    this._selectorFour = document.querySelectorAll(selectorFour)
  }
  
  changeClass(newOneClass, newTwoClass, newThreeClass){

    this._selectorOne.forEach((item) => {
      item.className = newOneClass
    })
    this._selectorTwo.forEach((item) => {
      item.className = newTwoClass
    })
    this._selectorThree.forEach((item) => {
      item.className = newThreeClass
    })
  }

  changeOpacity(btnMinus, btnPlus){
    btnMinus.style.opacity = 0.7
    btnPlus.style.opacity = 1
  }

  classAdd(){
    this._selectorFour.forEach((item) => {
      item.classList.add('display_none')
    })
  }

  classRemove(){
    this._selectorFour.forEach((item) => {
      item.classList.remove('display_none')
    })
  }
}