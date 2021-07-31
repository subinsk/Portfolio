import Typewriter from 'typewriter-effect/dist/core';
import anime from '/static/scripts/anime.es.js';
new Typewriter('#typewriter', {
  strings: ['Hello', 'World'],
  autoStart: true,
});

$(document).ready(()=>{

  
  if($(window).width()<740){
    $('#ec_head1').html('<span>College of Technology and Engineering</span><span>Udaipur (RAJ.)</span>')
    $('#ec_head2').html('<span>Jawahar Navodaya Vidyalya</span><span>Jalore (RAJ.)</span>')
    $('#ec_head3').html('<span>Jawahar Navodaya Vidyalya</span><span>Jalore (RAJ.)</span>')
  }
  
})

