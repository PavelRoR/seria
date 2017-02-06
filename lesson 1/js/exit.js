$(document).ready(function() {
    $(document).mousemove(function(e) {
        if (e.pageY - $(document).scrollTop() <= 5) {
            $('#exit_content').modal({
                onOpen: modalOpen,
                onClose: simplemodal_close
            });
        }
    });
});

function modalOpen(dialog) {
    dialog.overlay.fadeIn('fast', function() {
        dialog.container.fadeIn('fast', function() {
            dialog.data.hide().slideDown('fast');
        });
    });
}

function simplemodal_close(dialog) {
    dialog.data.fadeOut('fast', function() {
        dialog.container.hide('fast', function() {
            dialog.overlay.slideUp('fast', function() {
                $.modal.close();
            });
        });
    });
}

$('.subscr').click(function() {
    $('.full').slideDown(300);
})

$('.full').click(function() {
    $('.full').slideUp(300);
})

$('.close').click(function() {
    $('.full').slideUp(300);
})