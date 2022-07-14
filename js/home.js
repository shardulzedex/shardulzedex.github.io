
     var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });




    const block = document.querySelectorAll('.block');
    window.addEventListener('load', function(){
      block.forEach(item => {
        let numElement = item.querySelector('.num');
        let num = parseInt(numElement.innerText);
        let count = 0;
        let time = 2000 / num;
        let circle = item.querySelector('.circle');
        setInterval(() => {
          if(count == num){
            clearInterval();
          } else {
            count += 1;
            numElement.innerText = count;
          }
        }, time)
        circle.style.strokeDashoffset 
          = 503 - ( 503 * ( num / 100 ));
        let dots = item.querySelector('.dots');
        dots.style.transform = 
          `rotate(${360 * (num / 100)}deg)`;
        if(num == 100){
          dots.style.opacity = 0;
        }
      })
    });
    