*{

box-sizing:border-box;

}


body{

margin:0;

height:100vh;

overflow:hidden;

font-family:"Pixelify Sans",sans-serif;


}


#world{


width:900px;

height:750px;

margin:30px auto;


position:relative;


background:#7bdcff;


border-radius:25px;


overflow:hidden;


box-shadow:

0 0 30px white;


}



header{

text-align:center;

color:#008cff;

text-shadow:2px 2px white;

}



h1{

font-size:38px;

margin:15px;

}



.tools{

position:absolute;

top:20px;

left:20px;

z-index:20;


}


button{


font-family:inherit;

background:white;

border:3px solid #63cfff;

border-radius:12px;

padding:8px;

cursor:pointer;

}




#canvas{


position:absolute;

top:0;

left:0;

width:100%;

height:100%;


background-repeat:repeat;


}



#diaryBox{


position:absolute;

width:300px;

height:280px;


left:300px;

top:220px;


background:#ffffffaa;


border:4px solid white;


border-radius:20px;


box-shadow:

0 0 20px #55cfff;


}



.title{


background:#8bdcff;

padding:8px;

text-align:center;

}



#diary{


width:100%;

height:230px;


border:0;

background:transparent;


font-family:inherit;

font-size:18px;

padding:15px;


}



.sticker{


position:absolute;

cursor:move;

max-width:200px;


}



.pageControl{


position:absolute;

bottom:20px;

left:0;

right:0;


text-align:center;


}
