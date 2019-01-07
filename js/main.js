width = $(document).width();
if (width>768){
    num_nb = Math.round(Math.sqrt(width * 8));
}else{
    num_nb = Math.round(Math.sqrt(width * 2));
}

var options = {
    strings: ['<p class="d-inline-block pb-sm-4 mb-0">Hi,</p>^500 <br> <p class="mb-0 pt-sm-1 d-inline-block">I\'m Shubham Yadav</p>^500 </br> <p class="f_28 mbminus mb-0 d-inline-block fm_16">a web developer</p>'],
    typeSpeed: 150,
    backSpeed: 100,
    startDelay: 2000,
    showCursor: true,
    contentType: 'html',
    cursorChar: "_",
    loop: false,
    fadeOut: true,
    autoInsertCss: true
}
var typed = new Typed(".typing-element", options);

if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 100;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

var goUp = true;
var end = null;
var interval = null;

function handle(delta) {
    var animationInterval = 20; //lower is faster
    var scrollSpeed = 20; //lower is faster

    if (end == null) {
        end = $(window).scrollTop();
    }
    end -= 20 * delta;
    goUp = delta > 0;

    if (interval == null) {
        interval = setInterval(function () {
            var scrollTop = $(window).scrollTop();
            var step = Math.round((end - scrollTop) / scrollSpeed);
            if (scrollTop <= 0 ||
                scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
                goUp && step > -1 ||
                !goUp && step < 1) {
                clearInterval(interval);
                interval = null;
                end = null;
            }
            $(window).scrollTop(scrollTop + step);
        }, animationInterval);
    }
};

document.onreadystatechange = function(){
    var state = document.readyState;
    if(state == 'interactive' || state == 'loading'){
        document.getElementById('loader').style.visibility = 'visible';
        document.getElementById('body').style.visibility = 'hidden';
    }else if(state == 'complete'){
        document.getElementById('loader').style.visibility = 'hidden';
        document.getElementById('loader').style.zIndex = '-10000000';
        document.getElementById('body').style.visibility = 'visible';
    }
}

function openLink(link){
    window.location.href = link;
}

$(document).ready(function() {
  
    $('#mobile-carousel').owlCarousel({
        items : 3,
        itemsMobile: [479,1],
        pagination: false,
        navigation: true,
        slideSpeed: 700
    });
    $('.arrow_carousel').on('click', function(){
        var owl = $("#mobile-carousel").data('owlCarousel');
        var className = $(this).attr('class').split(' ');
        className[1] === 'left'?  owl.prev() : owl.next();
    });

    
    ScrollReveal().reveal('.first', {
        easing: 'steps(5)',
        delay: 200,
        rotate: {
            x: 20
        },
        viewFactor: 0.2,
        reset: true,
    });

    var hobbyArray = [
        'a crazy football fan', 
        'one hell of a cook',
        'a redditor', 
        'love to watch tv shows'
    ];

    $('.card_body.hobby li.col-3 div').each(function(index){
        $(this).on('mouseenter',function(){
            $('.connect_card .card_foot p')
                    .text(`${hobbyArray[index]}`)
                    .addClass('fade');
        });
        $(this).on('mouseleave',function(){
            $('.connect_card .card_foot p')
                    .removeClass('fade')
                    .text('');
        });
    });
});
