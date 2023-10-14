
function save(e) {
    
}

function add(e) {
    
}

[['button-save', save], ['button-add', add]]
.forEach(([id, f]) => document.getElementById(id).addEventListener('click', f));
