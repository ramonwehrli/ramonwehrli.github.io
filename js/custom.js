$(document).scroll(function() {
    $('#bar').css({'background-position': '0% ' + ($('body').scrollTop()/$(document).height())*100 + '%'});
});