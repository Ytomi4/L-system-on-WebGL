//reference : https://qiita.com/Katumadeyaruhiko/items/9c0a82865c239b95a809

var container;
var canvas;
var timer = 0;

function init(){
    canvas = document.getElementById('canvas');
    container = document.createElement('div');
    container.style.width = window.innerWidth + 'px';
    container.style.height = window.innerHeight + 'px';
    container.style.overflow = 'hidden';
    container.appendChild(canvas);
    document.body.appendChild(container);
    document.body.style.margin = '0px';
}

function resize(){
    container.style.width = window.innerWidth + 'px';
    container.style.height = window.innerHeight + 'px';
    coanvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
}

window.onload = function(){
    init();
    resize();
};

(function(){
    var timer = 0;
    window.onresize = function(){
        if(timer > 0){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            resize();
        }, 200);
    }
}());