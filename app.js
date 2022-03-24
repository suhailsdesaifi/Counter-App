let countNum = document.getElementById('countNum');
let countStr = document.getElementById('countStr');
let count = 0;
let str;

function addNewEntries() {
    console.log( 'Button Clicked' );
    count = countNum.textContent = count + 1;
    console.log( count );
}

function saveEntries() {
    console.log( 'item saved' );
    str = countStr.textContent += count + " - ";
    console.log( str );
    count = countNum.textContent = count - count;
    console.log( count );
}