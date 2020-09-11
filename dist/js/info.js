let _mail = document.getElementById('themail');
let _tel = document.getElementById('thetel');

let _sendBtn = document.getElementById('sendBtn');
_sendBtn.addEventListener('click', function () {
  // console.log('_mail / ', _mail.value);
  // console.log('_tel / ', _tel.value);
  if (!mailCheck(_mail.value)) {
    console.log('Email輸入錯誤，請確認');
    // _mail.classList.add('invalid');
  } else {
    _mail.classList.remove('invalid');
  }

  if (!telCheck(_tel.value)) {
    console.log('手機輸入錯誤，請輸入09xxxxxxxx，共10碼');
    // _tel.classList.add('invalid');
  } else {
    _tel.classList.remove('invalid');
  }
  _mail.value = '';
  _tel.value = '';
});

let _makeBtn = document.getElementById('makeBtn');
_makeBtn.addEventListener('click', function () {
  _mail.value = 'testuser@gmail.com';
  _tel.value = '0912123456';

  _mail.classList.remove('invalid');
  _tel.classList.remove('invalid');
});

function mailCheck(inputMail) {
  let pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return pattern.test(inputMail);
}

function telCheck(inputTel) {
  let pattern = /^[09]{2}[0-9]{8}$/;
  return pattern.test(inputTel);
}
