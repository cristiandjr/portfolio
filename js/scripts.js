const navMenu=document.getElementById("nav-menu"),navToggle=document.getElementById("nav-toggle"),navClose=document.getElementById("nav-close"),navLink=document.getElementsByClassName("nav-link");if(navToggle&&navToggle.addEventListener("click",()=>{navMenu.classList.add("show-menu")}),navClose&&navClose.addEventListener("click",()=>{navMenu.classList.remove("show-menu")}),navLink)for(i=0;i<navLink.length;i++)navLink[i].addEventListener("click",e=>{navMenu.classList.remove("show-menu")});const checkbox=document.getElementById("checkbox"),sections=(checkbox.addEventListener("change",()=>{document.body.classList.toggle("dark")}),document.querySelectorAll("section[id]"));function navHighlighter(){let a=window.pageYOffset;sections.forEach(e=>{var n=e.offsetHeight,t=e.offsetTop-150;sectionId=e.getAttribute("id"),a>t&&a<=t+n?document.querySelector(".nav-menu a[href*="+sectionId+"]").classList.add("active-link"):document.querySelector(".nav-menu a[href*="+sectionId+"]").classList.remove("active-link")})}var count_particles,stats,update;window.addEventListener("scroll",navHighlighter),particlesJS("particles-js",{particles:{number:{value:95,density:{enable:!1,value_area:315.65905665290904}},color:{value:"#b44ced"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:4,size_min:.3,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:250,size:0,duration:2,opacity:0,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});