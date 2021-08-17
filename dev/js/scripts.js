const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById('email-input');
  var submit = document.getElementById('email-submit');

  submit.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!validateEmail(input.value)) {
      input.nextElementSibling.style.opacity = '1'
    } else {
      input.nextElementSibling.style.opacity = '0'
    }
  })

})

