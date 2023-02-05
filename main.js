const toogleBtn = document.querySelector('.navbar__toogleBtn'); // 버튼연결
const menu=document.querySelector('.navbar__menu');
const icons=document.querySelector('.navbar__icons');


toogleBtn.addEventListener('click',()=>{ //토글클릭시 함수호출
    menu.classList.toggle('active');
    icons.classList.toggle('active');

});


