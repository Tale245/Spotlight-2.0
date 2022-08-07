export default class ChangeGrid {
  constructor(selectorOne, selectorTwo, selectorThree, selectorFour){
    this.selectorOne = document.querySelectorAll(selectorOne)
    this.selectorTwo = document.querySelectorAll(selectorTwo)
    this.selectorThree = document.querySelectorAll(selectorThree)
    this.selectorFour = document.querySelectorAll(selectorFour)
  }
  
  changeClass(newOneClass, newTwoClass, newThreeClass){

    this.selectorOne.forEach((item) => {
      item.className = newOneClass
    })
    this.selectorTwo.forEach((item) => {
      item.className = newTwoClass
    })
    this.selectorThree.forEach((item) => {
      item.className = newThreeClass
    })
  }

  classAdd(){
    this.selectorFour.forEach((item) => {
      item.classList.add('display_none')
    })
  }

  classRemove(){
    this.selectorFour.forEach((item) => {
      item.classList.remove('display_none')
    })
  }
}