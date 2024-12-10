var magicPanels = document.querySelectorAll('.card');
var colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];
var sounds = ['pop', 'boing', 'zing', 'whoosh', 'tada'];

for (var i = 0; i < magicPanels.length; i++) {
    (function(panel, index) {
        panel.addEventListener('click', function() {
            removeActiveClasses();
            panel.classList.add('active');
            panel.style.backgroundColor = colors[index % colors.length];
            playSound(sounds[index % sounds.length]);
            addSparkles(panel);
        });
    })(magicPanels[i], i);
}

function removeActiveClasses() {
    for (var i = 0; i < magicPanels.length; i++) {
        magicPanels[i].classList.remove('active');
        magicPanels[i].style.backgroundColor = '';
    }
}

function playSound(sound) {
    var audio = new Audio('sounds/' + sound + '.mp3');
    audio.play();
}

function addSparkles(panel) {
    for (var i = 0; i < 10; i++) {
        var sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        panel.appendChild(sparkle);
        setTimeout(function() {
            sparkle.remove();
        }, 1000);
    }
}
