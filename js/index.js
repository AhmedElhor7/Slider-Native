// convert From Iterable Object To Be Array
let imgesElment = Array.from(document.querySelectorAll(".item img"));
let lightBox = document.querySelector(".light-box-container");
let lightBoxItem = document.querySelector(".light-box-item");
let currentimg;
let prev = document.querySelector("#prev");
let close = document.querySelector("#close");
let next = document.querySelector("#next");

for (let i = 0; i < imgesElment.length; i++) {
  imgesElment[i].addEventListener("click", function (e) {
    // Number of Current img
    currentimg = imgesElment.indexOf(e.currentTarget);
    // Change Class d-none With d-flex
    lightBox.classList.replace("d-none", "d-flex");
    // Get Source Of img
    let taregtImgSrc = e.target.getAttribute("src");
    // Add back ground img
    lightBoxItem.style.backgroundImage = `url(${taregtImgSrc})`;
  });
}

function slide(step) {
    // if step  return with -1 then 1+-1 = 0
    // if step  return with 1 then 1+1 = 2
  let show = currentimg = currentimg + step;
  console.log(show);
  if (currentimg == imgesElment.length) {
    currentimg = 0;
  }
  if (currentimg < 0) {
    currentimg = imgesElment.length - 1;
  }
  
        let imgSrc  = imgesElment[currentimg].getAttribute('src')
        lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}
// Convert 2 Function To One Function slide
// function nextSlide() {
//     // console.log(currentimg++);
//     currentimg++;
//     // use == because Length is bigher than index 1
//     if (currentimg ==  imgesElment.length) {
//         currentimg = 0;
//     }
//         let imgSrc  = imgesElment[currentimg].getAttribute('src')
//         lightBoxItem.style.backgroundImage = `url(${imgSrc})`;

// }
// function prevSlide() {
//     // console.log(currentimg++);
//     currentimg--;
//     if (currentimg < 0) {
//     currentimg = imgesElment.length -1 ;

//     }
//     let imgSrc  = imgesElment[currentimg].getAttribute('src')
//     lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
// }

function closeSlider() {
    lightBox.classList.replace("d-flex", "d-none");
}



next.addEventListener("click", function () {
    slide(1);
});

prev.addEventListener("click", function () {
    slide(-1);
});
close.addEventListener('click' , closeSlider)

document.addEventListener('keydown',function (e) {
    if (e.key== 'ArrowRight') {
        slide(1);
    } else if (e.key== 'ArrowLeft') {
        slide(-1);
    } else if (e.key== 'Escape') {
        closeSlider();
    }
});
//  Close If User Click Out Side light box item
lightBox.addEventListener('click',function (e) {
    closeSlider();
});
// Stop Bubbling To Arrive light Box Item To All Fuction Working Like Close Or Slide 
lightBoxItem.addEventListener('click',function (e) {
    e.stopPropagation();
})