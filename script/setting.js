$(".downmove").click(function() {
  /* Act on the event */
  var showtime = $(this).prev().is(":visible");
  $(this).prev().slideToggle("normal",function(){
    $(".sidebarbox").pin({minWidth: 1200,containerSelector: ".container"});
  });
  if(showtime==false){
    $(this).removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
  }else{
    $(this).removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
  }
});
$(".navbar-brand").hover(function() {
  /* Stuff to do when the mouse enters the element */
  $(this).css("color","red");
}, function() {
  /* Stuff to do when the mouse leaves the element */
  $(this).css('color', '#333');
});
// 用户登录
$("li.userlogin").click(function(){
  $.post("html/login.html",
      function(data){
        $("body").append('<div class="fidebox">' + data  + '<span></span></div>');
        $(".form-horizontal .close").click(function(event) {
          /* Act on the event */
          $(".fidebox").remove();
        });
      });
});
//sidebar登录
$.post("html/login.html",function(data){
    $(".login-box").append(data);
});
// 用户注册
$("li.userreg").click(function(){
  $.post("html/reg.html",
      function(data){
        $("body").append('<div class="fidebox">' + data  + '<span></span></div>');
        $(".form-horizontal .close").click(function(event) {
          /* Act on the event */
          $(".fidebox").remove();
        });
      });
});
// 文章资讯
$(".consult .table").find("tr").mouseover(function(){
    $(".consult .table").find("tr").removeClass('active');
    $(this).addClass('active');
});

//game排行榜
var Gameitme;
$(".game .sortnav a").mouseover(function() {
  Gameitme = $(this);
});

$(".game .sortnav a").click(function() {
  $(".game .table").addClass('hide');
  $(".game .table").eq($(".game .sortnav a").index(Gameitme)).removeClass('hide').find("tr").eq(0).addClass('active');
  $(".game .sortnav .active").removeClass("active");
  Gameitme.addClass("active");
});
$(".game .table").find("tr").mouseover(function(){
    $(".game .table").find("tr").removeClass('active');
    $(this).addClass('active');
});

//app排行榜
var Appitme;
$(".app .sortnav a").mouseover(function() {
  Appitme = $(this);
});

$(".app .sortnav a").click(function() {
  $(".app .table").addClass('hide');
  $(".app .table").eq($(".app .sortnav a").index(Appitme)).removeClass('hide').find("tr").eq(0).addClass('active');
  $(".app .sortnav .active").removeClass("active");
  Appitme.addClass("active");
});
$(".app .table").find("tr").mouseover(function(){
    $(".app .table").find("tr").removeClass('active');
    $(this).addClass('active');
});
//图钉
$(window).load(function() {
  /* Act on the event */
  $(".sidebarbox").pin({minWidth: 1200,containerSelector: ".containerbox"});
});


function checkhHtml5()   
        {   
            if (typeof(Worker) === "undefined")     
            {   
                if(navigator.userAgent.indexOf("MSIE 9.0")<=0)  
           {  
           alert("IE9以下不兼容本网站，推荐使用百度浏览器、chrome、firefox、safari、IE10，浏览"); 
           // window.location.href="http://rj.baidu.com/soft/lists/3";
           }  
            }  
        }
 checkhHtml5();