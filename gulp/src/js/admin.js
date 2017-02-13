// jquery here!

$(document).ready(function() {
    $('a').click(function(e) {
        alert('you are on admin page now!');
        e.preventDefault();
    });
});
