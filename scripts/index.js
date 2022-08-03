import {popupAddItem, popupOverlay, popupOverlayImage, btnAddItem, mainContainer, formAddImage, inputLink, inputModel, inputDevice, inputDescription, btnGrid, btnNoGrid, mainContent, popupOpenImage, popupImage } from './constants.js';
import AddRemove from "./AddRemove.js";

// Меняем дизайн меню на NO GRID 

btnNoGrid.addEventListener('click', () => {
  const mainContentContainer = document.querySelectorAll('.main-content__container-grid');
const mainContentImage = document.querySelectorAll('.main-content__image-grid');
const mainContentTextContainer = document.querySelectorAll('.main-content__text-container');

const changeMainContentContainerOnNoGrid  = new AddRemove({selector: mainContentContainer, NewClassName: 'main-content__container-nogrid'});
const changeMainContentImageOnNoGrid = new AddRemove({selector: mainContentImage, NewClassName: 'main-content__image-nogrid'});
const changeMainContentTextContainerOnNoGrid = new AddRemove({selector: mainContentTextContainer, NewClassName: 'display_none'});
const changeMainContentOnNoGrid  = new AddRemove({selector: mainContent, NewClassName: 'main-content-nogrid'});

  changeMainContentContainerOnNoGrid.changeClass()
  changeMainContentImageOnNoGrid.changeClass()
  changeMainContentTextContainerOnNoGrid.removeClass()
  changeMainContentOnNoGrid.addClassForAloneSelector()
})

btnGrid.addEventListener('click', () => {
  const mainContentContainer = document.querySelectorAll('.main-content__container-nogrid');
  const mainContentImage = document.querySelectorAll('.main-content__image-nogrid');
  const mainContentTextContainer = document.querySelectorAll('.main-content__text-container');
  const changeMainContentContainerOnGrid  = new AddRemove({selector: mainContentContainer, NewClassName: 'main-content__container-grid'});
  const changeMainContentImageOnGrid = new AddRemove({selector: mainContentImage, NewClassName: 'main-content__image-grid'});
  const changeMainContentTextContainerOnGrid = new AddRemove({selector: mainContentTextContainer, NewClassName: 'display_none'});
  const changeMainContentOnGrid  = new AddRemove({selector: mainContent, NewClassName: 'main-content-grid'});

  changeMainContentContainerOnGrid.changeClass()
  changeMainContentImageOnGrid.changeClass()
  changeMainContentTextContainerOnGrid.addClass()
  changeMainContentOnGrid.addClassForAloneSelector()

})

// Закрытие попапа на ESC
const closePopupOnEsc = (event) => {
  if (event.key === "Escape"){
    const popupIsOpened = document.querySelector('.popup_active')
    closePopup(popupIsOpened)
  }
}
// Функция открытия попапа
const openPopup = (popup) => {
  popup.classList.add('popup_active');
  document.addEventListener('keyup', closePopupOnEsc);
}
// Функция закрытия попапа
const closePopup = (popup) => {
  popup.classList.remove('popup_active');
  document.removeEventListener('keyup', closePopupOnEsc);
}

// Открытие попапа на кнопку
btnAddItem.addEventListener('click', () => {
  openPopup(popupAddItem)
})
// Закрытие попапа кликом на оверлей
popupOverlay.addEventListener('click', () => {
  closePopup(popupAddItem)
})
popupOverlayImage.addEventListener('click', () => {
  closePopup(popupOpenImage)
})
// Функция включающая НЕ ГРИД и отключающая кнопку ГРИД при разрешении экрана менее 631px
window.addEventListener("resize", function() {
  if(this.innerWidth < 631) {
    btnGrid.disabled = true;
    btnGrid.classList.add('buttons__item-grid_disabled');
    popupOpenImage.classList.add('display_none')
  } else {
    btnGrid.disabled = false;
    btnGrid.classList.remove('buttons__item-grid_disabled')
    popupOpenImage.classList.remove('display_none')
    popupOpenImage.classList.remove('popup_active')
  }
}, true);

const ob = [
  {link: 'https://images.unsplash.com/photo-1606102843809-33d32921f96a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  model: "Why not?",
  device: 'Iphone 11',
  description: 'we are'
},
{link: 'https://images.unsplash.com/photo-1448376561459-dbe8868fa34c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
model: "Liza",
device: 'SONY, ILCE-7RM3',
description: 'look at the sky'
},
  {link: 'https://images.unsplash.com/photo-1659462247710-11687c527acf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  model: "My friend",
  device: 'Iphone 13 PRO MAX',
  description: 'Have a nice day :)'
},
  {link: 'https://images.unsplash.com/photo-1609568521324-9c1e0cb56edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  model: "-",
  device: 'Canon 750D',
  description: 'Mood ♡'
},
  {link: 'https://images.unsplash.com/photo-1659431320852-b5b947d7ca7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  model: "-",
  device: 'Canon 750D',
  description: '321'
},
  {link: 'https://images.unsplash.com/photo-1659366700487-11f79bd1247a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  model: "-",
  device: 'Canon 750D',
  description: 'Good night.'
}
]

// Функции сбора данных ипунта и сабмита формы

const addInputValues = (link, model, device, description) => {
  const photoTemplate = document.querySelector('#template').content.querySelector('.main-content__container-grid').cloneNode(true);
  const templateImage = photoTemplate.querySelector('.main-content__image-grid');

  templateImage.src = link;
  templateImage.alt = description;

  const textModel = photoTemplate.querySelector('.span-model');
  const textDevice = photoTemplate.querySelector('.span-device');
  const textDesription = photoTemplate.querySelector('.span-description');
  
  textModel.textContent = model;
  textDevice.textContent = device;
  textDesription.textContent = description;

  const imageModel = popupOpenImage.querySelector('.image-model')
  const imageDevice = popupOpenImage.querySelector('.image-device')
  const imageDescription = popupOpenImage.querySelector('.image-description')

  templateImage.addEventListener('click', () => {
    openPopup(popupOpenImage)
    popupImage.src = link;
    popupImage.alt = description
    imageModel.textContent = model;
    imageDevice.textContent = device;
    imageDescription.textContent = description;
  })
  return photoTemplate
}

// Добавляем карточку на страницу
const createImage = (link, model, device, description) => {
  const card = addInputValues(link, model, device, description);
  mainContainer.prepend(card)
}


// Собираем все нужные данные и описываем логику при сабмите формы
const addImage = (event) => {
  event.preventDefault();
  const device = inputDevice.value
  const model = inputModel.value
  const description = inputDescription.value
  const link = inputLink.value
  createImage(link, model, device, description);
  closePopup(popupAddItem)
  const mainContentContainer = document.querySelectorAll('.main-content__container-nogrid');
  const mainContentImage = document.querySelectorAll('.main-content__image-nogrid');
  const mainContentTextContainer = document.querySelectorAll('.main-content__text-container');
  const changeMainContentContainerOnGrid  = new AddRemove({selector: mainContentContainer, NewClassName: 'main-content__container-grid'});
  const changeMainContentImageOnGrid = new AddRemove({selector: mainContentImage, NewClassName: 'main-content__image-grid'});
  const changeMainContentTextContainerOnGrid = new AddRemove({selector: mainContentTextContainer, NewClassName: 'display_none'});
  const changeMainContentOnGrid  = new AddRemove({selector: mainContent, NewClassName: 'main-content-grid'});
  
  changeMainContentContainerOnGrid.changeClass()
  changeMainContentImageOnGrid.changeClass()
  changeMainContentTextContainerOnGrid.addClass()
  changeMainContentOnGrid.addClassForAloneSelector()

  formAddImage.reset()
}
ob.forEach((item) => {
  createImage(item.link, item.model, item.device, item.description)
})


// Сабмит формы
formAddImage.addEventListener('submit', addImage)
