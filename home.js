document.addEventListener("DOMContentLoaded",function(){
   var food_0=document.getElementsByClassName("food_0");
   var food=document.getElementsByClassName("food");
   var xanh=document.getElementsByClassName("xanh");
   var food_1=document.getElementsByClassName("food_1");
   var food_5=document.getElementsByClassName("food_5");
   var food_2=document.getElementsByClassName("food_2");
   var food_4=document.getElementsByClassName("food_4");
   var xanh1=document.getElementsByClassName("xanh1");
   var xoay=document.getElementsByClassName("xoay");
   xoay[0].onmouseenter=function(){
        this.classList.add("xoay1");
        setTimeout(() => {
            this.src="https://fruitshop.7uptheme.net/wp-content/uploads/2017/04//fruit_07-250x250.jpg";           
            this.classList.add("toi");
        }, 100);
   }
   xoay[0].onmouseleave=function(){
        this.classList.add("xoay2");
        this.classList.remove("toi");
        this.src="https://fruitshop.7uptheme.net/wp-content/uploads/2017/04//fruit_21-250x250.jpg";
        setTimeout(function(){
           this.classList.remove("xoay2");
           this.classList.remove("xoay1");
       },100)
   }
   xoay[1].onmouseenter=function(){
    this.classList.add("xoay1");
    setTimeout(() => {
        this.src="https://fruitshop.7uptheme.net/wp-content/uploads/2017/04//fruit_07-250x250.jpg";           
        this.classList.add("toi");
    }, 100);
}
xoay[1].onmouseleave=function(){
    this.classList.add("xoay2");
    this.classList.remove("toi");
    this.src="https://fruitshop.7uptheme.net/wp-content/uploads/2017/04//fruit_21-250x250.jpg";
    setTimeout(function(){
       this.classList.remove("xoay2");
       this.classList.remove("xoay1");
   },100)
}
xoay[2].onmouseenter=function(){
    this.classList.add("xoay1");
    setTimeout(() => {
        this.src="https://fruitshop.7uptheme.net/wp-content/uploads/2017/04//fruit_07-250x250.jpg";           
        this.classList.add("toi");
    }, 100);
}
xoay[2].onmouseleave=function(){
    this.classList.add("xoay2");
    this.classList.remove("toi");
    this.src="https://fruitshop.7uptheme.net/wp-content/uploads/2017/04//fruit_21-250x250.jpg";
    setTimeout(function(){
       this.classList.remove("xoay2");
       this.classList.remove("xoay1");
   },100)
}
   food_5[0].onclick=function(){
    food_2[0].classList.toggle('xuathien1');
}
   food_0[0].onclick=function(){
       food[0].classList.toggle('xuathien');
   }
    food_1[0].onmouseenter=function(){
        xanh[0].classList.add("xlc");
    }
    food_1[0].onmouseleave=function(){
        xanh[0].classList.add("xlc1");
        setTimeout(function(){
            xanh[0].classList.remove("xlc");
            xanh[0].classList.remove("xlc1");    
        },100)
   }
   food_1[1].onmouseenter=function(){
        xanh[1].classList.add("xlc");
    }
    food_1[1].onmouseleave=function(){
        xanh[1].classList.add("xlc1");
        setTimeout(function(){
            xanh[1].classList.remove("xlc");
            xanh[1].classList.remove("xlc1");    
        },100)
   }
   food_1[2].onmouseenter=function(){
        xanh[2].classList.add("xlc");
    }
    food_1[2].onmouseleave=function(){
        xanh[2].classList.add("xlc1");
        setTimeout(function(){
            xanh[2].classList.remove("xlc");
            xanh[2].classList.remove("xlc1");    
        },100)
   }
   food_1[2].onmouseenter=function(){
        xanh[2].classList.add("xlc");
    }
    food_1[2].onmouseleave=function(){
        xanh[2].classList.add("xlc1");
        setTimeout(function(){
            xanh[2].classList.remove("xlc");
            xanh[2].classList.remove("xlc1");    
        },100)
   }
   food_1[3].onmouseenter=function(){
        xanh[3].classList.add("xlc");
    }
    food_1[3].onmouseleave=function(){
        xanh[3].classList.add("xlc1");
        setTimeout(function(){
            xanh[3].classList.remove("xlc");
            xanh[3].classList.remove("xlc1");    
        },100)
   }
food_1[4].onmouseenter=function(){
        xanh[4].classList.add("xlc");
    }
    food_1[4].onmouseleave=function(){
        xanh[4].classList.add("xlc1");
        setTimeout(function(){
            xanh[4].classList.remove("xlc");
            xanh[4].classList.remove("xlc1");    
        },100)
   }
   food_1[5].onmouseenter=function(){
    xanh[5].classList.add("xlc");
}
food_1[5].onmouseleave=function(){
    xanh[5].classList.add("xlc1");
    setTimeout(function(){
        xanh[5].classList.remove("xlc");
        xanh[5].classList.remove("xlc1");    
    },100)
}
food_4[0].onmouseenter=function(){
    xanh1[0].classList.add("xlc2");
}
food_4[0].onmouseleave=function(){
    xanh1[0].classList.add("xlc3");
    setTimeout(function(){
        xanh1[0].classList.remove("xlc2");
        xanh1[0].classList.remove("xlc3");    
    },100)
}
food_4[1].onmouseenter=function(){
    xanh1[1].classList.add("xlc2");
}
food_4[1].onmouseleave=function(){
    xanh1[1].classList.add("xlc3");
    setTimeout(function(){
        xanh1[1].classList.remove("xlc2");
        xanh1[1].classList.remove("xlc3");    
    },100)
}      
food_4[2].onmouseenter=function(){
    xanh1[2].classList.add("xlc2");
}
food_4[2].onmouseleave=function(){
    xanh1[2].classList.add("xlc3");
    setTimeout(function(){
        xanh1[2].classList.remove("xlc2");
        xanh1[2].classList.remove("xlc3");    
    },100)
}      
food_4[4].onmouseenter=function(){
    xanh1[4].classList.add("xlc2");
}
food_4[4].onmouseleave=function(){
    xanh1[4].classList.add("xlc3");
    setTimeout(function(){
        xanh1[4].classList.remove("xlc2");
        xanh1[4].classList.remove("xlc3");    
    },100)
}      
food_4[5].onmouseenter=function(){
    xanh1[5].classList.add("xlc2");
}
food_4[5].onmouseleave=function(){
    xanh1[5].classList.add("xlc3");
    setTimeout(function(){
        xanh1[5].classList.remove("xlc2");
        xanh1[5].classList.remove("xlc3");    
    },100)
}      
food_4[3].onmouseenter=function(){
    xanh1[3].classList.add("xlc2");
}
food_4[3].onmouseleave=function(){
    xanh1[3].classList.add("xlc3");
    setTimeout(function(){
        xanh1[3].classList.remove("xlc2");
        xanh1[3].classList.remove("xlc3");    
    },100)
}
var text0_1=document.getElementsByClassName("text0_1");
var text0_2=document.getElementsByClassName("text0_2");
var text0_3=document.getElementsByClassName("text0_3");
var text0_4=document.getElementsByClassName("text0_4");
var g=document.getElementsByClassName("g");
var h=document.getElementsByClassName("h");
var j=document.getElementsByClassName("j");
text0_1[0].onclick=function(){
    text0_2[0].classList.remove("active1");
    text0_3[0].classList.remove("active1");
    text0_4[0].classList.remove("active1");
    this.classList.add("active1");
    h[0].classList.remove("active");
    j[0].classList.remove("active");
    g[0].classList.add("active");
}
text0_2[0].onclick=function(){
    text0_1[0].classList.remove("active1");
    text0_3[0].classList.remove("active1");
    text0_4[0].classList.remove("active1");
    this.classList.add("active1");
    g[0].classList.remove("active");
    j[0].classList.remove("active");
    h[0].classList.add("active");
}
text0_3[0].onclick=function(){
    text0_1[0].classList.remove("active1");
    text0_2[0].classList.remove("active1");
    text0_4[0].classList.remove("active1");
    this.classList.add("active1");
    g[0].classList.remove("active");
    h[0].classList.remove("active");
    j[0].classList.add("active");
}
text0_4[0].onclick=function(){
    text0_1[0].classList.remove("active1");
    text0_2[0].classList.remove("active1");
    text0_3[0].classList.remove("active1");
    this.classList.add("active1");
}
    jQuery(document).ready(function($){
        var pos=$(".header1").position();
        $(window).scroll(function(){
            var posScroll=$(document).scrollTop();
            if(parseInt(posScroll)>parseInt(pos.top)){
                $(".header1").addClass("fixed");
                $('.logo1 img').attr("src","https://i.ibb.co/G0m3WNt/logothatfruit.png");
                $('.cart2').addClass("xhcart");
            }
            else{
                $(".header1").removeClass("fixed");
                $('.logo1 img').attr("src","");
                $('.cart2').removeClass("xhcart");
            }
        });
    });
    // Hết hiệu ứng header

    // Bắt đầu hiệu ứng add to cart
    function flyToElement(flyer, flyingTo) {
        var $func = $(this);
        var divider = 3;
        var flyerClone = $(flyer).clone();
        $(flyerClone).css({position: 'absolute', top: $(flyer).offset().top + "px", left: $(flyer).offset().left + "px", opacity: 1, 'z-index': 1000});
        $('body').append($(flyerClone));
        var gotoX = $(flyingTo).offset().left + ($(flyingTo).width() / 2) - ($(flyer).width()/divider)/2;
        var gotoY = $(flyingTo).offset().top + ($(flyingTo).height() / 2) - ($(flyer).height()/divider)/2;
        
        $(flyerClone).animate({
            opacity: 0.4,
            left: gotoX,
            top: gotoY,
            width: $(flyer).width()/divider,
            height: $(flyer).height()/divider
        }, 800,
        function () {
            $(flyingTo).fadeOut('slow', function () {
                $(flyingTo).fadeIn('slow', function () {
                    $(flyerClone).fadeOut('slow', function () {
                        $(flyerClone).remove();
                    });
                });
            });
        });
    }
        $("#strawberry").click(function(){

            //Scroll to top if cart icon is hidden on top
            $('html, body').animate({
                'scrollTop' : $(".card1").position().top
            });
            //Select item image and pass to the function
            var itemImg = $(this).closest(".hoaqua").find("#3").eq(0);
            flyToElement($(itemImg), $(".card1"));

            $.get("http://5d98d68661c84c00147d7253.mockapi.io/api/products", function(a){
                var t=-1;
                for(i=0;i<a.length;i++){
                    if(a[i].name==$("#1").text()){
                        t=i;
                    }
                }
                if(t==-1){
                    $.post("https://5d98d68661c84c00147d7253.mockapi.io/api/products",
                {
                    name:$("#1").text(),
                    price:$("#2").text(),
                    image:$("#3").attr('src'),
                    quantity:1
                 })
                }
                else{
                    var t2=parseInt(a[t].quantity);
                    $.ajax({
                        url:"http://5d98d68661c84c00147d7253.mockapi.io/api/products/"+a[t].id,
                        method:'PUT',
                            data: {
                                quantity:t2+1
                                }
                            })    
                }   
        });
          });
    
          $("#grapes").click(function(){
           
             //Scroll to top if cart icon is hidden on top
             $('html, body').animate({
                'scrollTop' : $(".card1").position().top
            });
            //Select item image and pass to the function
            var itemImg = $(this).closest(".hoaqua").find("#6").eq(0);
            flyToElement($(itemImg), $(".card1"));

            $.get("http://5d98d68661c84c00147d7253.mockapi.io/api/products", function(a){
                var t=-1;
                for(i=0;i<a.length;i++){
                    if(a[i].name==$("#4").text()){
                        t=i;
                    }
                }
                if(t==-1){
                    $.post("https://5d98d68661c84c00147d7253.mockapi.io/api/products",
                {
                    name:$("#4").text(),
                    price:$("#5").text(),
                    image:$("#6").attr('src'),
                    quantity:1
                 })
                }
                else{
                    var t2=parseInt(a[t].quantity);
                    $.ajax({
                        url:"http://5d98d68661c84c00147d7253.mockapi.io/api/products/"+a[t].id,
                        method:'PUT',
                            data: {
                                quantity:t2+1
                                }
                            })    
                }
            
    
            
        });
    });
    
        $("#lemon").click(function(){
            
             //Scroll to top if cart icon is hidden on top
             $('html, body').animate({
                'scrollTop' : $(".card1").position().top
            });
            //Select item image and pass to the function
            var itemImg = $(this).closest(".hoaqua").find("#9").eq(0);
            flyToElement($(itemImg), $(".card1"));

            $.get("http://5d98d68661c84c00147d7253.mockapi.io/api/products", function(a){
                var t=-1;
                for(i=0;i<a.length;i++){
                    if(a[i].name==$("#7").text()){
                        t=i;
                    }
                }
                if(t==-1){
                    $.post("https://5d98d68661c84c00147d7253.mockapi.io/api/products",
                {
                    name:$("#7").text(),
                    price:$("#8").text(),
                    image:$("#9").attr('src'),
                    quantity:1
                 })
                }
                else{
                    var t2=parseInt(a[t].quantity);
                    $.ajax({
                        url:"http://5d98d68661c84c00147d7253.mockapi.io/api/products/"+a[t].id,
                        method:'PUT',
                            data: {
                                quantity:t2+1
                                }
                            })    
                }   
        });
          });
    
        $("#chanh").click(function(){
            alert("Đã thêm vào giỏ hàng");
            $.post("https://5d98d68661c84c00147d7253.mockapi.io/api/products",
      {
        name:$("#14").text(),
        price:$("#15").text(),
        image:$("#16").attr('src'),
        quantity:1
      },
      function(){
      });
          });
    
        $("#nho").click(function(){
            alert("Đã thêm vào giỏ hàng");
            $.post("https://5d98d68661c84c00147d7253.mockapi.io/api/products",
      {
        name:$("#17").text(),
        price:$("#18").text(),
        image:$("#19").attr('src'),
        quantity:1
      })
          });    
        //   hết add to cart
        $("#dauu").click(function(){
            alert("Đã thêm vào giỏ hàng");
            $.post("https://5d98d68661c84c00147d7253.mockapi.io/api/products",
      {
        name:$("#21").text(),
        price:$("#22").text(),
        image:$("#23").attr('src'),
        quantity:1
      },
      function(){
      });
          });
    
        $("#chanhh").click(function(){
            alert("Đã thêm vào giỏ hàng");
            $.post("https://5d98d68661c84c00147d7253.mockapi.io/api/products",
      {
        name:$("#24").text(),
        price:$("#25").text(),
        image:$("#26").attr('src'),
        quantity:1
      },
      function(){
      });
          });
    
        $("#nhoo").click(function(){
            alert("Đã thêm vào giỏ hàng");
            $.post("https://5d98d68661c84c00147d7253.mockapi.io/api/products",
      {
        name:$("#27").text(),
        price:$("#28").text(),
        image:$("#29").attr('src'),
        quantity:1
      })
          });    
    ;
    $.get("http://5d98d68661c84c00147d7253.mockapi.io/api/products", function(a){
      var sum1=0,sum2=0;
      for(i=0;i<a.length;i++){
          var x=a[i].image;
          var c=parseFloat(a[i].price);
          sum=a[i].price*a[i].quantity;
          sum1=sum1+sum;
          sum2=sum2+parseInt(a[i].quantity);   
      }
      sum1=sum1+50000;
      $(".count2").text(sum2+" sản phẩm");  
      $("#count").text(" "+sum2); 
      $("#sumMoney").text(sum1+" đ"); 
      $("#total").text(sum1+" đ"); 
  });
},false)
