// Import's
import Popup from "./popup.js";
import ChangeGrid from "./ChangeOnNonGrid.js";
import ChangePorifleInfo from "./ChangeProfileInfo.js";
import {popupAddPhoto, popupOpenImage, popupSetting, btnAddPhoto, btnChangeOnGrid, btnChangeOnNonGrid, btnOpenVideo, btnOpenImages, btnUp,
  btnSetting, overlayPopupAddPhoto, overlayPopupOpenImage, overlayPopupSetting,
  formAddPhoto, popupAddPhotoInputLink, popupAddPhotoInputModel, popupAddPhotoInputDevice,
  popupAddPhotoInputDescription, firstContainer, secondContainer, thirdContainer,
  mainContent, imageInPopupImage, popupImageModel, popupImageDevice, popupImageDescription,
  pageLoading, textInPopupImage, logo, videoContent, videoElement, videoText, upLink, btnContainer, titleOfMenu, profileName } from './contants.js';

  titleOfMenu.textContent = `BY ${profileName.textContent}`

const changeProfileInfo = new ChangePorifleInfo({
  prof: '.profile__span_prof',
  name: profileName,
  workYears: '.profile__span_work-years',
  inputProf: '.input__prof',
  inputName: '.input__name',
  inputWorkYears: '.input__work-years',
  linkFirst: '.link_first',
  linkSecond: '.link_second', 
  linkThird: '.link_third',
  inputNamelinkFirst: '.input_CN-first',
  inputNamelinkSecond: '.input_CN-second',
  inputNamelinkThird: '.input_CN-third',
  inputlinkFirst: '.input_url-first',
  inputlinkSecond: '.input_url-second',
  inputlinkThird: '.input_url-third',
  profileTextAbout: '.profile__text_span',
  inputTextAbout: '.popup-setting_input-text',
  inputBackColorText: '.popup-setting_color-text',
  backColorText: '.background',
  profile: '.profile',
  inputChangeBackground: '.popup-setting_input-background',
  firstProfileImage: '.first_image',
  secondProfileImage: '.profile__img-name',
  thirdProfileImage: '.third_image',
  inputFirstImage: '.inputFirstImage',
  inputSecondImage: '.inputSecondImage',
  inputThirdImage: '.inputThirdImage',
  popupProfileFirstImage: '.popup-setting_first-image',
  popupProfileSecondImage: '.popup-setting_second-image',
  popupProfileThirdImage: '.popup-setting_third-image',
  titleOfMenu: titleOfMenu,
  form: '.popup-setting__form',
})

changeProfileInfo.submit()

// при двойном нажатии на кнопку ВВЕРХ ссылка меняется
btnUp.addEventListener('dblclick', () => {
  upLink.href= "#title-menu"
})
// при правом нажатии на кнопку ВВЕРХ ссылка меняется
btnUp.addEventListener('contextmenu', () => {
  upLink.href= "#header";
})

// при наведении на видео, появлятеся описание
videoElement.addEventListener('mouseover', () => {
    videoText.classList.add('opacity');
})
// при наведении на видео, пропадает описание
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
  btnContainer.style.opacity = 0;
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
  btnContainer.style.opacity = 1;

})



// Создаем переменную текущего времени
const date =new Date().toLocaleTimeString().slice(0,-3)

console.log(date)

// Действия при наступлении ночи и утра
// if(date >= '00:00' && date < '05:00'){
//   logo.src = '././images/SPOTLIGHT-night.png'
// }

const changePhoto = (first, second, third) => {
  first.addEventListener('click' , () => {
    second.classList.toggle('display_none');
    third.classList.toggle('display_none');
  })
}
// Логика работы при и после загрузки сайта
window.onload = () => {

  setTimeout(() => {
    pageLoading.remove()
  }, 700)

  btnOpenImages.disabled = true;
  btnOpenImages.style.opacity = 0.7;
  btnChangeOnGrid.style.opacity = 0.7;

  if(window.innerWidth < 900) {
    imageInPopupImage.addEventListener('click', () => {
      closePopup(popupOpenImage)
    })
  }

  if(window.innerWidth < 651) {

    firstContainer.classList.add('display_none');
    thirdContainer.classList.add('display_none');

    changePhoto(secondContainer, secondContainer, firstContainer)
    changePhoto(firstContainer, firstContainer, thirdContainer)
    changePhoto(thirdContainer, thirdContainer, secondContainer)
  }


}



// object with images
const objectWithImages = [
  {link: 'https://images.unsplash.com/photo-1592214066513-e54258f80608?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  model: "Why not?",
  device: 'SONY, ILCE-7RM3',
  description: 'we are'
},
{link: 'https://images.unsplash.com/photo-1592214067051-1f30935f304d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80',
model: "K",
device: 'SONY, ILCE-7RM3',
description: '21-405'
},
  {link: 'https://images.unsplash.com/photo-1584953165389-92aada8fdd22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  model: "Gilli",
  device: 'SONY, ILCE-7RM3',
  description: 'Have a nice day :)'
},
  {link: 'https://images.unsplash.com/photo-1660906864988-fd44913fb3e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  model: "-",
  device: 'Canon 750D',
  description: '321'
},
  {link: 'https://images.unsplash.com/photo-1660906864722-d3e8f2ddbea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
  model: "-",
  device: 'Canon 750D',
  description: 'HI.'
},
{link: 'https://images.unsplash.com/photo-1531439211378-796fe4acab3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
model: "-",
device: 'Canon 750D',
description: 'F L E A P'
},
{link: 'https://images.unsplash.com/photo-1531369201-4f7be267b1de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
model: "-",
device: 'Canon 750D',
description: 'Golden hour of a lifetime ♡'
},
{link: 'https://images.unsplash.com/photo-1580136084408-5cd83c76fed9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
model: "-",
device: 'Canon 750D',
description: 'Golden'
},
{link: 'https://images.unsplash.com/photo-1625360211126-4140bd24d7f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80',
model: "-",
device: 'Canon 750D',
description: 'DUDE'
},
{link: 'https://images.unsplash.com/photo-1625360311623-3e127f40a3e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
model: "-",
device: 'Canon 750D',
description: '31 - 0 - 45'
},
{link: 'https://images.unsplash.com/photo-1660827718505-1070e803962b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
model: "-",
device: 'Canon 750D',
description: '31 - 0 - 45'
},
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
btnSetting.addEventListener('click', () => {
  changeProfileInfo.pasteInfo()
  openPopup(popupSetting)
})

// overlay on popup's
overlayPopupAddPhoto.addEventListener('click', () => {
  closePopup(popupAddPhoto)
})
overlayPopupOpenImage.addEventListener('click', () => {
  closePopup(popupOpenImage)
})
overlayPopupSetting.addEventListener('click', () => {
  closePopup(popupSetting)
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

  changeGrid.changeOpacity(btnChangeOnGrid, btnChangeOnNonGrid)

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

  const changeGrid = new ChangeGrid('.main-content-nogrid', '.main-content__container-nogrid', '.main-content__image-nogrid', '.main-content__text-container')

  changeGrid.changeClass('main-content-grid', 'main-content__container-grid', 'main-content__image-grid');

  changeGrid.classAdd()

  btnChangeOnNonGrid.style.opacity = 1;
  btnChangeOnGrid.style.opacity = 0.7;
})
