/* FIRST PROJECT */

const heading1 = document.getElementById('first-h3');
const heading2 = document.getElementById('second-h3');
const heading3 = document.getElementById('third-h3');
const viewElement = document.getElementById('open');
const hideElement = document.getElementById('close');

function open1() {
    let text1 = document.getElementById('first-p');
    if (text1.style.display === 'none' && hideElement.style.display === 'none') {
        text1.style.display = 'block';
        hideElement.style.display = 'block';
        viewElement.style.display = 'none';
    } else {
        text1.style.display = 'none';
        hideElement.style.display = 'none';
        viewElement.style.display = 'block';
    }
}

heading1.addEventListener('click', open1);

/* SECOND PROJECT */


function open2() {
    let text2 = document.getElementById('second-p');
    if (text2.style.display === 'none' && hideElement.style.display === 'none') {
        text2.style.display = 'block';
        hideElement.style.display = 'block';
        viewElement.style.display = 'none';
    } else {
        text2.style.display = 'none';
        hideElement.style.display = 'none';
        viewElement.style.display = 'block';
    }
}

heading2.addEventListener('click', open2); 

/* THIRD PROJECT */


function open3() {
    let text3 = document.getElementById('third-p');
    if (text3.style.display === 'none' && hideElement.style.display === 'none') {
        text3.style.display = 'block';
        hideElement.style.display = 'block';
        viewElement.style.display = 'none';
    } else {
        text3.style.display = 'none';
        hideElement.style.display = 'none';
        viewElement.style.display = 'block';
    }
}

heading3.addEventListener('click', open3);



