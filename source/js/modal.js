const submitButton = document.querySelector('.submit__button');
    const modalWarning = document.querySelector('.competition-main__modal-warning');
    const modalDone = document.querySelector('.competition-main__modal-done');
    const modalWarningButton = modalWarning.querySelector('.modal__button');
    const modalDoneButton = modalDone.querySelector('.modal__button');
    const userName = document.querySelector('.competition__user-name');
    const userSurname = document.querySelector('.competition__user-surname');
    const userPatronymic = document.querySelector('.competition__user-patronymic');
    const userPhone = document.querySelector('.competition__user-phone');
    const userMail = document.querySelector('.competition__user-mail');

    submitButton.addEventListener('click', function () {
      if (!userSurname.value || !userSurname.value || !userPatronymic.value || !userPhone.value || !userMail.value) {
        modalWarning.classList.add('competition-main__modal-warning--opened');
      }

      else {
        modalDone.classList.add('competition-main__modal-done--opened');
      };
    });

    modalWarningButton.addEventListener('click', function () {
      modalWarning.classList.remove('competition-main__modal-warning--opened');
    });

    modalDoneButton.addEventListener('click', function () {
      modalDone.classList.remove('competition-main__modal-done--opened');
    });
