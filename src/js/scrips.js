const $ = jQuery;

$(document).ready(function(){

    $('.hamburger').on('click', function () {
        $(this).toggleClass('active');
        $('.menu-list').toggleClass('active');
    });

    $('.masonry').masonry({
        itemSelector: '.masonry-item',
        horizontalOrder: true,
        gutter: 5,
    });
}());