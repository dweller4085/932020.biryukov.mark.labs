
function openPopup(e) {
    console.log(e);
}

[...document.getElementsByClassName('news-article')].forEach(e => {
    e.addEventListener('click', openPopup);
    e.setAttribute('data-full-contents', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium.');
});
