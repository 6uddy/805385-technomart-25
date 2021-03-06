function modalShow(elmt) {
  elmt.classList.add('modal-show');
}

function modalClose() {
  var modalShown = document.querySelector('.modal-show');

  if (modalShown) {
    modalShown.classList.remove('modal-show');
  }
}

var contactsLink = document.querySelector('.write-us-button');
var modalWriteUs = document.querySelector('.modal-write-us');


if (modalWriteUs) {
  var modalWriteUsClose = modalWriteUs.querySelector('.modal-close');

  var contactsForm = modalWriteUs.querySelector('.write-us-form');
  var userData = {
    name: document.getElementById('write-us-name'),
    email: document.getElementById('write-us-email'),
    message: document.getElementById('write-us-message')
  };

  var isStorageSupport = true;
  var storage = {
    name: '',
    email: ''
  };

  contactsLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalShow(modalWriteUs);

    if (storage.name && storage.email) {
      userData.name.value = storage.name;
      userData.email.value = storage.email;
      userData.message.focus();
    } else {
      userData.name.focus();
    }
  });

  modalWriteUsClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalClose();
  });

  contactsForm.addEventListener('submit', function (evt) {
    if (!userData.name.value || !userData.email.value || !userData.message.value) {
      evt.preventDefault();
      modalWriteUs.classList.remove('modal-error');
      void modalWriteUs.offsetWidth;
      modalWriteUs.classList.add('modal-error');

      if (!userData.name.value) {
        userData.name.focus();
      } else if (!userData.email.value) {
        userData.email.focus();
      } else {
        userData.message.focus();
      }
    } else if (isStorageSupport) {
      localStorage.setItem('name', userData.name.value);
      localStorage.setItem('email', userData.email.value);
    }
  });
}




var mapLink = document.querySelector('.map-image');

var modalMap = document.querySelector('.modal-map');

if (modalMap) {
  var modalMapClose = modalMap.querySelector('.modal-close');

  mapLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalShow(modalMap);
  });

  modalMapClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalClose();
  });
}



var buyButtons = document.querySelectorAll('.buy');

var modalBasket = document.querySelector('.modal-basket');

if (modalBasket) {
  var modalBasketClose = modalBasket.querySelector('.modal-close');

  var addBuyClickHandler = function (buyButton) {
    buyButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      modalShow(modalBasket);
    });
  };

  for (var i = 0; i < buyButtons.length; i++) {
    addBuyClickHandler(buyButtons[i]);
  }

  modalBasketClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalClose();
  });
}
