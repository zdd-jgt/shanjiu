$(function() {
        var BigDipper=[
                {
                    name:"姓名",
                    state:"未连接", //通讯状态
                    frequency:"未知",//通讯频度
                    eastLongitude:"未知", //东径
                    northLatitude:'未知', //北纬
                    sunrise:"未知",//日出时间
                    sunset:"未知",//日落时间
                    currentElevation:"未知",//当前海拔
                    BeidouSignal:"1"
                },
                {
                    name:"隔壁老王",
                    state:"连接", //通讯状态
                    frequency:"267",//通讯频度
                    eastLongitude:"87°59′34.43″", //东径
                    northLatitude:'47°43′57.23″', //北纬
                    sunrise:"6:21:64",//日出时间
                    sunset:"19:43:21",//日落时间
                    currentElevation:"238m",//当前海拔
                    BeidouSignal:"1"
                }
                
                
        ];
        var battery = [
            1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,36,100
        ];
        console.log(BigDipper);
        //点击事件
        $(".lianJie_hezi").on('click',function(){
            $(".lianJie_hezi").css({"display":"none"});
            $(".yiLianJie_hezi").css({"display":"block"});
            $('.bodyTopMiddle').empty();
            $('.lianJie_text').empty();
                $(' <!--姓名-->'+
            '<div class="bodyTopMiddle_a">'+BigDipper[1].name+'</div><div class="bodyTopMiddle_b"></div>'+
            '<!--状态-->'+
            '<div class="bodyTopMiddle_c">'+
            '<!--通讯状态-->'+
            '<span>通讯状态 : </span><span class="tongxunzhuangtai">'+BigDipper[1].state+'</span><!--通讯频度-->&nbsp;<span>'+
            '通讯频度 : </span><span class="tongxunpindu">'+BigDipper[1].frequency+'</span></div>').appendTo($('.bodyTopMiddle'));
            $('<table border="0" class="lianJie_table table_a">'+'<tbody><tr><td>东经度数 : </td><td>'+BigDipper[1].eastLongitude+'</td></tr><tr><td>日出时间 : </td><td>'+BigDipper[1].sunrise+'</td></tr><tr><td>当前海拔 : </td>'+
            '<td>'+BigDipper[1].currentElevation+'</td></tr></tbody></table>'+
            '<table border="0" class="lianJie_table table_b"><tbody><tr><td>北纬度数 : </td><td>'+BigDipper[1].northLatitude+'</td></tr><tr><td>日落时间 : </td>'+
            '<td>'+BigDipper[1].sunset+'</td></tr><tr><td>北斗信号 : </td>'+
            '<td>'+BigDipper[1].BeidouSignal+'</td></tr></tbody></table>').appendTo($('.lianJie_text'));
            
        });
        $(' <!--姓名-->'+
        '<div class="bodyTopMiddle_a">'+BigDipper[0].name+'</div><div class="bodyTopMiddle_b"></div>'+
        '<!--状态-->'+
        '<div class="bodyTopMiddle_c">'+
        '<!--通讯状态-->'+
        '<span>通讯状态 : </span><span class="tongxunzhuangtai">'+BigDipper[0].state+'</span><!--通讯频度-->&nbsp;<span>'+
        '通讯频度 : </span><span class="tongxunpindu">'+BigDipper[0].frequency+'</span></div>').appendTo($('.bodyTopMiddle'));
        $('<table border="0" class="lianJie_table table_a">'+'<tbody><tr><td>东经度数 : </td><td>'+BigDipper[0].eastLongitude+'</td></tr><tr><td>日出时间 : </td><td>'+BigDipper[0].sunrise+'</td></tr><tr><td>当前海拔 : </td>'+
        '<td>'+BigDipper[0].currentElevation+'</td></tr></tbody></table>'+
        '<table border="0" class="lianJie_table table_b"><tbody><tr><td>北纬度数 : </td><td>'+BigDipper[0].northLatitude+'</td></tr><tr><td>日落时间 : </td>'+
        '<td>'+BigDipper[0].sunset+'</td></tr><tr><td>北斗信号 : </td>'+
        '<td>'+BigDipper[0].BeidouSignal+'</td></tr></tbody></table>').appendTo($('.lianJie_text'));
        //判断是否连接后传入的数据
//      if($(".lianJie_hezi").css('display')=='block'){
//          $(' <!--姓名-->'+
//      '<div class="bodyTopMiddle_a">'+BigDipper[0].name+'</div><div class="bodyTopMiddle_b"></div>'+
//      '<!--状态-->'+
//      '<div class="bodyTopMiddle_c">'+
//      '<!--通讯状态-->'+
//      '<span>通讯状态 : </span><span class="tongxunzhuangtai">'+BigDipper[0].state+'</span><!--通讯频度-->&nbsp;<span>'+
//      '通讯频度 : </span><span class="tongxunpindu">'+BigDipper[0].frequency+'</span></div>').appendTo($('.bodyTopMiddle'));
//      $('<table border="0" class="lianJie_table table_a">'+'<tbody><tr><td>东经 : </td><td>'+BigDipper[0].eastLongitude+'</td></tr><tr><td>日出时间 : </td><td>'+BigDipper[0].sunrise+'</td></tr><tr><td>当前海拔 : </td>'+
//      '<td>'+BigDipper[0].currentElevation+'</td></tr></tbody></table>'+
//      '<table border="0" class="lianJie_table table_b"><tbody><tr><td>北纬 : </td><td>'+BigDipper[0].northLatitude+'</td></tr><tr><td>日落时间 : </td>'+
//      '<td>'+BigDipper[0].sunset+'</td></tr><tr><td>北斗信号 : </td>'+
//      '<td>'+BigDipper[0].BeidouSignal+'</td></tr></tbody></table>').appendTo($('.lianJie_text'));
//      }else if($(".yiLianJie_hezi").css('display')=='block'){
//          $(' <!--姓名-->'+
//      '<div class="bodyTopMiddle_a">'+BigDipper[1].name+'</div><div class="bodyTopMiddle_b"></div>'+
//      '<!--状态-->'+
//      '<div class="bodyTopMiddle_c">'+
//      '<!--通讯状态-->'+
//      '<span>通讯状态 : </span><span class="tongxunzhuangtai">'+BigDipper[1].state+'</span><!--通讯频度-->&nbsp;<span>'+
//      '通讯频度 : </span><span class="tongxunpindu">'+BigDipper[1].frequency+'</span></div>').appendTo($('.bodyTopMiddle'));
//      $('<table border="0" class="lianJie_table table_a">'+'<tbody><tr><td>东经 : </td><td>'+BigDipper[1].eastLongitude+'</td></tr><tr><td>日出时间 : </td><td>'+BigDipper[1].sunrise+'</td></tr><tr><td>当前海拔 : </td>'+
//      '<td>'+BigDipper[1].currentElevation+'</td></tr></tbody></table>'+
//      '<table border="0" class="lianJie_table table_b"><tbody><tr><td>北纬 : </td><td>'+BigDipper[1].northLatitude+'</td></tr><tr><td>日落时间 : </td>'+
//      '<td>'+BigDipper[1].sunset+'</td></tr><tr><td>北斗信号 : </td>'+
//      '<td>'+BigDipper[1].BeidouSignal+'</td></tr></tbody></table>').appendTo($('.lianJie_text'));
//      }
        

            
                 
    })