// Buttons
const btnSignIn = document.querySelector('.signIn-button');
const btnSignUp = document.querySelector('.signUp-button');
// other DOM-ELEMENTS
const pageLoading = document.querySelector('.page-loading')
const signIn = document.querySelector('.signIn');
const signUp = document.querySelector('.signUp');

window.onload = () => {

  setTimeout(() => {
    pageLoading.remove()
  }, 700)

}

const login = (signIn, signUp) => {
  signIn.classList.toggle('display_none')
  signUp.classList.toggle('display_none')
}

btnSignIn.addEventListener('click', () => {
  login(signIn, signUp)
})
btnSignUp.addEventListener('click', () => {
  login(signIn, signUp)
})