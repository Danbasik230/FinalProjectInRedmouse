 var slideIndex = 1;
 showSlides(slideIndex);

 function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
       slideIndex = 1
 }
    if (n < 1) {
       slideIndex = slides.length
}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active","");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



$(document).ready(function(){
	$(".tab_item").not(":first").hide();
	$(".wrapper__tabs .tab").click(function() {
		$(".wrapper__tabs .tab").removeClass("actived").eq($(this).index()).addClass("actived");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("actived");
});

$(function($){
		$('a[href*="#"]').on('click.smoothscroll', function( e ){
		var hash    = this.hash,
    _hash = hash.replace(/#/,''), theHref = $(this).attr('href').replace(/#.*/, '');
		if( theHref && location.href.replace(/#.*/,'') != theHref ) return;
		var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();
		if( ! $target.length ) return;
		e.preventDefault();
		$('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 1000, 'swing', function(){
		window.location.hash = hash;
	    	});
		});
	});


  var slidetestimonialsIndex = 1;
  showSlidestestimonials(slidetestimonialsIndex);

  function plusSlidestestimonials(n) {
   showSlidestestimonials(slidetestimonialsIndex += n);
 }
 function showSlidestestimonials(n) {
   var i;
   var slidestestimonials = document.getElementsByClassName("mySlides__testimonials");
   var dotstestimonials = document.getElementsByClassName("dot__testimpnials");
     if (n > slidestestimonials.length) {
        slidetestimonialsIndex = 1
  }
     if (n < 1) {
        slidetestimonialsIndex = slidestestimonials.length
 }
     for (i = 0; i < slidestestimonials.length; i++) {
       slidestestimonials[i].style.display = "none";
   }
     for (i = 0; i < dotstestimonials.length; i++) {
       dotstestimonials[i].className = dotstestimonials[i].className.replace(" active__testimpnials","");
   }
   slidestestimonials[slidetestimonialsIndex-1].style.display = "block";
   dotstestimonials[slidetestimonialsIndex-1].className += " active__testimpnials";
 }
