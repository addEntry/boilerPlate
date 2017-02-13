// jquery here!

$(document).ready(function() {
    $('a').click(function(e) {
        alert('you clicked something');
        e.preventDefault();
    });
});
