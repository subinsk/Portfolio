window.onscroll = function() {scrollFunction(),check()};
var headers= document.querySelectorAll('.hr');

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      $('header').css({'background-color':'white','color':'black','box-shadow':' 0 8px 16px 0 rgba(0,0,0,0.2)'})
      $('.sm_icons').css({'filter':'None'})
      $('li').toggleClass('black')
      $('white').toggleClass('black')
    } else {
        $('.sm_icons').css({'filter':'invert()'})
        $('header').css({'background-color':'rgba(255, 255, 255, 0)','color':'white','box-shadow':'None'})
        $('li').toggleClass('black')
        $('black').toggleClass('white')
    }
  }


function check(){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $('li').toggleClass('black')
      } else {
          $('.sm_icons').css({'filter':'invert()'})
          $('header').css({'background-color':'rgba(255, 255, 255, 0)','color':'white','box-shadow':'None'})
          $('li').toggleClass('')
      }
}
function toggleHighlight(fl,value,num){
  if(fl){
    $(value).addClass('highlight')
  }
  for(let i=0;i<=5;i++)
  {
    if(i!=num){
        $(headers[i]).removeClass('highlight')
    }
  }

}
function Home(){
    $('html, body').animate({
        'scrollTop' : $(".intro_cont").position().top
    });
    toggleHighlight(false,headers[0],0);
}
function Skills(){
    $('html, body').animate({
        'scrollTop' : $(".skills").position().top
    });
    toggleHighlight(true,headers[1],1);
}
function Education(){
    $('html, body').animate({
        'scrollTop' : $(".education").position().top
    });
    toggleHighlight(true,headers[2],2);
}

function Certificates(){
    $('html, body').animate({
        'scrollTop' : $(".certificates").position().top
    });
    toggleHighlight(true,headers[3],3);
}
function Contact(){
    $('html, body').animate({
        'scrollTop' : $(".contact").position().top
    });
    toggleHighlight(true,headers[4],4);
}

$('#year').html(new Date().getFullYear())