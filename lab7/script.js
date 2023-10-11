
const [count_min, count_max] = [1, 10];
const [size_min, size_max] = [30, 80];
const canvas = document.getElementById('canvas');

function square(size, pos) {
    let square = document.createElement('div');
    
}

function triangle(size, pos) {
    let triangle = document.createElement('div');
}

function circle(size, pos) {
    let circle = document.createElement('div');
}

function place(figure) {
    const random_size = _ => (
        size_min + Math.floor(Math.random() * (size_max - size_min))
    );
    
    const random_pos = _ => [
        Math.floor(Math.random() * canvas.clientWidth),
        Math.floor(Math.random() * canvas.clientHeight),
    ];
    
    const count = Number(document.getElementById('place-count').value);
    
    if (count < count_min || count > count_max) {
        console.error('invalid count value');
        return null;
    }
    
    // think
    
    [...Array(count)].forEach(_ => {
        const element = figure(random_size(), random_pos());
    });
}

[
    ['button-square',   _ => place(square)  ],
    ['button-triangle', _ => place(triangle)],
    ['button-circle',   _ => place(circle)  ],
]
.forEach(([id, f]) => document.getElementById(id).addEventListener('click', f));
