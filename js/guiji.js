$(".ditu_jilu").each(function(){
    $(this).on("click",function(){
        $(".zheZhao_GuiJi").css("display","block");
        
    });
    $(".guiJi_X").on("click",function(){
        $(".zheZhao_GuiJi").css("display","none");
    });
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
//$(".ditu_jilu").mousedown(function() {  
//  timeout = setTimeout(function() {  
//      console.log(1)
//  }, 2000);  
//});  
// 
//$(".ditu_jilu").mouseup(function() {  
//  clearTimeout(timeout);  
//  console.log(2)
//});  
var time = 0;//初始化起始时间  
  
  

 