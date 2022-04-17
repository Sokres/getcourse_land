/*  Форма S.M.A.R.T. A1 4 недели */
// (function () {
//   window.addEventListener('load', function(){
// 		let loc = document.getElementById("50029061944e56359ea");
// 		loc.value = window.location.href;
// 		let ref = document.getElementById("50029061944e56359earef");
// 		ref.value = document.referrer;

// 		let statUrl = "https://get.anglofan.ru/stat/counter?ref=" + encodeURIComponent(document.referrer)
// 			+ "&loc=" + encodeURIComponent(document.location.href);
// 		document.getElementById('gccounterImgContainer').innerHTML
// 			= "<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";
// 	});
// })();
// ======================================
// (function () {
//   let usernameEl = document.querySelector('#name4wA1');
//   let emailEl = document.querySelector('#email4wA1');
//   let form = document.querySelector('#ltForm6677853');

//   let checkUsername = () => {

//     let valid = false;

//     let min = 3,
//       max = 25;

//     let username = usernameEl.value.trim();

//     if (!isRequired(username)) {
//       showError(usernameEl, 'Имя не может быть пустым');
//     } else if (!isBetween(username.length, min, max)) {
//       showError(usernameEl, `Имя не может быть меньше ${min}`)
//     } else {
//       showSuccess(usernameEl);
//       valid = true;
//     }
//     return valid;
//   };


//   let checkEmail = () => {
//     let valid = false;
//     let email = emailEl.value.trim();
//     if (!isRequired(email)) {
//       showError(emailEl, 'Email не может быть пустым');
//     } else if (!isEmailValid(email)) {
//       showError(emailEl, 'Неверный формат Email.')
//     } else {
//       showSuccess(emailEl);
//       valid = true;
//     }
//     return valid;
//   };

//   let isEmailValid = (email) => {
//     let re =
//       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
//   };


//   let isRequired = value => value === '' ? false : true;
//   let isBetween = (length, min, max) => length < min || length > max ? false : true;


//   let showError = (input, message) => {
//     // get the form-field element
//     let formField = input.parentElement;
//     // add the error class
//     formField.classList.remove('success');
//     formField.classList.add('error');

//     // show the error message
//     let error = formField.querySelector('.from-get--error');
//     error.textContent = message;
//   };

//   let showSuccess = (input) => {
//     // get the form-field element
//     let formField = input.parentElement;

//     // remove the error class
//     formField.classList.remove('error');
//     formField.classList.add('success');

//     // hide the error message
//     let error = formField.querySelector('.from-get--error');
//     error.textContent = '';
//   }


//   form.addEventListener('submit', function (e) {
//     // prevent the form from submitting
//     e.preventDefault();

//     // validate fields
//     let isUsernameValid = checkUsername(),
//       isEmailValid = checkEmail();

//     let isFormValid = isUsernameValid &&
//       isEmailValid;

//     // submit to the server if the form is valid
//     if (isFormValid) {

//     }
//   });


//   let debounce = (fn, delay = 500) => {
//     let timeoutId;
//     return (...args) => {
//       // cancel the previous timer
//       if (timeoutId) {
//         clearTimeout(timeoutId);
//       }
//       // setup a new timer
//       timeoutId = setTimeout(() => {
//         fn.apply(null, args)
//       }, delay);
//     };
//   };

//   form.addEventListener('input', debounce(function (e) {
//     switch (e.target.id) {
//       case 'name4wA1':
//         checkUsername();
//         break;
//       case 'email4wA1':
//         checkEmail();
//         break;
//     }
//   }));
// })();
/* ------------- */


/*  Форма S.M.A.R.T. A2 4 недели */
(function () {

  window.addEventListener('load', function () {
    let loc = document.getElementById("50207461751eb4e9403");
    loc.value = window.location.href;
    let ref = document.getElementById("50207461751eb4e9403ref");
    ref.value = document.referrer;

    let statUrl = "https://get.anglofan.ru/stat/counter?ref=" + encodeURIComponent(document.referrer) +
      "&loc=" + encodeURIComponent(document.location.href);
    document.getElementById('gccounterImgContainer').innerHTML = "<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";
  });

})();
// ======================================
// (function () {
//   let usernameEl = document.querySelector('#name4wA2');
//   let emailEl = document.querySelector('#email4wA2');

//   let form = document.querySelector('#ltForm2575038');


//   let checkUsername = () => {

//     let valid = false;

//     let min = 3,
//       max = 25;

//     let username = usernameEl.value.trim();

//     if (!isRequired(username)) {
//       showError(usernameEl, 'Имя не может быть пустым');
//     } else if (!isBetween(username.length, min, max)) {
//       showError(usernameEl, `Имя не может быть меньше ${min}`)
//     } else {
//       showSuccess(usernameEl);
//       valid = true;
//     }
//     return valid;
//   };


//   let checkEmail = () => {
//     let valid = false;
//     let email = emailEl.value.trim();
//     if (!isRequired(email)) {
//       showError(emailEl, 'Email не может быть пустым');
//     } else if (!isEmailValid(email)) {
//       showError(emailEl, 'Неверный формат Email.')
//     } else {
//       showSuccess(emailEl);
//       valid = true;
//     }
//     return valid;
//   };

//   let isEmailValid = (email) => {
//     let re =
//       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
//   };


//   let isRequired = value => value === '' ? false : true;
//   let isBetween = (length, min, max) => length < min || length > max ? false : true;


//   let showError = (input, message) => {
//     // get the form-field element
//     let formField = input.parentElement;
//     // add the error class
//     formField.classList.remove('success');
//     formField.classList.add('error');

//     // show the error message
//     let error = formField.querySelector('.from-get--error');
//     error.textContent = message;
//   };

//   let showSuccess = (input) => {
//     // get the form-field element
//     let formField = input.parentElement;

//     // remove the error class
//     formField.classList.remove('error');
//     formField.classList.add('success');

//     // hide the error message
//     let error = formField.querySelector('.from-get--error');
//     error.textContent = '';
//   }


//   form.addEventListener('submit', function (e) {
//     // prevent the form from submitting
//     e.preventDefault();

//     // validate fields
//     let isUsernameValid = checkUsername(),
//       isEmailValid = checkEmail();

//     let isFormValid = isUsernameValid &&
//       isEmailValid;

//     // submit to the server if the form is valid
//     if (isFormValid) {

//     }
//   });


//   let debounce = (fn, delay = 500) => {
//     let timeoutId;
//     return (...args) => {
//       // cancel the previous timer
//       if (timeoutId) {
//         clearTimeout(timeoutId);
//       }
//       // setup a new timer
//       timeoutId = setTimeout(() => {
//         fn.apply(null, args)
//       }, delay);
//     };
//   };

//   form.addEventListener('input', debounce(function (e) {
//     switch (e.target.id) {
//       case 'name4wA2':
//         checkUsername();
//         break;
//       case 'email4wA2':
//         checkEmail();
//         break;
//     }
//   }));
// })();
/* ------------- */


/*  Форма S.M.A.R.T. B1 4 недели */
(function () {
  window.addEventListener('load', function () {
    let loc = document.getElementById("50207761751ebced77f");
    loc.value = window.location.href;
    let ref = document.getElementById("50207761751ebced77fref");
    ref.value = document.referrer;

    let statUrl = "https://get.anglofan.ru/stat/counter?ref=" + encodeURIComponent(document.referrer) +
      "&loc=" + encodeURIComponent(document.location.href);
    document.getElementById('gccounterImgContainer').innerHTML = "<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";
  });

})();
// ======================================
// (function () {
//   let usernameEl = document.querySelector('#name4wB1');
//   let emailEl = document.querySelector('#email4wB1');

//   let form = document.querySelector('#ltForm186011');


//   let checkUsername = () => {

//     let valid = false;

//     let min = 3,
//       max = 25;

//     let username = usernameEl.value.trim();

//     if (!isRequired(username)) {
//       showError(usernameEl, 'Имя не может быть пустым');
//     } else if (!isBetween(username.length, min, max)) {
//       showError(usernameEl, `Имя не может быть меньше ${min}`)
//     } else {
//       showSuccess(usernameEl);
//       valid = true;
//     }
//     return valid;
//   };


//   let checkEmail = () => {
//     let valid = false;
//     let email = emailEl.value.trim();
//     if (!isRequired(email)) {
//       showError(emailEl, 'Email не может быть пустым');
//     } else if (!isEmailValid(email)) {
//       showError(emailEl, 'Неверный формат Email.')
//     } else {
//       showSuccess(emailEl);
//       valid = true;
//     }
//     return valid;
//   };

//   let isEmailValid = (email) => {
//     let re =
//       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
//   };


//   let isRequired = value => value === '' ? false : true;
//   let isBetween = (length, min, max) => length < min || length > max ? false : true;


//   let showError = (input, message) => {
//     // get the form-field element
//     let formField = input.parentElement;
//     // add the error class
//     formField.classList.remove('success');
//     formField.classList.add('error');

//     // show the error message
//     let error = formField.querySelector('.from-get--error');
//     error.textContent = message;
//   };

//   let showSuccess = (input) => {
//     // get the form-field element
//     let formField = input.parentElement;

//     // remove the error class
//     formField.classList.remove('error');
//     formField.classList.add('success');

//     // hide the error message
//     let error = formField.querySelector('.from-get--error');
//     error.textContent = '';
//   }


//   form.addEventListener('submit', function (e) {
//     // prevent the form from submitting
//     e.preventDefault();

//     // validate fields
//     let isUsernameValid = checkUsername(),
//       isEmailValid = checkEmail();

//     let isFormValid = isUsernameValid &&
//       isEmailValid;

//     // submit to the server if the form is valid
//     if (isFormValid) {

//     }
//   });


//   let debounce = (fn, delay = 500) => {
//     let timeoutId;
//     return (...args) => {
//       // cancel the previous timer
//       if (timeoutId) {
//         clearTimeout(timeoutId);
//       }
//       // setup a new timer
//       timeoutId = setTimeout(() => {
//         fn.apply(null, args)
//       }, delay);
//     };
//   };

//   form.addEventListener('input', debounce(function (e) {
//     switch (e.target.id) {
//       case 'name4wB1':
//         checkUsername();
//         break;
//       case 'email4wB1':
//         checkEmail();
//         break;
//     }
//   }));
// })();
/* ------------- */


/*  Форма S.M.A.R.T. A1 16 недель */
(function () {
  window.addEventListener('load', function () {
    let loc = document.getElementById("502080617562e96c470");
    loc.value = window.location.href;
    let ref = document.getElementById("502080617562e96c470ref");
    ref.value = document.referrer;

    let statUrl = "https://get.anglofan.ru/stat/counter?ref=" + encodeURIComponent(document.referrer) +
      "&loc=" + encodeURIComponent(document.location.href);
    document.getElementById('gccounterImgContainer').innerHTML = "<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";
  });
})();
// ======================================
// (function () {
//   let usernameEl = document.querySelector('#name16wA1');
//   let emailEl = document.querySelector('#email16wA1');

//   let form = document.querySelector('#ltForm8662627');


//   let checkUsername = () => {

//     let valid = false;

//     let min = 3,
//       max = 25;

//     let username = usernameEl.value.trim();

//     if (!isRequired(username)) {
//       showError(usernameEl, 'Имя не может быть пустым');
//     } else if (!isBetween(username.length, min, max)) {
//       showError(usernameEl, `Имя не может быть меньше ${min}`)
//     } else {
//       showSuccess(usernameEl);
//       valid = true;
//     }
//     return valid;
//   };


//   let checkEmail = () => {
//     let valid = false;
//     let email = emailEl.value.trim();
//     if (!isRequired(email)) {
//       showError(emailEl, 'Email не может быть пустым');
//     } else if (!isEmailValid(email)) {
//       showError(emailEl, 'Неверный формат Email.')
//     } else {
//       showSuccess(emailEl);
//       valid = true;
//     }
//     return valid;
//   };

//   let isEmailValid = (email) => {
//     let re =
//       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
//   };


//   let isRequired = value => value === '' ? false : true;
//   let isBetween = (length, min, max) => length < min || length > max ? false : true;


//   let showError = (input, message) => {
//     // get the form-field element
//     let formField = input.parentElement;
//     // add the error class
//     formField.classList.remove('success');
//     formField.classList.add('error');

//     // show the error message
//     let error = formField.querySelector('.from-get--error');
//     error.textContent = message;
//   };

//   let showSuccess = (input) => {
//     // get the form-field element
//     let formField = input.parentElement;

//     // remove the error class
//     formField.classList.remove('error');
//     formField.classList.add('success');

//     // hide the error message
//     let error = formField.querySelector('.from-get--error');
//     error.textContent = '';
//   }


//   form.addEventListener('submit', function (e) {
//     // prevent the form from submitting
//     e.preventDefault();

//     // validate fields
//     let isUsernameValid = checkUsername(),
//       isEmailValid = checkEmail();

//     let isFormValid = isUsernameValid &&
//       isEmailValid;

//     // submit to the server if the form is valid
//     if (isFormValid) {

//     }
//   });


//   let debounce = (fn, delay = 500) => {
//     let timeoutId;
//     return (...args) => {
//       // cancel the previous timer
//       if (timeoutId) {
//         clearTimeout(timeoutId);
//       }
//       // setup a new timer
//       timeoutId = setTimeout(() => {
//         fn.apply(null, args)
//       }, delay);
//     };
//   };

//   form.addEventListener('input', debounce(function (e) {
//     switch (e.target.id) {
//       case 'name16wA1':
//         checkUsername();
//         break;
//       case 'email16wA1':
//         checkEmail();
//         break;
//     }
//   }));
// })();
/* ------------- */


/*  Форма S.M.A.R.T. A2 16 недель */
(function () {
  window.addEventListener('load', function () {
    let loc = document.getElementById("502082617562fc51543");
    loc.value = window.location.href;
    let ref = document.getElementById("502082617562fc51543ref");
    ref.value = document.referrer;

    let statUrl = "https://get.anglofan.ru/stat/counter?ref=" + encodeURIComponent(document.referrer) +
      "&loc=" + encodeURIComponent(document.location.href);
    document.getElementById('gccounterImgContainer').innerHTML = "<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";
  });
})();
// ======================================
// (function () {
//   let usernameEl = document.querySelector('#name16wA2');
//   let emailEl = document.querySelector('#email16wA2');

//   let form = document.querySelector('#ltForm7854703');


//   let checkUsername = () => {

//     let valid = false;

//     let min = 3,
//       max = 25;

//     let username = usernameEl.value.trim();

//     if (!isRequired(username)) {
//       showError(usernameEl, 'Имя не может быть пустым');
//     } else if (!isBetween(username.length, min, max)) {
//       showError(usernameEl, `Имя не может быть меньше ${min}`)
//     } else {
//       showSuccess(usernameEl);
//       valid = true;
//     }
//     return valid;
//   };


//   let checkEmail = () => {
//     let valid = false;
//     let email = emailEl.value.trim();
//     if (!isRequired(email)) {
//       showError(emailEl, 'Email не может быть пустым');
//     } else if (!isEmailValid(email)) {
//       showError(emailEl, 'Неверный формат Email.')
//     } else {
//       showSuccess(emailEl);
//       valid = true;
//     }
//     return valid;
//   };

//   let isEmailValid = (email) => {
//     let re =
//       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
//   };


//   let isRequired = value => value === '' ? false : true;
//   let isBetween = (length, min, max) => length < min || length > max ? false : true;


//   let showError = (input, message) => {
//     // get the form-field element
//     let formField = input.parentElement;
//     // add the error class
//     formField.classList.remove('success');
//     formField.classList.add('error');

//     // show the error message
//     let error = formField.querySelector('.from-get--error');
//     error.textContent = message;
//   };

//   let showSuccess = (input) => {
//     // get the form-field element
//     let formField = input.parentElement;

//     // remove the error class
//     formField.classList.remove('error');
//     formField.classList.add('success');

//     // hide the error message
//     let error = formField.querySelector('.from-get--error');
//     error.textContent = '';
//   }


//   form.addEventListener('submit', function (e) {
//     // prevent the form from submitting
//     e.preventDefault();

//     // validate fields
//     let isUsernameValid = checkUsername(),
//       isEmailValid = checkEmail();

//     let isFormValid = isUsernameValid &&
//       isEmailValid;

//     // submit to the server if the form is valid
//     if (isFormValid) {

//     }
//   });


//   let debounce = (fn, delay = 500) => {
//     let timeoutId;
//     return (...args) => {
//       // cancel the previous timer
//       if (timeoutId) {
//         clearTimeout(timeoutId);
//       }
//       // setup a new timer
//       timeoutId = setTimeout(() => {
//         fn.apply(null, args)
//       }, delay);
//     };
//   };

//   form.addEventListener('input', debounce(function (e) {
//     switch (e.target.id) {
//       case 'name16wA2':
//         checkUsername();
//         break;
//       case 'email16wA2':
//         checkEmail();
//         break;
//     }
//   }));
// })();
/* ------------- */

/*  Форма S.M.A.R.T. B1 16 недель */
(function () {
  window.addEventListener('load', function () {
    let loc = document.getElementById("5020836175a872d3c59");
    loc.value = window.location.href;
    let ref = document.getElementById("5020836175a872d3c59ref");
    ref.value = document.referrer;

    let statUrl = "https://get.anglofan.ru/stat/counter?ref=" + encodeURIComponent(document.referrer) +
      "&loc=" + encodeURIComponent(document.location.href);
    document.getElementById('gccounterImgContainer').innerHTML = "<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";
  });
})();
// ======================================
// (function () {
//   let usernameEl = document.querySelector('#name16wB1');
//   let emailEl = document.querySelector('#email16wB1');

//   let form = document.querySelector('#ltForm9679672');


//   let checkUsername = () => {

//     let valid = false;

//     let min = 3,
//       max = 25;

//     let username = usernameEl.value.trim();

//     if (!isRequired(username)) {
//       showError(usernameEl, 'Имя не может быть пустым');
//     } else if (!isBetween(username.length, min, max)) {
//       showError(usernameEl, `Имя не может быть меньше ${min}`)
//     } else {
//       showSuccess(usernameEl);
//       valid = true;
//     }
//     return valid;
//   };


//   let checkEmail = () => {
//     let valid = false;
//     let email = emailEl.value.trim();
//     if (!isRequired(email)) {
//       showError(emailEl, 'Email не может быть пустым');
//     } else if (!isEmailValid(email)) {
//       showError(emailEl, 'Неверный формат Email.')
//     } else {
//       showSuccess(emailEl);
//       valid = true;
//     }
//     return valid;
//   };

//   let isEmailValid = (email) => {
//     let re =
//       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
//   };


//   let isRequired = value => value === '' ? false : true;
//   let isBetween = (length, min, max) => length < min || length > max ? false : true;


//   let showError = (input, message) => {
//     // get the form-field element
//     let formField = input.parentElement;
//     // add the error class
//     formField.classList.remove('success');
//     formField.classList.add('error');

//     // show the error message
//     let error = formField.querySelector('.from-get--error');
//     error.textContent = message;
//   };

//   let showSuccess = (input) => {
//     // get the form-field element
//     let formField = input.parentElement;

//     // remove the error class
//     formField.classList.remove('error');
//     formField.classList.add('success');

//     // hide the error message
//     let error = formField.querySelector('.from-get--error');
//     error.textContent = '';
//   }


//   form.addEventListener('submit', function (e) {
//     // prevent the form from submitting
//     e.preventDefault();

//     // validate fields
//     let isUsernameValid = checkUsername(),
//       isEmailValid = checkEmail();

//     let isFormValid = isUsernameValid &&
//       isEmailValid;

//     // submit to the server if the form is valid
//     if (isFormValid) {

//     }
//   });


//   let debounce = (fn, delay = 500) => {
//     let timeoutId;
//     return (...args) => {
//       // cancel the previous timer
//       if (timeoutId) {
//         clearTimeout(timeoutId);
//       }
//       // setup a new timer
//       timeoutId = setTimeout(() => {
//         fn.apply(null, args)
//       }, delay);
//     };
//   };

//   form.addEventListener('input', debounce(function (e) {
//     switch (e.target.id) {
//       case 'name16wB1':
//         checkUsername();
//         break;
//       case 'email16wB1':
//         checkEmail();
//         break;
//     }
//   }));
// })();
/* ------------- */
/*  Форма S.M.A.R.T. A1 36 недель */
(function () {
  window.addEventListener('load', function () {
    let loc = document.getElementById("5020906175a88cd9941");
    loc.value = window.location.href;
    let ref = document.getElementById("5020906175a88cd9941ref");
    ref.value = document.referrer;

    let statUrl = "https://get.anglofan.ru/stat/counter?ref=" + encodeURIComponent(document.referrer) +
      "&loc=" + encodeURIComponent(document.location.href);
    document.getElementById('gccounterImgContainer').innerHTML = "<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";
  });
})();
// ======================================
// (function () {
//   let usernameEl = document.querySelector('#name36wA1');
//   let emailEl = document.querySelector('#email36wA1');

//   let form = document.querySelector('#ltForm4728423');


//   let checkUsername = () => {

//     let valid = false;

//     let min = 3,
//       max = 25;

//     let username = usernameEl.value.trim();

//     if (!isRequired(username)) {
//       showError(usernameEl, 'Имя не может быть пустым');
//     } else if (!isBetween(username.length, min, max)) {
//       showError(usernameEl, `Имя не может быть меньше ${min}`)
//     } else {
//       showSuccess(usernameEl);
//       valid = true;
//     }
//     return valid;
//   };


//   let checkEmail = () => {
//     let valid = false;
//     let email = emailEl.value.trim();
//     if (!isRequired(email)) {
//       showError(emailEl, 'Email не может быть пустым');
//     } else if (!isEmailValid(email)) {
//       showError(emailEl, 'Неверный формат Email.')
//     } else {
//       showSuccess(emailEl);
//       valid = true;
//     }
//     return valid;
//   };

//   let isEmailValid = (email) => {
//     let re =
//       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
//   };


//   let isRequired = value => value === '' ? false : true;
//   let isBetween = (length, min, max) => length < min || length > max ? false : true;


//   let showError = (input, message) => {
//     // get the form-field element
//     let formField = input.parentElement;
//     // add the error class
//     formField.classList.remove('success');
//     formField.classList.add('error');

//     // show the error message
//     let error = formField.querySelector('.from-get--error');
//     error.textContent = message;
//   };

//   let showSuccess = (input) => {
//     // get the form-field element
//     let formField = input.parentElement;

//     // remove the error class
//     formField.classList.remove('error');
//     formField.classList.add('success');

//     // hide the error message
//     let error = formField.querySelector('.from-get--error');
//     error.textContent = '';
//   }


//   form.addEventListener('submit', function (e) {
//     // prevent the form from submitting
//     e.preventDefault();

//     // validate fields
//     let isUsernameValid = checkUsername(),
//       isEmailValid = checkEmail();

//     let isFormValid = isUsernameValid &&
//       isEmailValid;

//     // submit to the server if the form is valid
//     if (isFormValid) {

//     }
//   });


//   let debounce = (fn, delay = 500) => {
//     let timeoutId;
//     return (...args) => {
//       // cancel the previous timer
//       if (timeoutId) {
//         clearTimeout(timeoutId);
//       }
//       // setup a new timer
//       timeoutId = setTimeout(() => {
//         fn.apply(null, args)
//       }, delay);
//     };
//   };

//   form.addEventListener('input', debounce(function (e) {
//     switch (e.target.id) {
//       case 'name36wA1':
//         checkUsername();
//         break;
//       case 'email36wA1':
//         checkEmail();
//         break;
//     }
//   }));
// })();
// /* ------------- */


/*  Форма S.M.A.R.T. A2 36 недель */
(function () {
  window.addEventListener('load', function () {
    let loc = document.getElementById("5020906175a88cd9941");
    loc.value = window.location.href;
    let ref = document.getElementById("5020906175a88cd9941ref");
    ref.value = document.referrer;

    let statUrl = "https://get.anglofan.ru/stat/counter?ref=" + encodeURIComponent(document.referrer) +
      "&loc=" + encodeURIComponent(document.location.href);
    document.getElementById('gccounterImgContainer').innerHTML = "<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";
  });
})();
// ======================================
// (function () {
//   let usernameEl = document.querySelector('#name36wA2');
//   let emailEl = document.querySelector('#email36wA2');

//   let form = document.querySelector('#ltForm6535972');


//   let checkUsername = () => {

//     let valid = false;

//     let min = 3,
//       max = 25;

//     let username = usernameEl.value.trim();

//     if (!isRequired(username)) {
//       showError(usernameEl, 'Имя не может быть пустым');
//     } else if (!isBetween(username.length, min, max)) {
//       showError(usernameEl, `Имя не может быть меньше ${min}`)
//     } else {
//       showSuccess(usernameEl);
//       valid = true;
//     }
//     return valid;
//   };


//   let checkEmail = () => {
//     let valid = false;
//     let email = emailEl.value.trim();
//     if (!isRequired(email)) {
//       showError(emailEl, 'Email не может быть пустым');
//     } else if (!isEmailValid(email)) {
//       showError(emailEl, 'Неверный формат Email.')
//     } else {
//       showSuccess(emailEl);
//       valid = true;
//     }
//     return valid;
//   };

//   let isEmailValid = (email) => {
//     let re =
//       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
//   };


//   let isRequired = value => value === '' ? false : true;
//   let isBetween = (length, min, max) => length < min || length > max ? false : true;


//   let showError = (input, message) => {
//     // get the form-field element
//     let formField = input.parentElement;
//     // add the error class
//     formField.classList.remove('success');
//     formField.classList.add('error');

//     // show the error message
//     let error = formField.querySelector('.from-get--error');
//     error.textContent = message;
//   };

//   let showSuccess = (input) => {
//     // get the form-field element
//     let formField = input.parentElement;

//     // remove the error class
//     formField.classList.remove('error');
//     formField.classList.add('success');

//     // hide the error message
//     let error = formField.querySelector('.from-get--error');
//     error.textContent = '';
//   }


//   form.addEventListener('submit', function (e) {
//     // prevent the form from submitting
//     e.preventDefault();

//     // validate fields
//     let isUsernameValid = checkUsername(),
//       isEmailValid = checkEmail();

//     let isFormValid = isUsernameValid &&
//       isEmailValid;

//     // submit to the server if the form is valid
//     if (isFormValid) {

//     }
//   });


//   let debounce = (fn, delay = 500) => {
//     let timeoutId;
//     return (...args) => {
//       // cancel the previous timer
//       if (timeoutId) {
//         clearTimeout(timeoutId);
//       }
//       // setup a new timer
//       timeoutId = setTimeout(() => {
//         fn.apply(null, args)
//       }, delay);
//     };
//   };

//   form.addEventListener('input', debounce(function (e) {
//     switch (e.target.id) {
//       case 'name36wA2':
//         checkUsername();
//         break;
//       case 'email36wA2':
//         checkEmail();
//         break;
//     }
//   }));
// })();
/* ------------- */

/*  Форма S.M.A.R.T. B1 36 недель */
(function () {
  window.addEventListener('load', function () {
    let loc = document.getElementById("502091617681f9cf346");
    loc.value = window.location.href;
    let ref = document.getElementById("502091617681f9cf346ref");
    ref.value = document.referrer;

    let statUrl = "https://get.anglofan.ru/stat/counter?ref=" + encodeURIComponent(document.referrer) +
      "&loc=" + encodeURIComponent(document.location.href);
    document.getElementById('gccounterImgContainer').innerHTML = "<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";
  });
})();
// ======================================
// (function () {
//   let usernameEl = document.querySelector('#name36wB1');
//   let emailEl = document.querySelector('#email36wB1');

//   let form = document.querySelector('#ltForm4315666');


//   let checkUsername = () => {

//     let valid = false;

//     let min = 3,
//       max = 25;

//     let username = usernameEl.value.trim();

//     if (!isRequired(username)) {
//       showError(usernameEl, 'Имя не может быть пустым');
//     } else if (!isBetween(username.length, min, max)) {
//       showError(usernameEl, `Имя не может быть меньше ${min}`)
//     } else {
//       showSuccess(usernameEl);
//       valid = true;
//     }
//     return valid;
//   };


//   let checkEmail = () => {
//     let valid = false;
//     let email = emailEl.value.trim();
//     if (!isRequired(email)) {
//       showError(emailEl, 'Email не может быть пустым');
//     } else if (!isEmailValid(email)) {
//       showError(emailEl, 'Неверный формат Email.')
//     } else {
//       showSuccess(emailEl);
//       valid = true;
//     }
//     return valid;
//   };

//   let isEmailValid = (email) => {
//     let re =
//       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
//   };


//   let isRequired = value => value === '' ? false : true;
//   let isBetween = (length, min, max) => length < min || length > max ? false : true;


//   let showError = (input, message) => {
//     // get the form-field element
//     let formField = input.parentElement;
//     // add the error class
//     formField.classList.remove('success');
//     formField.classList.add('error');

//     // show the error message
//     let error = formField.querySelector('.from-get--error');
//     error.textContent = message;
//   };

//   let showSuccess = (input) => {
//     // get the form-field element
//     let formField = input.parentElement;

//     // remove the error class
//     formField.classList.remove('error');
//     formField.classList.add('success');

//     // hide the error message
//     let error = formField.querySelector('.from-get--error');
//     error.textContent = '';
//   }


//   form.addEventListener('submit', function (e) {
//     // prevent the form from submitting
//     e.preventDefault();

//     // validate fields
//     let isUsernameValid = checkUsername(),
//       isEmailValid = checkEmail();

//     let isFormValid = isUsernameValid &&
//       isEmailValid;

//     // submit to the server if the form is valid
//     if (isFormValid) {

//     }
//   });


//   let debounce = (fn, delay = 500) => {
//     let timeoutId;
//     return (...args) => {
//       // cancel the previous timer
//       if (timeoutId) {
//         clearTimeout(timeoutId);
//       }
//       // setup a new timer
//       timeoutId = setTimeout(() => {
//         fn.apply(null, args)
//       }, delay);
//     };
//   };

//   form.addEventListener('input', debounce(function (e) {
//     switch (e.target.id) {
//       case 'name36wB1':
//         checkUsername();
//         break;
//       case 'email36wB1':
//         checkEmail();
//         break;
//     }
//   }));
// })();
/* ------------- */

//Кнопка для оплаты
(function () {
  let btnPricePayS = document.getElementById("btnPricePayS");
  let radioLen = document.Price_s.price_lvl_s.length;

  for (let i = 0; i < radioLen; i++) {
    document.Price_s.price_lvl_s[i].addEventListener('click',
      function () {
        btnPricePayS.dataset.modal = this.value;
      }
    );
  }
})();

// (function () {
//   let btnPricePayM = document.getElementById("btnPricePayM");
//   let radioLen = document.Price_m.price_lvl_m.length;

//   for (let i = 0; i < radioLen; i++) {
//     document.Price_m.price_lvl_m[i].addEventListener('click',
//       function () {
//         btnPricePayM.dataset.modal = this.value;
//       }
//     );
//   }
// })();

(function () {
  let btnPricePayXL = document.getElementById("btnPricePayXL");
  let radioLen = document.Price_xl.price_lvl_xl.length;

  for (let i = 0; i < radioLen; i++) {
    document.Price_xl.price_lvl_xl[i].addEventListener('click',
      function () {
        btnPricePayXL.dataset.modal = this.value;
      }
    );
  }
})();
/* Таймер обратного отсчета */
(function () {
  var countDownDate = new Date("Dec 3, 2021 00:00:25").getTime();

  var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var timePr = document.getElementById("time");
    var daysPr = document.getElementById("days");
    var hoursPr = document.getElementById("hours");
    var minutesPr = document.getElementById("minutes");
    var secondPr = document.getElementById("second");

    daysPr.innerHTML = days;
    hoursPr.innerHTML = hours;
    minutesPr.innerHTML = minutes;
    secondPr.innerHTML = seconds;
    if (distance < 0) {
      clearInterval(x);
      timePr.style.display = 'none';
    }
  }, 1000);
})();
/* Маска для телефона */
(function () {
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('.form-get__input--phone'), function (input) {
    var keyCode;

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value =
        new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});
})();
