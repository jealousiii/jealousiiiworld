let currentPage=0;


let pages=[
{
bg:"",
items:[],
text:""
}
];



function uploadBackground(){


let input=document.createElement("input");

input.type="file";


input.accept="image/*";


input.onchange=e=>{


let file=e.target.files[0];

let url=URL.createObjectURL(file);


document.getElementById("page").style.backgroundImage=
`url(${url})`;


pages[currentPage].bg=url;


}



input.click();


}




function uploadSticker(){


let input=document.createElement("input");

input.type="file";

input.accept="image/*";


input.onchange=e=>{


let file=e.target.files[0];


let img=document.createElement("img");


img.src=URL.createObjectURL(file);


img.className="sticker";


img.style.left="300px";

img.style.top="200px";


document.getElementById("page").appendChild(img);



drag(img);



}




input.click();


}





function drag(el){


let x,y;


el.onmousedown=e=>{


x=e.offsetX;

y=e.offsetY;


document.onmousemove=m=>{


el.style.left=m.pageX-
document.getElementById("page").offsetLeft-x+"px";


el.style.top=m.pageY-
document.getElementById("page").offsetTop-y+"px";



}



document.onmouseup=()=>{

document.onmousemove=null;

}


}


el.onwheel=e=>{


let size=parseFloat(
getComputedStyle(el).width
);


el.style.width=
(size+e.deltaY*-0.1)+"px";


}



}




function saveWorld(){


localStorage.setItem(
"jealousiiiworld",
JSON.stringify(pages)
);


alert("saved 💙");


}



function newPage(){

pages.push({
bg:"",
items:[],
text:""
});


currentPage=pages.length-1;


loadPage();


}



function nextPage(){

if(currentPage<pages.length-1){

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


document.getElementById("pageNumber")
.innerHTML=
"Page "+String(currentPage+1).padStart(3,"0");


document.getElementById("diary").value=
pages[currentPage].text;


}




function sendMessage(){


let name=
document.getElementById("name").value;


let msg=
document.getElementById("message").value;



let div=document.createElement("p");


div.innerHTML=
`💙 ${name}: ${msg}`;


document.getElementById("messages")
.appendChild(div);


}
