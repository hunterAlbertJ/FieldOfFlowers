$(document).ready(function () {
    $('.modal').each(function () {
        const modalId = `#${$(this).attr('id')}`;
        console.log(modalId)
        if (window.location.href.indexOf(modalId) !== -1) {
            $(modalId).modal('show');
        }
    });
});