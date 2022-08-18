export default class ChangePorifleInfo {
  constructor({prof, name, workYears, linkFirst, linkSecond, linkThird, inputProf, inputName, inputWorkYears,
     inputNamelinkFirst, inputNamelinkSecond, 
     inputNamelinkThird, inputlinkFirst, inputlinkSecond, inputlinkThird,
      profileTextAbout, inputTextAbout, inputBackColorText, backColorText,
       profile, inputChangeBackground, firstProfileImage, secondProfileImage,
        thirdProfileImage, inputFirstImage, inputSecondImage, inputThirdImage, form}){
    // Находим селекторы информации в профиле
    this.profileProf = document.querySelector(prof)
    this.profileName = document.querySelector(name)
    this.profileWorkYears = document.querySelector(workYears)
    // Находим селекторы ссылок в профиле
    this.linkFirst = document.querySelector(linkFirst)
    this.linkSecond = document.querySelector(linkSecond)
    this.linkThird = document.querySelector(linkThird)
    // Находим инпуты информации для профиля в попапе настроек
    this.inputProf = document.querySelector(inputProf)
    this.inputName = document.querySelector(inputName)
    this.inputWorkYears = document.querySelector(inputWorkYears)
    // Находим инпуты имени ссылок для профиля в попапе
    this.inputNameLinkFirst = document.querySelector(inputNamelinkFirst)
    this.inputNameLinkSecond = document.querySelector(inputNamelinkSecond)
    this.inputNameLinkThids = document.querySelector(inputNamelinkThird)
    // Находим инпуты ссылок для профиля в попапе
    this.inputLinkFirst = document.querySelector(inputlinkFirst)
    this.inputLinkSecond = document.querySelector(inputlinkSecond)
    this.inputLinkThids = document.querySelector(inputlinkThird)
    // Находим селектор ИНФОРМАЦИИ "О СЕБЕ"
    this.profileTextAbout = document.querySelector(profileTextAbout)
    // Находим инпут ИНФОРМАЦИИ "О СЕБЕ"
    this.inputTextAbout = document.querySelector(inputTextAbout)
    // Находим селектор бэкграунда цвета слов сайта и "О себе"
    this.backgroundColorText = document.querySelectorAll(backColorText)
    // Находим инпут смены бэкграунд цвета слов и "О себе"
    this.inputBackgroundColorText = document.querySelector(inputBackColorText)
    // Находим селектор профиля
    this.profile = document.querySelector(profile)
    // Находим инпут смены фона профиля
    this.inputChangeBackground = document.querySelector(inputChangeBackground)
    // Находим инпут смены фона профиля
    this.inputChangeBackground = document.querySelector(inputChangeBackground)
    // Находим фото профиля
    this.firstProfileImage = document.querySelector(firstProfileImage)
    this.secondProfileImage = document.querySelector(secondProfileImage)
    this.thirdProfileImage= document.querySelector(thirdProfileImage)
    // Находим инпуты для смены фото профиля
    this.inputFirstImage = document.querySelector(inputFirstImage)
    this.inputSecondImage = document.querySelector(inputSecondImage)
    this.inputThirdImage = document.querySelector(inputThirdImage)
    // Кнопка сабмита
    this.form = document.querySelector(form)
  }

  // Меняем данные профиля
  changeProfileInfo(){
    this.profileProf.textContent = this.inputProf.value;
    this.profileName.textContent = this.inputName.value;
    this.profileWorkYears.textContent = this.inputWorkYears.value;
  }

  // Меняем фото профиля
  changeProfileImage(){
    this.firstProfileImage.src = this.inputFirstImage.value
    this.secondProfileImage.src = this.inputSecondImage.value
    this.thirdProfileImage.src = this.inputThirdImage.value
  }

  // Меняем названия и url ссылок
  changeUrlAndName(){
    this.linkFirst.textContent = this.inputNameLinkFirst.value;
    this.linkSecond.textContent = this.inputNameLinkSecond.value;
    this.linkThird.textContent = this.inputNameLinkThids.value;

    this.linkFirst.href = this.inputLinkFirst.value;
    this.linkSecond.href = this.inputLinkSecond.value;
    this.linkThird.href = this.inputLinkThids.value;
  }

  // Меняем информацию "О себе"
  changeInfoAbout(){
    this.profileTextAbout.textContent = this.inputTextAbout.value
  }

  // Меняем задний фон слоав и "О себе"
  changeColor(){
  this.backgroundColorText.forEach((item) => {
    item.style.backgroundColor = this.inputBackgroundColorText.value
  })
  }
  
  // Меняем задний фон профиля
  changeBackroundImage(){
    this.profile.style.backgroundImage = `url(${this.inputChangeBackground.value})`
  }
  
  // Подтверждение всех изменений
  submit(){
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this.changeProfileInfo()
      this.changeUrlAndName()
      this.changeInfoAbout()
      this.changeColor()
      this.changeBackroundImage()
      this.changeProfileImage()
    })
  }
}