// To Display error 
/*global $, alert, console */
$(function (){
    
    'use strict'

    // adiust header height
    // $('.imgLanding').height($(window).height());
    
    // $(window).resize(function () {
    //     $('.imgLanding').height($(window).height());
    // });

    // Links add active class
    $('.links li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    // Smooth scroll to div
    $('.links li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000)
    });

    // Click to show menu toggle
    $('.navbar .icon-toggle').click(function () {
        $('.navbar .links').toggleClass('toggle');
    });

    // STart Premium 
    // Self Enfoc => Auto run function 
    // Each => All
    (function autoSlider() {
        $('.premium .row .show').each(function () {
            if(!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('show').next().addClass('show').fadeIn();
                    autoSlider();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('show');
                    $('.premium .row div').eq(0).addClass('show').fadeIn();
                    autoSlider();
                });
            }
        });
    }());
});