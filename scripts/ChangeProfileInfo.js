export default class ChangePorifleInfo {
  constructor({prof, name, workYears, linkFirst, linkSecond, linkThird, inputProf, inputName, inputWorkYears,
     inputNamelinkFirst, inputNamelinkSecond, 
     inputNamelinkThird, inputlinkFirst, inputlinkSecond, inputlinkThird,
      profileTextAbout, inputTextAbout, inputBackColorText, backColorText,
       profile, inputChangeBackground, firstProfileImage, secondProfileImage,
        thirdProfileImage, inputFirstImage, inputSecondImage, inputThirdImage, popupProfileFirstImage, popupProfileSecondImage, popupProfileThirdImage, form}){
    // Находим селекторы информации в профиле
    this._profileProf = document.querySelector(prof)
    this._profileName = document.querySelector(name)
    this._profileWorkYears = document.querySelector(workYears)
    // Находим селекторы ссылок в профиле
    this._linkFirst = document.querySelector(linkFirst)
    this._linkSecond = document.querySelector(linkSecond)
    this._linkThird = document.querySelector(linkThird)
    // Находим инпуты информации для профиля в попапе настроек
    this._inputProf = document.querySelector(inputProf)
    this._inputName = document.querySelector(inputName)
    this._inputWorkYears = document.querySelector(inputWorkYears)
    // Находим инпуты имени ссылок для профиля в попапе
    this._inputNameLinkFirst = document.querySelector(inputNamelinkFirst)
    this._inputNameLinkSecond = document.querySelector(inputNamelinkSecond)
    this._inputNameLinkThids = document.querySelector(inputNamelinkThird)
    // Находим инпуты ссылок для профиля в попапе
    this._inputLinkFirst = document.querySelector(inputlinkFirst)
    this._inputLinkSecond = document.querySelector(inputlinkSecond)
    this._inputLinkThids = document.querySelector(inputlinkThird)
    // Находим селектор ИНФОРМАЦИИ "О СЕБЕ"
    this._profileTextAbout = document.querySelector(profileTextAbout)
    // Находим инпут ИНФОРМАЦИИ "О СЕБЕ"
    this._inputTextAbout = document.querySelector(inputTextAbout)
    // Находим селектор бэкграунда цвета слов сайта и "О себе"
    this._backgroundColorText = document.querySelectorAll(backColorText)
    this._backgroundColorText1 = document.querySelector(backColorText)
    // Находим инпут смены бэкграунд цвета слов и "О себе"
    this._inputBackgroundColorText = document.querySelector(inputBackColorText)
    // Находим селектор профиля
    this._profile = document.querySelector(profile)
    // Находим инпут смены фона профиля
    this._inputChangeBackground = document.querySelector(inputChangeBackground)
    // Находим фото профиля
    this._firstProfileImage = document.querySelector(firstProfileImage)
    this._secondProfileImage = document.querySelector(secondProfileImage)
    this._thirdProfileImage= document.querySelector(thirdProfileImage)
    // Находим фото профиля в попапе
    this._popupProfileFirstImage = document.querySelector(popupProfileFirstImage)
    this._popupProfileSecondImage = document.querySelector(popupProfileSecondImage)
    this._popupProfileThirdImage = document.querySelector(popupProfileThirdImage)
    // Находим инпуты для смены фото профиля
    this._inputFirstImage = document.querySelector(inputFirstImage)
    this._inputSecondImage = document.querySelector(inputSecondImage)
    this._inputThirdImage = document.querySelector(inputThirdImage)
    // Кнопка сабмита
    this._form = document.querySelector(form)
  }

  // Меняем данные профиля
  _changeProfileInfo(){
    this._profileProf.textContent = this._inputProf.value;
    this._profileName.textContent = this._inputName.value;
    this._profileWorkYears.textContent = this._inputWorkYears.value;
  }

  // Меняем фото профиля
  _changeProfileImage(){
    this._firstProfileImage.src = this._inputFirstImage.value
    this._secondProfileImage.src = this._inputSecondImage.value
    this._thirdProfileImage.src = this._inputThirdImage.value
  }

  // Меняем названия и url ссылок
  _changeUrlAndName(){
    this._linkFirst.textContent = this._inputNameLinkFirst.value;
    this._linkSecond.textContent = this._inputNameLinkSecond.value;
    this._linkThird.textContent = this._inputNameLinkThids.value;

    this._linkFirst.href = this._inputLinkFirst.value;
    this._linkSecond.href = this._inputLinkSecond.value;
    this._linkThird.href = this._inputLinkThids.value;
  }

  // Меняем информацию "О себе"
  _changeInfoAbout(){
    this._profileTextAbout.textContent = this._inputTextAbout.value
  }

  // Меняем задний фон слоав и "О себе"
  _changeColor(){
  this._backgroundColorText.forEach((item) => {
    this._colorValue = this._inputBackgroundColorText.value
    item.style.backgroundColor = this._colorValue
    return this._colorValue
  })

  }
  
  // Меняем задний фон профиля
  _changeBackroundImage(){
    this._url = this._inputChangeBackground.value;
    this._profile.style.backgroundImage = `url(${this._url})`
    return this._url
  }
  
  pasteInfo(){
    this._inputProf.value = this._profileProf.textContent;
    this._inputName.value = this._profileName.textContent;
    this._inputWorkYears.value = this._profileWorkYears.textContent;

    this._inputFirstImage.value = this._firstProfileImage.src;
    this._inputSecondImage.value = this._secondProfileImage.src;
    this._inputThirdImage.value = this._thirdProfileImage.src;

    this._popupProfileFirstImage.style.backgroundImage = `url(${this._firstProfileImage.src})`;
    this._popupProfileSecondImage.style.backgroundImage = `url(${this._secondProfileImage.src})`;
    this._popupProfileThirdImage.style.backgroundImage = `url(${this._thirdProfileImage.src})`;

    this._inputNameLinkFirst.value = this._linkFirst.textContent;
    this._inputNameLinkSecond.value = this._linkSecond.textContent;
    this._inputNameLinkThids.value = this._linkThird.textContent;

    this._inputLinkFirst.value = this._linkFirst.href ;
    this._inputLinkSecond.value = this._linkSecond.href;
    this._inputLinkThids.value = this._linkSecond.href;

    this._inputTextAbout.value = this._profileTextAbout.textContent; 

    this._inputBackgroundColorText.value = this._colorValue

    
    this._inputChangeBackground.value = this._url


  }
  // Подтверждение всех изменений
  submit(){
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._changeProfileInfo()
      this._changeUrlAndName()
      this._changeInfoAbout()
      this._changeColor()
      this._changeBackroundImage()
      this._changeProfileImage()
      this._form.reset()
    })
  }
}