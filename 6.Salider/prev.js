const img=document.querySelector("img");
const btn1=document.querySelector(".btn1");
const btn2=document.querySelector(".btn2");


var images = [
    "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG11c2ljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG11c2ljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bXVzaWN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
 ]


var d=0;

img.src = images[d];

function p(){
    d--;
    if(d < 0){
        d= images.length - 1;
    }
    console.log(d);
    img.src = images[d];
}

function n(){
     d++;
    if(d > images.length -1){
        d=0; 
    }
    console.log(d);
    img.src = images[d];
}
btn1.addEventListener("click", p);
btn2.addEventListener("click", n);







// const img = document.querySelector("img");
// const prev = document.querySelector("#prev");
// const next = document.querySelector("#next");


// var images = [
//     "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
//     "https://images.unsplash.com/photo-1433477155337-9aea4e790195?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
//     "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
// ]

// var a = 0;

// img.src = images[a];

// function p(){
//     a--;
//     if(a < 0){
//         a = images.length - 1;
//     }
//     console.log(a);
//     img.src = images[a];
// }

// function n(){
//      a++;
//     if(a > images.length -1){
//         a = 0; 
//     }
//     console.log(a);
//     img.src = images[a];
// }
// prev.addEventListener("click", p);
// next.addEventListener("click", n);