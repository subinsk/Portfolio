window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      $('header').css({'background-color':'white','color':'black','box-shadow':' 0 8px 16px 0 rgba(0,0,0,0.2)'})
      $('.sm_icons').css({'filter':'None'})
      $('li').toggleClass('black')
    } else {
        $('.sm_icons').css({'filter':'invert()'})
        $('header').css({'background-color':'rgba(255, 255, 255, 0)','color':'white','box-shadow':'None'})
        $('li').toggleClass('')
    }
  }

function Home(){
    $('html, body').animate({
        'scrollTop' : $(".intro_cont").position().top
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