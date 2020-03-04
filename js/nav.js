window.onscroll = scroll;

function scroll() {
var scrollTop = window.pageYOffset;
if (scrollTop > 30) {
try {
document.getElementById('antes').id = 'depois'
} catch (e) {
false
}
} else {
try {
document.getElementById('depois').id = 'antes'
} catch (e) {
false
}
}
};
