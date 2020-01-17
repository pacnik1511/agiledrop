$(window).load(function() {
  $(".bxslider").bxSlider({
    controls: false,
    auto: true,
    infiniteLoop: false,
    pager: false
});

$(".bxslider2").bxSlider({
  controls: false,
  auto: true,
  infiniteLoop: false,
  pager: false
});
//ARROW-BREATHING
function breathe(){
   $(".ss1-arrow img").fadeOut("slow").fadeIn("slow");
}
setInterval(function(){
  breathe();
},2400);

//SROLL-TO SECTION
$('.ss1-arrow img').on('click', function(event) {
    var target = $(".ss1-arrow img");
    if( target.length ) {
        $('html, body').stop().animate({
            scrollTop: target.offset().top +50}, 1000);
    }
  });

//NAVIGATION-SECOND-OPEN
var changeColor = $(".item .hasChild a");

  $(".second").click(function(){
    if($(".second-open").hasClass("activate")){
      $(".second-open").slideUp(400);
      $(".rotate-second").css("transform","rotate( 90deg)")

    }else{
      $(".second-open").slideDown(400);
      $(".rotate-second").css("transform","rotate(0deg)")
      $(changeColor[0]).css("background-color","green")
    }
    $(".second-open").toggleClass("activate");
  });
//NAVIGATION-THIRD-OPEN
  $(".third").click(function(){
    if($(".third-open").hasClass("activate")){
      $(".third-open").slideUp(400);
      $(".rotate-third").css("transform","rotate( 90deg)")
    }else{
      $(".third-open").slideDown(400);
      $(".rotate-third").css("transform","rotate(0deg)")
    }
    $(".third-open").toggleClass("activate");
  });

  //SCROLL TO TOP
var top = document.querySelector(".ft-arrow-up img")
top.onclick = function scroll(){
(function smoothscroll(){
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(smoothscroll);
    window.scrollTo (0,currentScroll - (currentScroll/11));
  }
})();
}

$(".close").click(function(){
  $('#myModal').css("display","none");
  $(modal).removeClass("active");
});//CLOSE MODAL
var images =  $(".column img").length;
var image = $(".column img");
var modal = $(".mySlides")
var next = $(".next");
var prev = $(".prev");

//SHOW MODAL IMG
  $(image.click(function(){
    modal.hide();
    modal.removeClass("active")
    $('#myModal').css("display","block");
    var indeks = image.index(this);
    var indeksModal = modal[indeks];
    $(indeksModal).addClass("active");
    $(indeksModal).show();
  }));

//NEXT IMAGE
  $(next).click(function(){
    for(var i = 0; i < modal.length; i++){
      if($(modal[i]).hasClass("active")){
        $(modal[i]).removeClass("active");
        next = 1;
        var nasledni = modal[i + next];
        if(nasledni == undefined){
            $(myModal).hide()
        }else{
          $(nasledni).addClass("active")
          $(nasledni).show();
          i = modal.length;
        }
      }else{}
    }
  });

//PREV IMAGE
  $(prev).click(function(){
    for(var i = 0; i < modal.length; i++){
      if($(modal[i]).hasClass("active")){
        $(modal[i]).removeClass("active");
        prev = -1;
        var nasledni = modal[i + prev];
        if(nasledni == undefined){
            $(myModal).hide()
        }else{
          $(nasledni).addClass("active")
          $(nasledni).show();
          i = modal.length;
        }
      }else{}
    }
  });

//NAVBAR RESIZE ON SCROLL

  $(document).on("scroll", function() {
  	if($(document).scrollTop()>30) {
  		$("header").removeClass("large").addClass("small");
  	} else {
  		$("header").removeClass("small").addClass("large");
  	}
  });
});
