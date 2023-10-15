
const element = (() => {
    let element = {};
    ['rabbit', 'dove', 'hat', 'lamp', 'curtains', 'stage']
    .forEach(id => element[id] = document.getElementById(id));
    return element;
})();

element.curtains.addEventListener('click', e => {
    e.target.style.transition = 'top 1s';
    e.target.style.top = '-100vh';
});

element.lamp.addEventListener('click', (() => {
    let lights_on = false;
    return e => element.stage.style.opacity = (lights_on = !lights_on) ? '100%' : '0%';
})());

(() => {
    let toggle = false; // false: rabbit, true: dove

    [element.dove, element.rabbit, element.hat]
    .forEach(e => e.addEventListener('click', e => {
        [element.rabbit.style.top, element.dove.style.top] =
        (toggle = !toggle) ? ['0px', '-200px'] : ['-200px', '0px'];
    }));
})();
