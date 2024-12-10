var panels = document.querySelectorAll('.card');

for (var i = 0; i < panels.length; i++) {
    (function(panel) {
        panel.addEventListener('click', function() {
            removeActiveClasses();
            panel.classList.add('active');
        });
    })(panels[i]);
}

function removeActiveClasses() {
    for (var i = 0; i < panels.length; i++) {
        panels[i].classList.remove('active');
    }
}
