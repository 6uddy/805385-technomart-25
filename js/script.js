function modalShow(elmt) {
  elmt.classList.add('modal-show');
}

function modalClose() {
  var modalShown = document.querySelector('.modal-show');

  if (modalShown) {
    modalShown.classList.remove('modal-show');
  }
}

var contactsLink = document.querySelector('.contacts-button');
var modalWriteUs = document.querySelector('.modal-write-us');


if (modalWriteUs) {
  var modalWriteUsClose = modalWriteUs.querySelector('.modal-close');

  contactsLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalShow(modalWriteUs);
  });

  modalWriteUsClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalClose();
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

