function f_btn(){
    $('html','body').animate({
        'scrollTop': $('.h_comp').position().top
    })  
  }
  
  function posmate() {
      $('html, body').animate({
          'scrollTop' : $("#posmate").position().top
      });
  }
  
  function DSC(){
      $('html, body').animate({
          'scrollTop' : $("#DSC").position().top
      });
  }
  function srijan(){
      $('html, body').animate({
          'scrollTop' : $("#srijan").position().top
      });
  }
  
  function geek(){
      $('html, body').animate({
          'scrollTop' : $("#geek").position().top
      });
  }
  
  function krypto(){
      $('html, body').animate({
          'scrollTop' : $("#krypto").position().top
      });
  }

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      $('header').css({'box-shadow':' 0 8px 16px 0 rgba(0,0,0,0.2)'})
    } else {
        $('header').css({'box-shadow':'None'})
    }

    if(document.body.scrollTop>100 || document.documentElement.scrollTop > 100){
        $('.float_btn').css({'display':'flex'})
    }
    else(
        $('.float_btn').css({'display':'none'})
    )
}




$('#year').html(new Date().getFullYear())