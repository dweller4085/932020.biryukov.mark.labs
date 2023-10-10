const [displayArea, dog, cat, dogImg, catImg] = ['display-area', 'dog', 'cat', 'dog-img', 'cat-img'].map(id => document.getElementById(id));

function left() {
    cat.style.flex = '20';
    dog.style.flex = '1';
    dogImg.style.visibility = 'hidden';
    catImg.style.visibility = 'visible';
}

function both() {
    cat.style.flex = '1';
    dog.style.flex = '1';
    dogImg.style.visibility = 'visible';
    catImg.style.visibility = 'visible';
}

function right() {
    cat.style.flex = '1';
    dog.style.flex = '20';
    dogImg.style.visibility = 'visible';
    catImg.style.visibility = 'hidden';
}

[['left-button', left], ['both-button', both], ['right-button', right]].forEach(([id, f]) => {
    document.getElementById(id).addEventListener('click', f);
});
