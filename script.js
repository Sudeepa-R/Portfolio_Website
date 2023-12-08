
let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
let sections =document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header nav a');
 window.onscroll=()=>{
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
 };
 const typed=new Typed('#element',{
    strings:['Frontend Developer','Web Designer','Web Developer'],
    typespeed:100,
    backspeed:100,
    backDelay:1000,
    loop:true
 });
const inputBx =document.getElementById("ipt");
const lstContainer=document.getElementById("lst");
function addtaskk(){
        let li=document.createElement("li");
        li.innerHTML=inputBx.value;
        lstContainer.appendChild(li);

        inputBx.value="";
        savedata();
    }
    function savedata(){
        localStorage.setItem("info",lstContainer.innerHTML);
    }
    function showlist(){
        lstContainer.innerHTML=localStorage.getItem("info");
    }
    showlist();