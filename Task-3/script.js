let display = document.getElementById('display');

function onDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.toString().slice(0, -1);
}

function calculate() {
    display.value = eval(display.value);
}

//NUMPAD ACCESSIBILITY.
function numpadKey(keyCode) {
    switch (keyCode) {
        case 96: //0
        case 97: //1
        case 98: //2
        case 99: //3
        case 100: //4
        case 101: //5
        case 102: //6
        case 103: //7
        case 104: //8
        case 105: //9
            onDisplay(String.fromCharCode(keyCode - 48));
            break;
        case 107: //+
            onDisplay('+');
            break;
        case 109: //-
            onDisplay('-');
            break;
        case 106: //*
            onDisplay('*');
            break;
        case 111: ///
            onDisplay('/');
            break;
        case 110: //.
            onDisplay('.');
            break;
        case 108: //numpad Enter
        case 13:  //enter
            calculate();
            break;
        default:
            break;
    }
}

document.addEventListener('keydown', function(event) {
    numpadKey(event.keyCode);
});

