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
},false)
// Hết hiệu ứng cho phần header
// Hiệu ứng cho back to top
 $(document).ready(function() {

    //  Hiệu ứng cho nút back to top
    $('#wrapper').append('<div id="top"></div>');
    $('#top').append('<i class="fas fa-home"></i>');
        $(window).scroll(function() {
            if($(window).scrollTop() != 0) {
                 $('#top').fadeIn();
            } 
            else {
                $('#top').fadeOut();
            }
        });
    $('#top').click(function() {
        $('html, body').animate({scrollTop:0},500);
    });
    // hết back to top
});