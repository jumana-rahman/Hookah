// PRELOADER JS
setTimeout(() => {
  $(".main").fadeOut()
}, 3000); 
// PRELOADER JS 
 
 // COUNTDOWN JS
$(function(){
   
const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;

let birthday = "Sep 22, 2022 00:00:00",
countDown = new Date(birthday).getTime(),
x = setInterval(function() {    

let now = new Date().getTime(),
    distance = countDown - now;

document.getElementById("days").innerText = Math.floor(distance / (day)),
  document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
  document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
  document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

//do something later when date is reached
if (distance < 0) {
  let headline = document.getElementById("headline"),
      countdown = document.getElementById("countdown"),
      content = document.getElementById("content");

  headline.innerText = "It's my birthday!";
  countdown.style.display = "none";
  content.style.display = "block";

  clearInterval(x);
}
//seconds
}, 0)
})
// COUNTDOWN JS

// VENOBOX
$(document).ready(function(){
    $('.venobox').venobox(); 
});
// VENOBOX

// Sticky Js
$(window).scroll(function(){
	var scrolling = $(this).scrollTop();

	if(scrolling > 200){
		$('.navbar').addClass('bg');
	}

	else{
		$('.navbar').removeClass('bg');
	}
});
// Sticky Js

// BACK-TO-TOP JS
$(window).on('scroll', function(event){
  if($(this).scrollTop() > 600){
    $('.back-to-top').fadeIn(200)
  }
  else{
    $('.back-to-top').fadeOut(200)
  }
});

// ANIMATE SCROLL TO TOP
$('.back-to-top').on('click', function(event){
  event.preventDefault();

  $('html, body').animate({
    scrollTop: 0,
  }, 1000);
});
// BACK-TO-TOP JS