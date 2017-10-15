function map_List(){
    var map = new BMap.Map("allmap");    // 创建Map实例
    var point = new BMap.Point(108.95309828,34.2777999);
    var dizhi=[
            "医院",
            "警察局",
            "大学",
            "消防局"
        ];
    var marker = new BMap.Marker(point);// 创建标注
    var myIcon = new BMap.Icon("img/biaozhu_22.png", new BMap.Size(37,95));
    var marker2 = new BMap.Marker(point,{icon:myIcon});  // 创建标注
        map.centerAndZoom(point, 11);
        map.addOverlay(marker2);              // 将标注添加到地图中
        map.enableScrollWheelZoom();
    var circle = new BMap.Circle(point,7000,{fillColor:"blue", strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
        map.addOverlay(circle);
    var local =  new BMap.LocalSearch(map, {renderOptions: {map: map, autoViewport: false}});  
        map.addEventListener("mouseover", function(){
                    local.searchNearby(dizhi[$(this).index()],Point,7000);
                
        
    });
}
function map_Sou(i){
    var map = new BMap.Map("allmap");    // 创建Map实例
    var point = new BMap.Point(108.95309828,34.2777999);
    var dizhi=[
            "医院",
            "警察局",
            "大学",
            "消防局"
        ];
    var marker = new BMap.Marker(point);// 创建标注
    var myIcon = new BMap.Icon("img/biaozhu_22.png", new BMap.Size(37,95));
    var marker2 = new BMap.Marker(point,{icon:myIcon});  // 创建标注
        map.centerAndZoom(point, 11);
        map.addOverlay(marker2);              // 将标注添加到地图中
        map.enableScrollWheelZoom();
    var circle = new BMap.Circle(point,7000,{fillColor:"blue", strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
    map.addOverlay(circle);
   
        var local = new BMap.LocalSearch(map, {
            renderOptions:{map: map}
        });
        local.search(dizhi[i]);
        console.log(dizhi[i]);        
        
    
}
    map_List();
   $('.list').each(function(){
//     
       $(this).on("click",function(){
           $('.list').css('background','#fff');
           $('.list').eq($(this).index()).css('background','#9E9E9E');
           map_Sou($(this).index());
           console.log(1);

       })
   });

        $('.footerMiddle_a').on("click",function(){
            $(".footerMiddle_btn_yemian_b").addClass("pie");
            $('.footerMiddle_btn_yemian').css('display','block');
                var t = setInterval(shijian, 1000);
                var n=5;
                function shijian() {
                    n--;
                    $('#daojishi').html(n+'s');
                    if(n==0){
                        clearInterval(t);
                        $('#daojishi').html(n+'s');
                    }

                }
            });
        $('.guanbi').on("click",function(){
            $('.footerMiddle_btn_yemian').css('display','none');
            $(".footerMiddle_btn_yemian_b").removeClass("pie");
        });
    
    
    
    
    
    
    
    
    
    
    