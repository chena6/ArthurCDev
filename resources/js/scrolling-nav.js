//jQuery to collapse the navbar on scroll



$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-dark.bg-primary").addClass("top-nav-collapse");
    } else {
        $(".navbar-dark.bg-primary").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function(scrollObject) {
    $('.page-scroll a, .navbar-brand').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(function(){
	$('html').animate({scrollTop:0});
	$('body').animate({scrollTop:0});
	
});

$.fn.isVisible = function() {

    var rect = this[0].getBoundingClientRect();
    return (
        (rect.height > 0 || rect.width > 0) &&
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


function checkVisibility() {



if ($('.about .container .row .col-md-12 .blurb').isVisible()) {
    $('.about .container .row .col-md-12 .blurb').addClass('triggered');
};

if ($(".welcome").isVisible()) {
	$(".welcome").addClass('triggered');
}

}

$(document).ready(function(){
	checkVisibility();
});

$(window).scroll(function(){
	checkVisibility();
});


/*(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
       } visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));


$(".about .container .row .col-md-12 .blurb").inViewport(function(px){
    if(px) $(this).addClass('triggered');
});
$(".welcome").inViewport(function(px){
    if(px) $(this).addClass('triggered');
});
*/