// section offset Top
var s1=$('#section1').offset().top;
var s2=$('#section2').offset().top-50;
var s3=$('#section3').offset().top-30;
var s4=$('#section4').offset().top-30;
var s5=$('#section5').offset().top-60;
var s6=$('#section6').offset().top-30;
$(window).scroll(function(){
    temp = $(window).scrollTop();
    fadeUp();
})
// init the page

$(document).ready(function(){
    $("#myAudio")[0].play();
    $(".myIntro>h1").addClass("fadeIn0");
    $(".myIntro>h3").addClass("fadeIn1");
    $("#about-me").addClass("fadeIn2");
    $("#projects").addClass("fadeIn2");
    $("#top").hide();
})
//scroll top
$("#top").click(function () {
    $('html,body').stop().animate({
        scrollTop: 0
    }, 700);
});
//landing page scroll
  $("#about-me").bind("click", function () {
    $(".nav-ul li:nth-child(1)").click();
 });
 $("#projects").bind("click", function () {
     $(".nav-ul li:nth-child(3)").click();
 });
//nav scroll
var _top;
$('.nav-ul li').click(function(){
    var index = $(this).index();
    _top = $('.section').eq(index+1).offset().top;
    $(".nav-ul li").eq(index).addClass("active").siblings().removeClass("active");
    $(".nav-xs-ul li").eq(index).addClass("active").siblings().removeClass("active");
    moveTo();
})
$('.xs-nav-ul li').click(function(){
    var index = $(this).index();
    _top = $('.section').eq(index).offset().top;
    $(".nav-ul li").eq(index).addClass("active").siblings().removeClass("active");
    $(".nav-xs-ul li").eq(index).addClass("active").siblings().removeClass("active");
    moveTo();
})

// $('.xs-nav-ul li').on("click", activeNav);
// $('.nav-ul li').on("click", activeNav);
// function activeNav(){
//     var index = $(this).index();
//     console.log(this);
//     if(index==0){
//         index++;
//         console.log(index);
//     }
//     // console.log(index);
//     _top = $('.section').eq(index).offset().top;
//     // console.log(_top);
//     $(".nav-ul li").eq(index).addClass("active").siblings().removeClass("active");
//     $(".nav-xs-ul li").eq(index).addClass("active").siblings().removeClass("active");
//     fadeUp();
// }

// click event on more img
var xs_nav=$(".xs-nav-ul");
$(".more").on("click", function () {
    if (xs_nav.offset().left == "-200") {
        xs_nav.animate({ left: 0 }, 500);
    } else {
        xs_nav.animate({ left: -200 }, 500);
    }
})
//close btn on xs nav
$("#closeBtn").on("click", function(){
    xs_nav.animate({ left: -200 }, 500);
})
//music on and off
var audio=$("#myAudio")[0];
$("#music").bind("click", function(){
    if(audio.paused){
        $("#music img").addClass("play");
        $("#music img").removeClass("pause");
        audio.play();
    }else{
        audio.pause();
        $("#music img").removeClass("play");
        $("#music img").addClass("pause");
    }
})

function moveTo(){
    $('html,body').animate({
        scrollTop: _top
    }, 500);
}

function fadeUp(){
    showToTop(temp);
    showNav(temp);
    if(temp >=s2 && temp<s3){
        $("#section2>h2").addClass("fadeIn0");
        $("#section2 .about-me").addClass("fadeIn2");
        $("#section2 .descrition").addClass("fadeIn4");
    }else if(temp >=s3 && temp<s4){
        $("#section3>h2").addClass("fadeIn0");
        $("#section3 .position-container").addClass("fadeIn1");
    }else if(temp >s4 && temp <s5){
        $("#section4>h2").addClass("fadeIn0");
        $("#section4 .project-container").addClass("fadeIn1");
    }else if(temp >s5 && temp <s6){
        $("#section5 .skill-container>h2").addClass("fadeIn0");
        $(".leftcircle").eq(0).addClass("leftMove1");
        $(".leftcircle").eq(1).addClass("leftMove2");
        $(".leftcircle").eq(2).addClass("leftMove3");
        $(".leftcircle").eq(3).addClass("leftMove4");
        $(".rightcircle").addClass("rightMove");
        $('.fadeIn').addClass('fadeOut');
    }
}
function showNav(temp){
    if(temp>=s2){
        $(".nav-bar").addClass('fixed');
    }else{
        $(".nav-bar").removeClass('fixed');
    }
}
function showToTop(temp){
    if(temp<=s2){
        $("#top").hide();
    }else{
        $("#top").show();
    }
}
//hide xs nav when greater than 900px
$(window).resize(function (){
    var wid = $(window).width();
    if(wid>900){
        xs_nav.animate({ left: -200 }, 500);
    }
});
