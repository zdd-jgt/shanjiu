

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
    
    
    
    
    
    
    
    
    
    
    