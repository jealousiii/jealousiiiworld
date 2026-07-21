let currentPage = 0;


let pages = [
{
    background:"",
    diary:"",
    stickers:[]
}
];



// 上传背景

function uploadBackground(){

let input=document.createElement("input");

input.type="file";

input.accept="image/*";


input.onchange=function(e){

let file=e.target.files[0];

let url=URL.createObjectURL(file);


document.getElementById("canvas").style.backgroundImage=
`url(${url})`;


pages[currentPage].background=url;


}


input.click();

}





// 上传装饰

function uploadSticker(){


let input=document.createElement("input");


input.type="file";

input.accept="image/*";



input.onchange=function(e){


let file=e.target.files[0];


let img=document.createElement("img");


img.src=URL.createObjectURL(file);


img.className="sticker";



img.style.left="100px";

img.style.top="100px";



document.getElementById("canvas")
.appendChild(img);



moveSticker(img);



}


input.click();


}




// 拖动 + 缩放

function moveSticker(img){



let offsetX;

let offsetY;



img.onmousedown=function(e){


offsetX=e.offsetX;

offsetY=e.offsetY;



document.onmousemove=function(event){


let canvas=
document.getElementById("canvas");



let rect=canvas.getBoundingClientRect();



img.style.left=
(event.clientX-rect.left-offsetX)
+"px";



img.style.top=
(event.clientY-rect.top-offsetY)
+"px";


}




document.onmouseup=function(){

document.onmousemove=null;


}



}




// 鼠标滚轮缩放

img.onwheel=function(e){


e.preventDefault();



let size=
img.width || 100;



if(e.deltaY<0){

size+=10;

}

else{

size-=10;

}



if(size<20){

size=20;

}


img.style.width=size+"px";


}



}




// 保存


function saveWorld(){



pages[currentPage].diary=
document.getElementById("diary").value;



localStorage.setItem(
"jealousiiiworld",
JSON.stringify(pages)
);



alert("💙 world saved");


}





// 翻页


function nextPage(){


if(currentPage < pages.length-1){

currentPage++;

loadPage();

}

else{


pages.push({

background:"",
diary:"",
stickers:[]

});


currentPage++;


loadPage();


}


}



function prevPage(){


if(currentPage>0){

currentPage--;

loadPage();


}


}




function loadPage(){


document.getElementById("page")
.innerHTML=
"Page "
+
String(currentPage+1)
.padStart(3,"0");



document.getElementById("diary")
.value=
pages[currentPage].diary || "";



document.getElementById("canvas")
.style.backgroundImage=
`url(${pages[currentPage].background})`;


}
