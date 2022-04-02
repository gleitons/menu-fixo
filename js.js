const nav = document.getElementsByTagName('nav')[0];
const navTop = nav.offsetTop

window.onscroll = function() {
    menuTopo();
}
function menuTopo() {
    if (window.pageYOffset >= navTop) {
        nav.classList.add('fixonoTopo');
    } else {
        nav.classList.remove('fixonoTopo');
    }
}