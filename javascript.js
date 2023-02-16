
let products = [{id:"angle_war",title:"Angle War",theme:"Fantasy",decs:"Obama",price:"100Kr",img:"../images/new/angle war.png"},
                {id:"angle_war",title:"Angle War",theme:"Fantasy",decs:"Obama",price:"100Kr",img:"../images/new/angle war.png"},
                {id:"angle_war",title:"Angle War",theme:"Fantasy",decs:"Obama",price:"100Kr",img:"../images/new/angle war.png"},
                {id:"angle_war",title:"Angle War",theme:"Fantasy",decs:"Obama",price:"100Kr",img:"../images/new/angle war.png"},
                {id:"angle_war",title:"Angle War",theme:"Fantasy",decs:"Obama",price:"100Kr",img:"../images/new/angle war.png"},

]


function saveClick(id){
    console.log(id);
    sessionStorage.setItem("lastClick", id);
}

function load(){
    lastclick = sessionStorage.getItem("lastClick");
    console.log(lastclick);
    document.getElementById("title").innerHTML = products.find(x => x.id === lastclick).title;
    document.getElementById("theme").innerHTML = products.find(x => x.id === lastclick).theme;
    document.getElementById("desc").innerHTML = products.find(x => x.id === lastclick).decs;
    document.getElementById("price").innerHTML = products.find(x => x.id === lastclick).price;
    document.getElementById("img").src = products.find(x => x.id === lastclick).img;
    
}