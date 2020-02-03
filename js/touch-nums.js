'use strict'
var nextNum = 1;

var gTotalMs = 0;
var cSize = 4;
var rSize = 4;
var gInterval = null;

var gLevel1Title = 'Easy Game!(16)';
var gLevel2Title = 'Harder Game!(25)';
var gLevel3Title = 'Extreme Game!(36)';

function init() {
    selectLevel(gLevel1Title);
}

function renderTable() {

    var numbers = buildArrOfNums(cSize * rSize);
    shuffle(numbers);

    var strHtml = '';
    for (var i = 0; i < cSize; i++) {
        strHtml += '<tr>';
        for (var j = 0; j < rSize; j++) {
            var cell = numbers.pop();
            strHtml += `<td class="cell" onclick="cellClicked(this)">${cell}</td>`;
        }
        strHtml += '</tr>';
    }
    var elTable = document.querySelector('.myTable');
    elTable.innerHTML = strHtml;
}

function countTimer() {
    gTotalMs++;
    var sec = gTotalMs / 1000;
    document.querySelector('.timer').innerText = sec;
}

function cellClicked(clickedNum) {
    var timerId = setInterval(function() { countTimer(); }, 1);

    if (Number(clickedNum.innerText) === nextNum) {
        clickedNum.style.setProperty('background-color', 'blue');
        nextNum++;
    }
}

function selectLevel(elBtn) {

    if (elBtn.innerText === gLevel2Title) {
        cSize = 5;
        rSize = 5;
    } else if (elBtn.innerText === gLevel3Title) {
        cSize = 6;
        rSize = 6;
    };
    renderTable(cSize, rSize);
}

function buildArrOfNums(num) {
    var nums = [];
    for (var i = 0; i < num; i++) {
        nums.push(i + 1);
    }
    return nums;
}


document.querySelector('.newGame').innerText = gLevel1Title;
document.querySelector('.harder').innerText = gLevel2Title;
document.querySelector('.extreme').innerText = gLevel3Title;

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}