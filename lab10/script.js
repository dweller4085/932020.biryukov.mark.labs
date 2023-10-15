
const element = (() => {
    let element = {};
    ['light', 'rabbit', 'dove', 'wizard', 'hat', 'lamp', 'curtains', 'stage']
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

element.hat.addEventListener('click', (() => {
    let current = 'rabbit';
    return e => {
        
    };
})());
