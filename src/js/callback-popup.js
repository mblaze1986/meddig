$(document).ready(function () {


  let phone = $('#popup-phone');

  phone.mask('+7 (999) 999-99-99');

  phone.one('click', function () {
    phone[0].setSelectionRange(4, 4);
  });


  let callback = $('.callback--popup');

  callback.validate({

    rules: {
      user_name: {
        required: true,
        minlength: 3,
      },
      user_phone: {
        required: true
      },
      user_email: {
        required: true,
        email: true
      },
      user_agreement: {
        required: true,
      },
    },

    messages: {
      user_name: {
        required: 'обязательное поле'
      },
      user_phone: {
        required: 'обязательное поле'
      },
      user_email: {
        required: 'введите e-mail',
        email: 'введите правильный адрес'
      },
      user_agreement: {
        required: ''
      },
    },

    errorClass: 'form-error',
    errorElement: 'span',

    // submitHandler: function () {
    //   $.ajax({
    //     type: "POST",
    //     url: "./php/mail.php",
    //     data: callback.serialize()
    //   }).done(function () {
    //     message.addClass('sended');
    //     setTimeout(function () {
    //       callback.trigger('reset');
    //     }, 500);
    //   });
    //   return false;
    // }

    submitHandler: function (form) {

      let formData = new FormData(form);

      let popupForm = document.querySelector('.popup-callback')

      let message = document.querySelector('.message')

      let body = document.querySelector('body')

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено');
            popupForm.classList.remove('active')
            message.classList.add('sended')
            body.classList.add('lock')
          }
        }
      }

      xhr.open('POST', './php/mail.php', true);
      xhr.send(formData);

      form.reset();
      
    }

  });

});