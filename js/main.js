let menu=document.querySelector(".menu");
let navBar=document.querySelector(".nav-bar")

menu.onclick=function(){
    navBar.classList.toggle("open-menu");
    if(navBar.classList.contains("open-menu")){
        
        window.addEventListener("click",(e)=>{
            if(e.target!==menu && e.target!==navBar){
                navBar.classList.remove("open-menu")
            }
        })
    }
}

// _________________________________________________
let sliderImage=document.querySelector(".slider img");
let images=["images/slide-image-01.jpg",
            "images/slide-image-02.jpg",
            "images/slide-image-03.jpg",
            "images/slide-image-04.jpg",
            "images/slide-image-05.jpg",
        ];
let iconLeft=document.querySelector(".icon-left");
let iconRight=document.querySelector(".icon-right");
let slider=document.querySelector('.slider');

let bullets=document.createElement("div");
bullets.className="bullets-container";
for(let i=0;i<images.length;++i){
    let bullet=document.createElement("div");
    bullet.className="bullet";
    bullets.appendChild(bullet);
}
slider.appendChild(bullets)
bulletsArray=document.querySelectorAll(".bullets-container .bullet");

let index;
if(localStorage.getItem("imageSlider")==null){
    index=images.length - 1;
    console.log(localStorage.getItem("imageSlider"));
}
else{
    console.log(localStorage.getItem("imageSlider"));
    index=localStorage.getItem("imageSlider");
}
sliderImage.src=images[index];
iconLeft.addEventListener("click",()=>{
    if(index > 0){
        --index;
        console.log(index!==0)
    }
    else{
        index=images.length -1;
    }
    localStorage.setItem("imageSlider",index);
    sliderImage.src=images[index];
    activeBullet()
})
iconRight.addEventListener("click",()=>{
    if(index >=0 && index < images.length - 1){
        console.log(index < images.length - 1)
        ++index;
    }
    else{
        index=0;
    }
    localStorage.setItem("imageSlider",index);
    sliderImage.src=images[index];
    activeBullet();
    
})
activeBullet();
function activeBullet(){
    bulletsArray.forEach(e => {
        e.classList.remove("active-bullet");
    });
    bulletsArray[index].classList.toggle("active-bullet");
}