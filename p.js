let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3500);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3500);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

// scroll mouse //
var trangthai= "duoi2800"
var doituong = document.querySelector('.header')

window.addEventListener('scroll',function(){

    if(window.pageYOffset>2800){
        if(trangthai=="duoi2800"){
           
            doituong.classList.add('headerbienmat')
            trangthai="tren2800"
        }
    }
    else if(window.pageYOffset<=2800){
        if(trangthai=="tren2800"){
           trangthai = 'duoi2800'
            doituong.classList.remove('headerbienmat')
        }
    }
})
// end scroll mouse //
// scrollspy //
var section = document.querySelectorAll('section')
var navlinks = document.querySelectorAll('header nav a')
window.onscroll=() => {
    section.forEach(sec => {
        var top =window.scrollY
        var offset = sec.offsetTop -300
        var height = sec.offsetHeight 
        var id = sec.getAttribute('id')
        if(top>= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+ id +']').classList.add('active')
            })
             
        }
    });
}
// submit //
    let form = document.querySelector('form');
    let formMessage = document.querySelector('.form-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let data = new FormData(form);
        
        fetch('https://script.google.com/macros/s/AKfycbxkRmhGFKmgKPVNBObAxS-KZOl2QLqVKk9bAN0niVuulsSu1ZLiNnZSDyt9eSlIXJbK/exec', {
            method: "POST",
            body: data
        })
        .then(response => {
            if (response.ok) {
                // Xử lý khi submit thành công ở đây
                formMessage.style.display = 'block'; // Hiển thị phần form-message
            } else {
                // Xử lý khi có lỗi xảy ra ở đây
                console.error('Error:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
