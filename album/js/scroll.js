$(".home").click(function(){ 
	$('html, body').animate({ scrollTop: $('#section1').offset().top },800);
});
$(".bookkk").click(function(){ 
	$('html, body').animate({ scrollTop: $('#section2').offset().top },800); 
});
$(".video").click(function(){ 
	$('html, body').animate({ scrollTop: $('#section3').offset().top },800); 
});
$(".article").click(function(){ 
  $('html, body').animate({ scrollTop: $('#section4').offset().top },800); 
});

$(".one").click(function(){ 
	$('#myNav').css({"width":"0%"});
});

$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $(".navpc").addClass("bgblack");
    } else {
      $(".navpc").removeClass("bgblack");
    }
  });
    $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $(".navmb").addClass("bgblack");
    } else {
      $(".navmb").removeClass("bgblack");
    }
  });
});


window.addEventListener('scroll', function() {
  var body = document.getElementsByTagName("BODY")[0];
  var Top = $(window).scrollTop();  

  var inner2 = document.getElementById('section2');
  var channel2 = inner2.offsetTop - body.scrollTop;

  var inner3 = document.getElementById('section3');
  var channel3 = inner3.offsetTop - body.scrollTop;

  var inner4 = document.getElementById('section4');
  var channel4 = inner4.offsetTop - body.scrollTop; 

  // console.log(inner2.offsetTop - body.scrollTop);
  // console.log(channel2);
  
  if ( Top === 1 ) {
    dataLayer.push({
     'eventCategory':'CWLAB_2018SAP',
     'eventAction':'2018SAP_channel_review',
     'eventLabel':'2018SAP頻道1',
     'event':'sendMyEvent'
    });
    console.log("channel1");
  } 
  if ( Top === channel2 ) {
    dataLayer.push({
     'eventCategory':'CWLAB_2018SAP',
     'eventAction':'2018SAP_channel_review',
     'eventLabel':'2018SAP頻道2',
     'event':'sendMyEvent'
    });
    console.log("channel2");
  }
  if ( Top === channel3 ) {
    dataLayer.push({
     'eventCategory':'CWLAB_2018SAP',
     'eventAction':'2018SAP_channel_review',
     'eventLabel':'2018SAP頻道3',
     'event':'sendMyEvent'
    });
    console.log("channel3");
  }
  if ( Top === channel4 ) {
    dataLayer.push({
     'eventCategory':'CWLAB_2018SAP',
     'eventAction':'2018SAP_channel_review',
     'eventLabel':'2018SAP頻道4',
     'event':'sendMyEvent'
    });
    console.log("channel4");
  }
})