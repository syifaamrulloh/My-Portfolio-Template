// Even saat di klik
$("a").on("click",function(e){
   
    var tujuan = $(this).attr('href');

    var elemenTujuan = $(tujuan);

    $('html , body').animate({
    scrollTop: elemenTujuan.offset().top - 50
    },1250,'easeInOutExpo');

    e.preventDefault();
});

// about
$(window).on("load", function(){

    $(".pkiri").addClass("pMuncul");
    $(".pkanan").addClass("pMuncul");
});

// Parallax

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    //jumbotron
    $(".jumbotron img").css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $(".jumbotron h1").css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $(".jumbotron p").css({
        'transform' : 'translate(0px, '+ wScroll/1.3 +'%)'
    });

    //Portfolio
    if(wScroll > $('.portofolio').offset().top - 250 ){
        $('.portofolio .img-thumbnail').each(function(i){
            setTimeout(function(){
                $('.portofolio .img-thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });
    }

});
