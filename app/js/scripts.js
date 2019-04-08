// Adding shadow in header on scroll
$(window).scroll(function() {
    if ($(window).scrollTop() >= 200) {
        $('.header').addClass('header--shadow');
    } else {
        $('.header').removeClass('header--shadow');
    }
});

// Search bar animation - Open
$('.js-button-search').click(function() {
    window.setTimeout(function(){
        $('.main-nav, .js-button-search').fadeOut('fast');
    },50);
    window.setTimeout(function(){
        $('.search-bar__form').fadeIn('fast');
    },300);
    window.setTimeout(function(){
        $('.search-bar__form input').focus().select();
    },350);
});

// Search bar animation - Close
$('.js-button-close').click(function() {
    window.setTimeout(function(){
        $('.search-bar__form').fadeOut('fast');
    },50);
    window.setTimeout(function(){
        $('.main-nav, .js-button-search').fadeIn('fast');
    },300);
});

// Parallax animation for Hero image
var e;
$(window).scroll(function() {
    e = -.6 * $(window).scrollTop() + 'px', $('.parallax').css({
        'background-position': 'center top ' + e
    });
});

// Open/close YT video
$('.js-button-video-open').click(function() {
    $('.video-overlay').fadeIn('fast');
});
$('.js-video-overlay').click(function() {
    $(this).fadeOut('fast');
});

// Mob nav toggle
$('.js-mobile-toggle').click(function() {
    $('header nav').toggle(100);
    $(this).toggleClass('active');
});