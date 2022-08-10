import ChangeGrid from "./changeOnNonGrid.js";
// Popup's
const popupAddPhoto = document.querySelector('.popup_add-item');
const popupOpenImage = document.querySelector('.popup_open-image');

// Buttons
const btnAddPhoto = document.querySelector('.title-menu__button-add');
const btnChangeOnGrid = document.querySelector('.buttons__item-grid');
const btnChangeOnNonGrid = document.querySelector('.buttons__item-nogrid');
const btnOpenVideo = document.querySelector('.title-menu__button-video');
const btnOpenImages = document.querySelector('.title-menu__button-photo');
const btnUp = document.querySelector('.buttons__item-up');

// Overlay
const overlayPopupAddPhoto = document.querySelector('.popup__overlay');
const overlayPopupOpenImage = document.querySelector('.popup__overlay_img');

// Forms
const formAddPhoto = document.querySelector('.popup__form_add-Image')

// Inputs
const popupAddPhotoInputLink = document.querySelector('.input-link');
const popupAddPhotoInputModel = document.querySelector('.input-model');
const popupAddPhotoInputDevice = document.querySelector('.input-device');
const popupAddPhotoInputDescription = document.querySelector('.input-description');

// Other dom-elements
const mainContent = document.querySelector('.main-content-grid');
const imageInPopupImage = document.querySelector('.popup__image-scale');
const popupImageModel = document.querySelector('.image-model');
const popupImageDevice = document.querySelector('.image-device');
const popupImageDescription = document.querySelector('.image-description');
const pageLoading = document.querySelector('.page-loading');
const textInPopupImage = popupOpenImage.querySelector('.container-text') 
const logo = document.querySelector('.header__logo') 
const videoContent = document.querySelector('.video-content');
const videoElement = document.querySelector('.video-container__video');
const videoText = document.querySelector('.video-content__text');
const upLink = document.querySelector('.up-link');

btnUp.addEventListener('dblclick', () => {
    upLink.href= "#title-menu"
})
btnUp.addEventListener('contextmenu', () => {
  upLink.href= "#header";
})


videoElement.addEventListener('mouseover', () => {
    videoText.classList.add('opacity');
})
videoElement.addEventListener('mouseout', () => {
  setTimeout(() => {
    videoText.classList.remove('opacity');
  }, 10000)
})

btnOpenVideo.addEventListener('click', () => {
  videoContent.classList.remove('display_none');
  mainContent.classList.add('display_none')
  btnOpenImages.style.opacity = 1
  btnOpenVideo.style.opacity = 0.7
  btnChangeOnGrid.style.opacity = 0;
  btnChangeOnNonGrid.style.opacity = 0;
  btnOpenImages.disabled = false;
})
btnOpenImages.addEventListener('click', () => {
  videoContent.classList.add('display_none');
  mainContent.classList.remove('display_none');
  videoText.classList.remove('opacity');
  btnOpenImages.style.opacity = 0.7;
  btnOpenVideo.style.opacity = 1
  btnOpenImages.disabled = true;
  videoElement.load()
  btnChangeOnGrid.style.opacity = 0.7;
  btnChangeOnNonGrid.style.opacity = 1;

  const changeGrid = new ChangeGrid('.main-content-nogrid', '.main-content__container-nogrid', '.main-content__image-nogrid', '.main-content__text-container')

  changeGrid.changeClass('main-content-grid', 'main-content__container-grid', 'main-content__image-grid');

  changeGrid.classAdd()

})

// videoElement.onmouseout = videoText.classList.remove('display_flex');


// Создаем переменную текущего времени
const date =new Date().toLocaleTimeString().slice(0,-3)

// Выделяем из нее только часы и минуты
// const fullHours = `${date.getHours()}:${date.getMinutes()}`

console.log(date)

// Действия при наступлении ночи и утра
if(date >= '00:00' && date < '05:00'){
  logo.src = '././images/SPOTLIGHT-night.png'
}
// Логика работы при и после загрузки сайта
window.onload = () => {

  setTimeout(() => {
    pageLoading.remove()
  }, 700)

  btnOpenImages.disabled = true;
  btnOpenImages.style.opacity = 0.7;
  btnChangeOnGrid.style.opacity = 0.7;

  if(window.innerWidth < 700) {

    popupOpenImage.remove()

    btnChangeOnGrid.disabled = true;
    btnChangeOnGrid.style.opacity = 0.7;
    const changeGrid = new ChangeGrid('.main-content-grid', '.main-content__container-grid', '.main-content__image-grid', '.main-content__text-container')
    
    changeGrid.changeClass('main-content-nogrid', 'main-content__container-nogrid', 'main-content__image-nogrid')
      
    changeGrid.classRemove()
  }

}

// object with images
const objectWithImages = [
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


// functions openPopup and closePopup
const openPopup = (popup) => {
  popup.classList.add('popup_active')
}
const closePopup = (popup) => {
  popup.classList.remove('popup_active')
}

// add EventListener on a buttons
btnAddPhoto.addEventListener('click', () => {
  openPopup(popupAddPhoto)
})

// overlay on popup's
overlayPopupAddPhoto.addEventListener('click', () => {
  closePopup(popupAddPhoto)
})
overlayPopupOpenImage.addEventListener('click', () => {
  closePopup(popupOpenImage)
})

// function add photo 1/4 –––––––––– START
const addImage = (model, link, device, description) => {
  const templateElement = document.querySelector('#template').content.querySelector('.main-content__container-grid').cloneNode(true);
  const templateImage = templateElement.querySelector('.main-content__image-grid')

  templateImage.loading = "lazy"
  templateImage.alt = model;
  templateImage.src = link;

  const templateModel = templateElement.querySelector('.span-model')
  const templateDevice = templateElement.querySelector('.span-device')
  const templateDescription = templateElement.querySelector('.span-description')

  templateModel.textContent = model;
  templateDevice.textContent = device;
  templateDescription.textContent = description;

  // open popupImage
  templateImage.addEventListener('click', () => {

    imageInPopupImage.src = link
    imageInPopupImage.alt = model

    popupImageModel.textContent = model;
    popupImageDevice.textContent = device;
    popupImageDescription.textContent = description;


    openPopup(popupOpenImage)
    
  })

  return templateElement
}

// function add photo 2/4
const insertPhoto = (model, link, device, description) => {
  mainContent.prepend(addImage(model, link, device, description))
}


// function add photo 3/4
const selectAllData = () => {

  const link = popupAddPhotoInputLink.value
  const model = popupAddPhotoInputModel.value
  const device = popupAddPhotoInputDevice.value;
  const description = popupAddPhotoInputDescription.value;

  insertPhoto(model, link, device, description)

  const changeGrid = new ChangeGrid('.main-content-nogrid', '.main-content__container-nogrid', '.main-content__image-nogrid', '.main-content__text-container')

  changeGrid.changeClass('main-content-grid', 'main-content__container-grid', 'main-content__image-grid');

  changeGrid.classAdd()

  formAddPhoto.reset()
  closePopup(popupAddPhoto)
}
// insert images from object
objectWithImages.forEach((item) => {
  insertPhoto(item.model, item.link, item.device, item.description)
})

// function add photo 4/4 –––––––––– SUBMIT
formAddPhoto.addEventListener('submit', (evt) => {
  evt.preventDefault();
  selectAllData()
})

// change menu on No Grid design
btnChangeOnNonGrid.addEventListener('click', () => {

  textInPopupImage.classList.add('display_none')
  
  const changeGrid = new ChangeGrid('.main-content-grid', '.main-content__container-grid', '.main-content__image-grid', '.main-content__text-container')

  changeGrid.changeClass('main-content-nogrid', 'main-content__container-nogrid', 'main-content__image-nogrid')

  changeGrid.classRemove()

  btnChangeOnNonGrid.style.opacity = 0.7;
  btnChangeOnGrid.style.opacity = 1;

})

// change menu on Grid design
btnChangeOnGrid.addEventListener('click', () => {

  textInPopupImage.classList.remove('display_none')

  popupOpenImage.classList.add('container-text');

  const changeGrid = new ChangeGrid('.main-content-nogrid', '.main-content__container-nogrid', '.main-content__image-nogrid', '.main-content__text-container')

  changeGrid.changeClass('main-content-grid', 'main-content__container-grid', 'main-content__image-grid');

  changeGrid.classAdd()

  btnChangeOnNonGrid.style.opacity = 1;
  btnChangeOnGrid.style.opacity = 0.7;
})
