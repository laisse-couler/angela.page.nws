var body = document.querySelector('body');
var button = document.querySelector('projets')
var header = document.querySelector('head')

window.addEventListener('scroll', function(e){
    console.log(window.scrollY);
        if (window.scrollY > 100) {
            //ajouter class scrolling
            body.setAttribute('class', 'scrolling');
        } else {
            //retirer class scrolling
            body.setAttribute('class', '');
        }

});
window.addEventListener('fixed', function(e){
    console.log(window.fixed)
    if (window.fixed > 100) {
        //ajouter class scrolling
        header.setAttribute('class', 'fixed');
    } else {
        //retirer class scrolling
        header.setAttribute('class', '')
}


var button = document.getElementById('button');

button.addEventListener("click" , function(){
    var current_class = body.getAttribute('class');

    if (current_class == 'menu_expanded'){
        body.setAttribute('class', '');
    }else{
        body.setAttribute('class', 'menu_expanded');

    }

});


