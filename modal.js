$(document).ready(function () {
    $('.modal').each(function () {
        const modalId = `#${$(this).attr('id')}`;
        console.log(modalId)
        if (window.location.href.indexOf(modalId) !== -1 && indexCheck(modalId)) {
            $(modalId).modal('show');
        }
    });
});

function indexCheck(modalId){
    let idLength = modalId.length
    let indexPosition = window.location.href.indexOf(modalId)
    let urlLength = window.location.href.length
    if(idLength + indexPosition == urlLength){
        return true;
    } else {
        return false;
    }
}