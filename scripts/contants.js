// Popup's
const popupAddPhoto = document.querySelector('.popup_add-item');
const popupOpenImage = document.querySelector('.popup_open-image');
const popupSetting = document.querySelector('.popup_setting');

// Buttons
const btnAddPhoto = document.querySelector('.title-menu__button-add');
const btnChangeOnGrid = document.querySelector('.buttons__item-grid');
const btnChangeOnNonGrid = document.querySelector('.buttons__item-nogrid');
const btnOpenVideo = document.querySelector('.title-menu__button-video');
const btnOpenImages = document.querySelector('.title-menu__button-photo');
const btnUp = document.querySelector('.buttons__item-up');
const btnSetting = document.querySelector('.setting');

// Overlay
const overlayPopupAddPhoto = document.querySelector('.popup__overlay');
const overlayPopupOpenImage = document.querySelector('.popup__overlay_img');
const overlayPopupSetting = document.querySelector('.popup__overlay_setting');

// Forms
const formAddPhoto = document.querySelector('.popup__form_add-Image')

// Inputs
const popupAddPhotoInputLink = document.querySelector('.input-link');
const popupAddPhotoInputModel = document.querySelector('.input-model');
const popupAddPhotoInputDevice = document.querySelector('.input-device');
const popupAddPhotoInputDescription = document.querySelector('.input-description');

// Container-images in profile
const firstContainer = document.querySelector('.first__container');
const secondContainer = document.querySelector('.second__container');
const thirdContainer = document.querySelector('.third__container');


// Other dom-elements
const mainContent = document.querySelector('.main-content-grid');
const imageInPopupImage = document.querySelector('.popup__image-scale');
const popupImageModel = document.querySelector('.image-model');
const popupImageDevice = document.querySelector('.image-device');
const popupImageDescription = document.querySelector('.image-description');
const pageLoading = document.querySelector('.page-loading');
const textInPopupImage = document.querySelector('.container-text') 
const logo = document.querySelector('.header__logo') 
const videoContent = document.querySelector('.video-content');
const videoElement = document.querySelector('.video-container__video');
const videoText = document.querySelector('.video-content__text');
const upLink = document.querySelector('.up-link');
const btnContainer = document.querySelector('.buttons__container');

export {popupAddPhoto, popupOpenImage, popupSetting, btnAddPhoto, btnChangeOnGrid, btnChangeOnNonGrid, btnOpenVideo, btnOpenImages, btnUp, btnSetting, overlayPopupAddPhoto, overlayPopupOpenImage, overlayPopupSetting,
  formAddPhoto, popupAddPhotoInputLink, popupAddPhotoInputModel, popupAddPhotoInputDevice, popupAddPhotoInputDescription, firstContainer, secondContainer, thirdContainer,
  mainContent, imageInPopupImage, popupImageModel, popupImageDevice, popupImageDescription, pageLoading, textInPopupImage, logo, videoContent, videoElement, videoText, upLink, btnContainer} 
