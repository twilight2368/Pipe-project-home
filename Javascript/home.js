{
    let menu1 = document.getElementById("menu-suggest-item1");
    let menu2 = document.getElementById("menu-suggest-item2");
    let menu3 = document.getElementById("menu-suggest-item3");
    let menu4 = document.getElementById("menu-suggest-item4");
    let menu5 = document.getElementById("menu-suggest-item5");
    
    let menu_content1 = document.getElementById("main-category-item1");
    let menu_content2 = document.getElementById("main-category-item2");
    let menu_content3 = document.getElementById("main-category-item3");
    let menu_content4 = document.getElementById("main-category-item4");
    let menu_content5 = document.getElementById("main-category-item5");  

    menu1.onclick = function(){
        menu_content1.style.display = "block";
        menu_content2.style.display = "none";
        menu_content3.style.display = "none";
        menu_content4.style.display = "none";
        menu_content5.style.display = "none";

        menu1.style.backgroundColor = "#05E8BA";
        menu2.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        menu3.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        menu4.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        menu5.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    
    }

    menu2.onclick = function(){
        menu_content2.style.display = "block";
        menu_content1.style.display = "none";
        menu_content3.style.display = "none";
        menu_content4.style.display = "none";
        menu_content5.style.display = "none";

        menu2.style.backgroundColor = "#fc6d8c";
        menu1.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        menu3.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        menu4.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        menu5.style.backgroundColor = "rgba(0, 0, 0, 0.6)";

    }

    menu3.onclick = function(){
        menu_content3.style.display = "block";
        menu_content1.style.display = "none";
        menu_content2.style.display = "none";
        menu_content4.style.display = "none";
        menu_content5.style.display = "none";

        menu3.style.backgroundColor = "#806cf5";
        menu1.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        menu2.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        menu4.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        menu5.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        
    }

    menu4.onclick = function(){
        menu_content4.style.display = "block";
        menu_content1.style.display = "none";
        menu_content2.style.display = "none";
        menu_content3.style.display = "none";
        menu_content5.style.display = "none";

        menu4.style.backgroundColor = "#5cfa5c";
        menu1.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        menu2.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        menu3.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        menu5.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    }

    menu5.onclick = function(){
        menu_content5.style.display = "block";
        menu_content1.style.display = "none";
        menu_content2.style.display = "none";
        menu_content3.style.display = "none";
        menu_content4.style.display = "none";
        
        menu5.style.backgroundColor = "#fa9b5c";
        menu1.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        menu2.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        menu3.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        menu4.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        
    }
}

{
    let item = document.getElementsByClassName("category-advertise-item");
    let i = 0;

    let clickleft = document.getElementById("button-ad-1");
    let clickright = document.getElementById("button-ad-2");
    
    clickright.onclick = function(){
        if (i === 3) {
            item[0].style.removeProperty("left");
            item[0].style.removeProperty("right");
            item[3].style.removeProperty("left");
            item[3].style.removeProperty("right");
     
           item[3].style.left = "0";
           item[3].style.width = "0";
           item[0].style.right = "0";
           item[0].style.width = "100%";

            i = 0;
            return 0;
        }
       item[i].style.removeProperty("left");
       item[i].style.removeProperty("right");
       item[i+1].style.removeProperty("left");
       item[i+1].style.removeProperty("right");

       item[i].style.left = "0";
       item[i].style.width = "0";
       item[i+1].style.right = "0";
       item[i+1].style.width = "100%";
       i++;
    }
  
    clickleft.onclick = function(){
        
        if (i === 0) {
            item[0].style.removeProperty("left");
            item[0].style.removeProperty("right");
            item[3].style.removeProperty("left");
            item[3].style.removeProperty("right");
     
            item[3].style.left = "0";
            item[3].style.width = "100%";
            item[0].style.right = "0";
            item[0].style.width = "0%";

            i = 3;
            return 0;
        }
        item[i].style.removeProperty("left");
        item[i].style.removeProperty("right");
        item[i-1].style.removeProperty("left");
        item[i-1].style.removeProperty("right");
 
        item[i-1].style.left = "0";
        item[i-1].style.width = "100%";
        item[i].style.right = "0";
        item[i].style.width = "0%";  
        i--;   
        
     }
}

{
    let clickleft = document.getElementById( "button-suggest-1");
    let clickright = document.getElementById( "button-suggest-2");

    let scrollme = document.getElementById("suggestion-main-content1");
    
    clickleft.onclick = function () {
        scrollme.scrollLeft = scrollme.scrollLeft - 2*258;
    }

    clickright.onclick = function () {
        scrollme.scrollLeft = scrollme.scrollLeft + 2*258;
    }
}


