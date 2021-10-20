
let pressedKey = document.querySelector('.pressed-key');
let keys = document.querySelectorAll('.key');

function colorBtn(event) {
    let val = event.keyCode;
    let pressedKeyCell = document.querySelector(`.key[data-key="${val}"]`);

    for (let i = 0; i < keys.length; i++) {
    
        keys[i].classList.remove('active');

    }
    pressedKeyCell.classList.add('active');
    pressedKey.value = '';
}


pressedKey.onkeyup = colorBtn;


