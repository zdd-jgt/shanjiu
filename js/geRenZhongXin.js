//选项卡
xiaLa(0);
xiaLa(1);
xiaLa(2);
xiaLa(3);
function xiaLa(i){
    $(".nav_biaoTi").eq(i).on("click",function(){
        if($(".nav_xuanXiang").eq(i).attr("class")=="nav_xuanXiang xuanXiang_height"){
            $(".nav_xuanXiang").eq(i).removeClass("xuanXiang_height");
            $(".nav_xuanXiang").eq(i).addClass("nav_height");
        }else if($(".nav_xuanXiang").eq(i).attr("class")=="nav_xuanXiang nav_height"){
            $(".nav_xuanXiang").eq(i).removeClass("nav_height");
            $(".nav_xuanXiang").eq(i).addClass("xuanXiang_height");
        };
    });
};
//退出登录
$(".tuiChuDengLu").on("click",function(){
    //头像
    $(".touxiang_tu").css({"background":"url(img/0_33.png) no-repeat center"});
    //名字
    $(".name").empty().html("无名氏");
    //说明
    $(".name_shuoMing").empty().html("说明：此人很懒，没有留下什么东西。");
    //详情
    $(".xinXi_box_c").empty().html("未知");
    //选项卡
    $(".nav_xuanXiang").eq(0).css("height","0");
    $(".nav_xuanXiang").eq(1).css("height","0");
    $(".nav_xuanXiang").eq(2).css("height","0");
//  $(".nav_xuanXiang").eq(0).css("height","0");
});
//
$(".lianjie_tianJia").on("click",function(){
    var name_value=$("#name").val();
    var dianHua_value=$("#dianHua").val();
    var html;
    console.log(name_value="输入姓名"||" ");
    if(dianHua_value!=""&&"联系电话",name_value!=""&&"输入姓名"){
        html='<div class="xuanXiang_a">'+name_value+'：<span class="lianjie">'+dianHua_value+'</span><a class="huJiu" href="">呼救</a></div>';
        $(".xuanXiang_tianJia").before(html);
       
    }else if(dianHua_value==""&&"联系电话",name_value!=""&&"输入姓名"){
        console.log(1);
        console.log(name_value,dianHua_value);
    }
//  if(name_value="输入姓名"||dianHua_value="联系电话"){
//      console.log(0);
//  }else{
//      var html='<div class="xuanXiang_a">'+name_value+'：<span class="lianjie">'++dianHua_value'</span><a class="huJiu" href="">呼救</a></div>';
//      $(".xuanXiang_tianJia").before(html);
//  }
})
$(".xuanXiang_a1").each(function(){
   
    $(this).on('touchstart', function(e){  
        e.stopPropagation();  
        
        time = setTimeout(function(){  
            $(".zheZhao_GuiJi1").css("display","block");
        }, 500);//这里设置长按响应时间  
    });  
      
    $(this).on('touchend', function(e){  

        e.stopPropagation();  
        clearTimeout(time);    
        console.log(2)
    });  
    $(".shanChu_left").on("click",function(){
        $(".zheZhao_GuiJi1").css("display","none");
    });
  
});
















