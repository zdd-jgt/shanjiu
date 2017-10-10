$('.baoDian_body_nei').on("swiperight",function(){
    xuanXiangKa($('.baoDianList_a'),$('.yemian_box'));
});

//for(var i=0;i<$(".baoDianList_a").length;i++){
//  $('.baoDianList_a').eq(i).on("click",function(i,b){
//      $('.baoDianList_a').css({"background":"#626161"})
//      $(this).css({"background":"#fd2918"});
//      
//  });
//}
xuanXiangKa($('.baoDianList_a'),$('.yemian_box'));
function xuanXiangKa( dian,mian){
    dian.eq(1).on("click",function(i,b){
        dian.css({"background":"#626161"})
        $(this).css({"background":"#fd2918"});
        mian.css({"transform":"translateX(-7.3rem)"});
    });
    dian.eq(2).on("click",function(i,b){
        dian.css({"background":"#626161"})
        $(this).css({"background":"#fd2918"});
        mian.css({"transform":"translateX(-14.6rem)"});
    });
    dian.eq(0).on("click",function(i,b){
        dian.css({"background":"#626161"})
        $(this).css({"background":"#fd2918"});
        mian.css({"transform":"translateX(-.3rem)"});
    });
}
//addEvetnDown('.yemian_box');
//function addEvetnDown(obj) {
//  $(obj).on('touchstart', function(e) {
//      var touch = e.originalEvent,
//          startX = touch.changedTouches[0].pageX;
//          startY = touch.changedTouches[0].pageY;
//      
//      $(this).on('touchmove', function(e) {
//          touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
//          if (touch.pageX - startX > 10) {
//              console.log("右划");
//              /*你的操作代码*/
//             var right=-14
//              right+=7;
//              if(right==-14||rigth=-7){
//                  console.log(right)
//                  
//                  $(obj).css({"transform":"translateX("+right+"rem)"});
//                  $('.baoDianList_a').css({"background":"#626161"});
//                  $('.baoDianList_a').eq(0).css({"background":"#fd2918"});
//              }else if(rigth=="0"){
//                  $(obj).css({"transform":"translateX(0rem)"});
//                  $('.baoDianList_a').css({"background":"#626161"});
//                  $('.baoDianList_a').eq(0).css({"background":"#fd2918"});
//              }
//             
//              console.log(right)
//              $(obj).css({"transform":"translateX("+right+"rem)"});
//              $('.baoDianList_a').css({"background":"#626161"});
//              $('.baoDianList_a').eq(0).css({"background":"#fd2918"});
////              if(right=="0"){
////                  
////                  
////              }else if(right=="-7"){
////                  $(obj).css({"transform":"translateX(0)"});
////                  $('.baoDianList_a').css({"background":"#626161"});
////                  $('.baoDianList_a').eq(1).css({"background":"#fd2918"});
////              }else if(right=="-14"){
////                  $(obj).css({"transform":"translateX(-7rem)"});
////                  $('.baoDianList_a').css({"background":"#626161"});
////                  $('.baoDianList_a').eq(2).css({"background":"#fd2918"});
////              }
//              
//              $(this).off('touchmove');
//             
//          } else if (touch.pageX - startX < -10) {
//              console.log("左划");
//               /*你的操作代码*/
//             var right=0;
//              right+=-7;
//              if(right=="0"||rigth="-7"){
//                  console.log(right)
//                  $(obj).css({"transform":"translateX("+right+"rem)"});
//                  $('.baoDianList_a').css({"background":"#626161"});
//                  $('.baoDianList_a').eq(0).css({"background":"#fd2918"});
//              }else if(rigth=="-14"){
//                  $(obj).css({"transform":"translateX(-14rem)"});
//                  $('.baoDianList_a').css({"background":"#626161"});
//                  $('.baoDianList_a').eq(0).css({"background":"#fd2918"});
//              }
//              
//             
////              if(left=="0"){
////                  $(obj).css({"transform":"translateX(-7rem)"});
////                  $('.baoDianList_a').css({"background":"#626161"});
////                  $('.baoDianList_a').eq(0).css({"background":"#fd2918"});
////                  
////              }else if(left=="-7"){
////                  $(obj).css({"transform":"translateX(-14rem)"});
////                  $('.baoDianList_a').css({"background":"#626161"});
////                  $('.baoDianList_a').eq(1).css({"background":"#fd2918"});
////              }else if(left=="-14"){
////                  $(obj).css({"transform":"translateX(-14rem)"});
////                  $('.baoDianList_a').css({"background":"#626161"});
////                  $('.baoDianList_a').eq(2).css({"background":"#fd2918"});
////              }
//              $(this).off('touchmove');
//          };
////          if (touch.pageY - startY > 100) {
////              console.log("下划");
////             /*你的操作代码*/
////              //$(this).off('touchmove');
////          } else if (touch.pageY - startY <= -1) {
////              console.log("上划");
////              /*你的操作代码*/
////              //$(this).off('touchmove');
////          };
//          e.preventDefault();
//          e.stopPropagation();
//      });
// 
//     return false;
// 
//  }).on('touchend', function() {
//      $(this).off('touchmove');
//  });
//}
function xuanXiangKaHua(dian,mian){
    
    mian.on("swiperight",function(){
 
        if(dian.eq(0).css("background")=="#fd2918"){
            mian.css({"transform":"translateX(-7rem)"});
            dian.css({"background":"#626161"})
            dian.eq(0).css({"background":"#fd2918"});
        }else if(dian.eq(1).css("background")=="#fd2918"){
            mian.css({"transform":"translateX(-14rem)"});
            dian.css({"background":"#626161"})
            dian.eq(1).css({"background":"#fd2918"});
        }else if(dian.eq(2).css("background")=="#fd2918"){
            mian.css({"transform":"translateX(-14rem)"});
            dian.css({"background":"#626161"})
            dian.eq(2).css({"background":"#fd2918"});
        }
        
        
    });
    mian.on("swipeleft",function(){
 
        if(dian.eq(0).css("background")=="#fd2918"){
            mian.css({"transform":"translateX(0)"});
            dian.css({"background":"#626161"})
            dian.eq(0).css({"background":"#fd2918"});
        }else if(dian.eq(1).css("background")=="#fd2918"){
            mian.css({"transform":"translateX(0)"});
            dian.css({"background":"#626161"})
            dian.eq(0).css({"background":"#fd2918"});
        }else if(dian.eq(2).css("background")=="#fd2918"){
            mian.css({"transform":"translateX(-7rem)"});
            dian.css({"background":"#626161"})
            dian.eq(1).css({"background":"#fd2918"});
        }
        
        
    });
    
    
    dian.eq(2).on("swiperight",function(i,b){
            dian.css({"background":"#626161"})
            $(this).css({"background":"#fd2918"});
            console.log(i);
            mian.css({"transform":"translateX(-14rem)"});
    });
    dian.eq(0).on("swiperight",function(i,b){
            dian.css({"background":"#626161"})
            $(this).css({"background":"#fd2918"});
            console.log(i);
            mian.css({"transform":"translateX(0)"});
    });
}
//急救箱
var jiJiuXiang = [
    {
        nameE:"Dressings",
        nameC:"敷料类",
        text1:"1、医用酒精棉球、医用棉签：清洗伤口、擦拭药。",
        text2:"2、灭菌纱布片：敷盖伤口。 ",
        text3:"3、灭菌创口贴：小伤口使用。",
        text4:"4、PE透气胶带：包扎伤口、固定敷料。",
        text5:"5、纱布绷带：包扎患处、保护患处。",
        text6:"6、医用止血带：四肢较大动脉出血止血。",
        
        
    }
]


