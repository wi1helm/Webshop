
let products = [{id:"angle_war",title:"Angle War",theme:"Fantasy",decs:"Obama",price:"120Kr",img:"../images/new/angle war.png"},
                {id:"mount_resv",title:"Mountain Reserve",theme:"Nature",decs:"Obama",price:"160Kr",img:"../images/new/Montain Reserve.png"},
                {id:"wavy_fall",title:"Wavy Waterfall",theme:"Nature",decs:"Obama",price:"99Kr",img:"../images/new/wavy waterfall.png"},
                {id:"world_prot",title:"World Protest",theme:"Sci-Fi",decs:"Obama",price:"149Kr",img:"../images/new/world protest.png"},
                {id:"ethereal_sunrise",title:"Ethereal Sunrise",theme:"Fantasy",decs:"Obama",price:"99Kr",img:"../images/low/Ethereal Sunrise.png"},

]


function saveClick(id){
    console.log(id);
    sessionStorage.setItem("lastClick", id);
}

function load(){
    lastclick = sessionStorage.getItem("lastClick");
    if (lastclick == undefined){
        location.href = "../index.html";
    }
    console.log(lastclick);
    document.getElementById("title").innerHTML = products.find(x => x.id === lastclick).title;
    document.getElementById("theme").innerHTML = products.find(x => x.id === lastclick).theme;
    document.getElementById("desc").innerHTML = products.find(x => x.id === lastclick).decs;
    document.getElementById("price").innerHTML = products.find(x => x.id === lastclick).price;
    document.getElementById("img").src = products.find(x => x.id === lastclick).img;
    
}