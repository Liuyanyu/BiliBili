/**
 * Created by lenovo on 2018/1/4.
 */
//轮播图
$(document).ready(function(){
    //设置开始轮播的第一个图片
    var page=0;
    //图片数量
    var len=$(".scroll a").length;
    //设置轮播是否停止
    var stop=false;
    var t;

//            定义轮播函数
    function slide(){
        //如果轮播没有停止
        if(!stop){
            if(page==len){
                page=0;
            }
            //下面的圆点 用eq获取图片的下标 设置背景色 用siblings()获取被选元素的所有同辈元素
            $(".page-icon li").eq(page).siblings().css({"background":"#ffffff"});
            $(".page-icon li").eq(page).css({"background":"#00ffff"});

            //用eq获取图片的下标 用淡入fadeIn()方法让图片显示  用siblings()获取其他元素 fadeOut()方法让其他图片淡出
            $(".scroll a").eq(page).siblings().fadeOut(500);
            $(".scroll a").eq(page).fadeIn(500);
            page++;
        }
        //定时器 在3秒之后执行方法
        t=setTimeout(slide,3000);
    }
    slide();

     //mouseover方法鼠标放上去之后 图片开始轮播
    $(".nav_img").mouseover(function(){
        stop=true;
    });
    //mouseout方法鼠标放上去之后 图片
    $(".nav_img").mouseout(function(){
        stop=false;
    });
    //点击下面的圆点 执行轮播的方法
    $(".page-icon li").click(function(){
        //先把前面的定时器清除 再重新获取下标 执行轮播的方法
        clearTimeout(t);
        page=$(this).index();
        slide();
    })
});

//右侧边导航栏
window.onscroll=function() {
    //先根据ID获取到右侧边栏
    var oDiv = document.getElementById('nav_right');
    //scrollTop获取到top值scrollTop：位于对象最顶端和窗口中可见内容的最顶端之间的距离，简单地说就是滚动后被隐藏的高度。
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;
    //clientHeight：内容可视区域的高度，也就是说页面浏览器中可以看到内容的这个区域的高度
    //，一般是最后一个工具条以下到状态栏以上的这个区域，与页面内容无关。
    //offsetHeight：获取对象相对于由offsetParent属性指定的父坐标(css定位的元素或body元素)的高度。
    // IE、Opera 认为 offsetHeight = clientHeight + 滚动条 + 边框。FF 认为 offsetHeight 是网页内容实际高度，
    // 可以小于 clientHeight. offsetHeight在新版本的FF和IE中是一样的，表示网页的高度，与滚动条无关，chrome中不包括滚动条。
    var t = scroll + (document.documentElement.clientHeight - oDiv.offsetHeight) / 2;
    //用parseInt取整
    starMove(parseInt(t));
};
var timer=null;
function starMove(iTarget){
    var oDiv = document.getElementById('nav_right');
    clearInterval(timer);
    timer=setInterval(function(){
        //offsetTop获取对象相对于由offsetParent属性指定的父坐标(css定位的元素或body元素)距离顶端的高度。
        var iSpeed=(iTarget-oDiv.offsetTop)/8;
        //如果大于0向上取整  小于0向下取整
        iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
        if(oDiv.offsetTop==iTarget){
            clearInterval(timer);
        }else{
            oDiv.style.top=oDiv.offsetTop+iSpeed+'px'
        }
        document.title=oDiv.offsetTop;
    },30)
}

//鼠标放上去之后 显示所有的文字
window.onload=function(){
    $('li:not(.nav_li)').mouseover(function(e){
        var n= $(this).index();
        r($(this).parents('ul'),e,n);
    });
    function r(oUl,e,n){
        var left1=e.pageX+10;
        var top1=e.pageY+10;
        //var top=document.body.scrollTop+top1||document.documentElement.scrollTop+top1;
        //var left=document.body.scrollLeft+left1||document.documentElement.scrollLeft+left1;
        var $oLi=oUl.children('li').eq(n);
        var value=$oLi[0].innerText;
        var oDiv= $('<div class="on">'+value+'</div>');
        oDiv.css({"position":"absolute",'top':top1+'px','left':left1+'px','background':'#ffffff','border':'1px solid'}).appendTo($('body'));
        console.log( )
    }
    $('li').mouseout(function(e){
        $('div.on').remove()
    })
};

