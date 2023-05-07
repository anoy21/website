// navbar

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

// transition 

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show2');
        } else {
            entry.target.classList.remove('show2');
        }
    });
});


const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el) => observer2.observe(el));


const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show3');
        } else {
            entry.target.classList.remove('show3');
        }
    });
});


const hiddenElements3 = document.querySelectorAll('.hidden3');
hiddenElements3.forEach((el) => observer3.observe(el));

// on click

// count down

function updateCountdown() {
    // Lấy ngày hiện tại
    const now = new Date().getTime();
  
    // Tính khoảng cách thời gian giữa ngày hiện tại và Ngày Trái Đất (22/4)
    const earthDay = new Date('April 22, 2024').getTime();
    const distance = earthDay - now;
  
    // Tính số ngày, giờ, phút, giây còn lại
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Hiển thị kết quả lên trang web
    document.getElementById('countdown').innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  }
  
  // Gọi hàm updateCountdown() mỗi giây
  setInterval(updateCountdown, 1000);


  //submit

  var btnOpen = document.getElementById('submit')
  var pop = document.getElementById('popup')
  var iconClose = document.getElementById('close')

function togglesubmit() {
    pop.classList.toggle('hide')

}
btnOpen.addEventListener('click' , togglesubmit)

iconClose.addEventListener('click', togglesubmit)
