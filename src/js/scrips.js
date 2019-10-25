const $ = jQuery;

$(document).ready(function(){

    $('.hamburger').on('click', function () {
        $(this).toggleClass('active');
        $('.menu-list').toggleClass('active');
    });


}());