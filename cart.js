// Hiệu ứng cho phần header
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
 
 $(document).ready(function() {
    $(window).scroll(function() {
        if($(window).scrollTop() > 180){
        $('.header1').css("top","-10px");
        $('.header1').css("position","fixed");
        $('.header1').css("z-index","200");
        }
        if($(window).scrollTop() <= 180){
            $('.header1').css("position","unset");
        }
    });
  //   Hết thanh cuộn chuột
  // xử lý thêm giỏ hàng

  // Thêm sp vào bảng
  //   $.get("http://5d98d68661c84c00147d7253.mockapi.io/api/products", function(a, status){
  //        for(i=0;i<a.length;i++){
  //             var x=a[i].image;
  //             $("#co2").append('<div class="pic"><img src='+x+'></div>');
  //             $("#co3").append('<span>'+a[i].name+'</span>');
  //             $("#co4").append('<span>'+a[i].price+'</span>');
  //             $("#co5").append('<div class="inde"><button id="decrease"><i class="fas fa-arrow-alt-circle-down click-reduction"></i></button><input type="text" size="5" class="ip-cart" name="" id="" value="1" placeholder="1"><button id="increase"><i class="fas fa-arrow-alt-circle-up click-increase"></i></button></div>');
  //             $("#co5").append('<span></span>');
  //        }
         
  //  });
  //  $.get("http://5d98d68661c84c00147d7253.mockapi.io/api/products", function(a, status){
  //     var sum=0;
  //     for(i=0;i<a.length;i++){
  //        var c=parseFloat(a[i].price);
  //        sum=sum+c;
  //        $("#co6").append('<span>'+sum+'</span>');
  //     };
  //     $("#total").text(sum)
  // });
  
  $.get("http://5d98d68661c84c00147d7253.mockapi.io/api/products", function(a, status){
     var sum2=0;
      var sum1=0;
      for(i=0;i<a.length;i++){
          var x=a[i].image;
          sum=a[i].price*a[i].quantity;
          sum1=sum1+sum;
          sum2=sum2+parseInt(a[i].quantity);
          $("#tb-cart").append('<tr><td><button class="del" onclick="removeitem('+a[i].id+')"><i class="fas fa-times click-remove-pr"></i></button></td><td><div class="pic"><img  src='+x+'></td></div><td>'+a[i].name+'</td><td>'+a[i].price+'</td><td><div class="cidoa"><i class="fas fa-arrow-alt-circle-down click-increase" onclick="giam('+a[i].id+')"></i><input type="text" onchange="change('+a[i].id+')" class="ip-cart" value="'+a[i].quantity+'" placeholder="1"><i  onclick="tang('+a[i].id+')" class="fas fa-arrow-alt-circle-up abc"></i></div></td><td class="summm">'+sum+'</td></tr>');
      }
      sum1=sum1+50000;
      $(".count2").text(sum2+" sản phẩm");
      $("#sumMoney").text(sum1+" đ"); 
      $("#total").text(sum1+" đ"); 
      $("#count").text(" "+sum2);
  });
      //  Hết thêm sản phẩm vào bảng

      // Tính số sản phẩm
  $(".refresh").click(function(){
    location.reload();
  });
  

  
  // Hết tính số sản phẩm
  // // Xử lí nút tăng giảm sản phẩm
  // $("#decrease").click(function(){
  //     var y=parseFloat($(".ip-cart").value);
  //     y--;
  //   $(".ip-cart").val(y);
  //   });
  // $("#increase").click(function(){
  //     var y=parseFloat($(".ip-cart").value);
  //     y++;
  //   $(".ip-cart").val(y);
  //   });
});
},false)

$("#submit-cart").click(function(){
    var u=new Date();
    $.post("https://5d98d68661c84c00147d7253.mockapi.io/api/API",
        {
            time:u
         }) 

    $.get("http://5d98d68661c84c00147d7253.mockapi.io/api/products", function(a){
        var d = new Date();
        var h=Math.floor(Math.random()*9000 ) + 1000;
        var t="27M"+h;
        for(var i=0;i<a.length;i++){
            $.post("http://5d971a739937f40014b686ce.mockapi.io/api/GD",
            {
                img:a[i].image,
                sumM:parseInt(a[i].price)*parseInt(a[i].quantity),
                time:d,
                Ma:t
             })
            $.ajax({
                url:"http://5d98d68661c84c00147d7253.mockapi.io/api/products/"+a[i].id,
                method:'DELETE'
            })    
        }
    });
  });
// Hết hiệu ứng cho phần header

