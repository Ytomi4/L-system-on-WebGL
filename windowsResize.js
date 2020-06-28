var container;
var canvas;
var timer = 0;

function init(){
    container = document.getElementById('unityContainer');
    document.body.style.margin = "0px";
}

function resize(){
    container.style.width = window.innerWidth + "px";
    container.style.height = window.innerHeight + "px";
    container.style.margin = "0px";
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