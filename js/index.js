//歌词
window.onload=function() {
    var i = 0;
    setTimeout(scroll, 17000);
    function scroll() {
        setInterval(function () {
            var color = ['#191AFF', '#162BC8', '#8D19FF', '#1EFFA9', 'red', '#FF92FD', '#FF1732', '#FF2888'];
            $("ul").animate({top: '-30px'}, 1700, function () {
                $("ul").css({top: "0"});
                //把第一个插到最后一个的后面
                $("ul li:last").after($('ul li:first'));
                if (i == $("ul li a").length - 1) {
                    i = 0;
                }
            });
            $("ul li a").css('color','#333333').eq(0).css({'color': color[i%color.length]});
            i++;
        }, 2000);
    }
};

//首页轮播图
$(document).ready(function(){
    //设置开始轮播的第一个图片
    var page=0;
    //图片数量
    var len=$(".right_img a").length;
    //设置轮播是否停止
    var stop=false;
    var t;
//            定义轮播函数
    function slide(){
        if(!stop){
            if(page==len){
                page=0;
            }
    //用eq获取图片的下标 用淡入fadeIn()方法让图片显示  用siblings()获取其他元素 fadeOut()方法让其他图片淡出
            $(".right_img a").eq(page).siblings().fadeOut(1500);
            $(".right_img a").eq(page).fadeIn(1500);
            page++;
        }
        //定时器 在3秒之后执行方法
        t=setTimeout(slide,1500);
    }
    slide();
});
