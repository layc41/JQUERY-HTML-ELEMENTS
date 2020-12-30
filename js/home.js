$(document).ready(function () {
    // center all H1 elements
    $('h1').addClass('text-center');
    $('h2').addClass('text-center');
    $('.myBannerHeading').removeClass('myBannerHeading');
    $('#yellowHeading').text('Yellow Team');
    $('#blueTeamList').css({'background-color': 'blue'});
    $('#orangeTeamList').css({'background-color': 'orange'});
    $('#redTeamList').css({'background-color': 'red'});
    $('#yellowTeamList').css({'background-color': 'yellow'});
    $('#yellowTeamList').append('<li>Joseph Banks</li>', '<li>Simon Jones</li>');
    $('#oops').hide();
    $('#footerPlaceholder').remove();
    $('#footer').append('<p> Claudia Lay <p>', '<p> Email: claudialay41@gmail.com <p>').css({'font-family' : 'Courier', 'font-size': '24px'});
});