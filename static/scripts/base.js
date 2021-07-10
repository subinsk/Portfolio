window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}

function Home(){
    $('html, body').animate({
        'scrollTop' : $(".intro_cont").position().top
    });
}
function About(){
    $('html, body').animate({
        'scrollTop' : $(".about").position().top
    });
}
function Skills(){
    $('html, body').animate({
        'scrollTop' : $(".skills").position().top
    });
}
function Education(){
    $('html, body').animate({
        'scrollTop' : $(".education").position().top
    });
}
function Projects(){
    $('html, body').animate({
        'scrollTop' : $(".projects").position().top
    });
}
function Certificates(){
    $('html, body').animate({
        'scrollTop' : $(".certificates").position().top
    });
}
function Contact(){
    $('html, body').animate({
        'scrollTop' : $(".contact").position().top
    });
}

$('#year').html(new Date().getFullYear())