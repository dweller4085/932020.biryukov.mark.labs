
function open_popup(e) {
    console.log(e);
}

[...document.getElementsByClassName('news-article')].forEach(e => e.addEventListener('click', open_popup));
