/**
 * Created by lenovo on 2018/1/8.
 */
//$(document).ready(function(){

    //视频标题
    var n=0;
    $('.mvl_tit .mvl_tit_list').hide().eq(n).show();

    //点击左边按钮 如果不是第一张 n--显示前一张 如果是第一张 长度-1 显示最后一张
    $('.mvl_tit_left').click(function(){
        if(n>0){
            n--;
        }else{
            n=$('.mvl_tit_list').length-1;
        }
        $('.mvl_tit .mvl_tit_list').hide().eq(n).show();
    });

    //点击右边按钮 如果不是最后一张 n++显示后一张 如果是最后一张让n=0  显示第一张
    $('.mvl_tit_right').click(function(){
        if(n<$('.mvl_tit_list').length-1){
            n++;
        }else{
            n=0;
        }
        $('.mvl_tit .mvl_tit_list').hide().eq(n).show();
    });
