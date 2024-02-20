document.addEventListener('DOMContentLoaded', function () {


  
  // модал - hero
  const btnCloseHero = document.querySelector('.hero__modal-close_js');
  const modalHero = document.querySelector('.hero__modal_js');
  if (modalHero) {
    btnCloseHero.addEventListener('click', function () {
      document.querySelector('.hero__modal_js').classList.toggle('hero__modal_js_active');
    });
    modalHero.addEventListener('click', function (event) {
      if (event._notClick) return;
      modalHero.classList.remove('hero__modal_js_active');
      document.querySelector('.hero__modal-sps_js').classList.remove('hero__modal-sps_js_active');
      // Модалка без заморозки
      const body = document.body;
      body.style.height = 'inherit';
      body.style.overflowY = 'inherit';
    });    
  };
 


  // inputmask - Телефон/hero
  const formJsHero = document.querySelector('.hero__form_js');
  if (formJsHero) { // Обёртка if. Спасение Gulp-а от null в браузере
    const telSelector = formJsHero.querySelector('input[type="tel"]');
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);

    // const validateForms = function validateForms(form, selector, successModal, yaGoal) {
    new window.JustValidate('.hero__form_js', {
      rules: {
        name: {
          required: true,
          minLength: 2,
          maxLenght: 10,
          strength: {
            custom: '^[А-яёЁ\s-]' //только по русски текст
            //custom: '^[а-яёЁ\s]+$'только по русски и маленькими буквами
            //custom: '^[a-yeO\s]+$'только по английски текст
          }
        },
        tel: {
          required: true,
          function: () => {
            const phone = telSelector.inputmask.unmaskedvalue();
            return Number(phone) && phone.length === 10;
          }
        },
        /*checkbox: { // Обязательная галка
          required: true
        }*/
      },
      colorWrong: '#ff6972',
      messages: {
        name: {
          required: 'Введите ваше имя',
          minLength: 'Введите 3 и более символов',
          maxLength: 'Запрещено вводить более 15 символов',
          strength: 'Текст только по русски'
          //strength: 'Текст только по русски и маленькими буквами'
          //strength: 'Текст только по английски'
        },
        // email: {
        //   email: 'Недопустимый формат',
        //   required: 'Введите email'
        // },
        tel: {
          required: 'Введите ваш телефон',
          function: 'Здесь должно быть 11 симв..'
        }
        //, checkbox: {
        //   required: 'Поставьте галочку',
        //   function: 'Здесь должна быть галка'
        // }
      },

      //*отправка формы*/
      submitHandler: function (thisForm) {
        let formData = new FormData(thisForm);
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            } //if xhr
          }
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
        thisForm.reset();
        document.querySelector('.hero__modal_js').classList.toggle('hero__modal_js_active');
        document.querySelector('.hero__modal-sps_js').classList.toggle('hero__modal-sps_js_active');
        // Заморозили модалку
        const body = document.body;
        body.style.height = '100vh';
        body.style.overflowY = 'hidden';
      }
    })
  }
 


  // модал - contact
  const btnCloseContact = document.querySelector('.contact__modal-close_js');
  const modalContact = document.querySelector('.contact__modal_js');
  if (modalContact) {
    btnCloseContact.addEventListener('click', function () {
      document.querySelector('.contact__modal_js').classList.toggle('contact__modal_js_active');
    });
    modalContact.addEventListener('click', function (event) {
      if (event._notClick) return;
      modalContact.classList.remove('contact__modal_js_active');
      document.querySelector('.contact__modal-sps_js').classList.remove('contact__modal-sps_js_active');
      // Модалка без заморозки
      const body = document.body;
      body.style.height = 'inherit';
      body.style.overflowY = 'inherit';
    });    
  };
 


  // inputmask - Телефон/hero
  const formJs = document.querySelector('.contact__form_js');
  if (formJs) { // Обёртка if. Спасение Gulp-а от null в браузере
    const telSelector = formJs.querySelector('input[type="tel"]');
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);

    // const validateForms = function validateForms(form, selector, successModal, yaGoal) {
    new window.JustValidate('.contact__form_js', {
      rules: {
        name: {
          required: true,
          minLength: 2,
          maxLenght: 10,
          strength: {
            custom: '^[А-яёЁ\s-]' //только по русски текст
            //custom: '^[а-яёЁ\s]+$'только по русски и маленькими буквами
            //custom: '^[a-yeO\s]+$'только по английски текст
          }
        },
        tel: {
          required: true,
          function: () => {
            const phone = telSelector.inputmask.unmaskedvalue();
            return Number(phone) && phone.length === 10;
          }
        },
        /*checkbox: { // Обязательная галка
          required: true
        }*/
      },
      colorWrong: '#ff6972',
      messages: {
        name: {
          required: 'Введите ваше имя',
          minLength: 'Введите 3 и более символов',
          maxLength: 'Запрещено вводить более 15 символов',
          strength: 'Текст только по русски'
          //strength: 'Текст только по русски и маленькими буквами'
          //strength: 'Текст только по английски'
        },
        // email: {
        //   email: 'Недопустимый формат',
        //   required: 'Введите email'
        // },
        tel: {
          required: 'Введите ваш телефон',
          function: 'Здесь должно быть 11 симв..'
        }
        //, checkbox: {
        //   required: 'Поставьте галочку',
        //   function: 'Здесь должна быть галка'
        // }
      },

      //*отправка формы*/
      submitHandler: function (thisForm) {
        let formData = new FormData(thisForm);
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            } //if xhr
          }
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
        thisForm.reset();
        document.querySelector('.contact__modal_js').classList.toggle('contact__modal_js_active');
        document.querySelector('.contact__modal-sps_js').classList.toggle('contact__modal-sps_js_active');
        // Заморозили модалку
        const body = document.body;
        body.style.height = '100vh';
        body.style.overflowY = 'hidden';
      }
    })
  }
  
    
  
    // Плавный скролл по якорям. В любое место можно кинуть.
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');
  
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
      });
    };
  
    
    
   
  
  
  });