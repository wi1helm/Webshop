
let products = [{id:"angel_war",title:"Angel War",theme:"Fantasy",decs:"Obama",price:"120Kr",img:"../images/new/angle war.png"},
                {id:"mount_resv",title:"Mountain Reserve",theme:"Nature",decs:"Obama",price:"160Kr",img:"../images/new/Montain Reserve.png"},
                {id:"wavy_fall",title:"Wavy Waterfall",theme:"Nature",decs:"Obama",price:"99Kr",img:"../images/new/wavy waterfall.png"},
                {id:"world_prot",title:"World Protest",theme:"Sci-Fi",decs:"Obama",price:"149Kr",img:"../images/new/world protest.png"},
                {id:"ethereal_sunrise",title:"Ethereal Sunrise",theme:"Fantasy",decs:"Obama",price:"99Kr",img:"../images/low/Ethereal Sunrise.png"},
                {id:"melancholy_city",title:"The Melancholy City",theme:"Fantasy",decs:"Obama",price:"60Kr",img:"../images/low/The Melancholy City.png"},
                {id:"urban_jungle",title:"Urban Jungle",theme:"Nature",decs:"Obama",price:"50Kr",img:"../images/low/Urban Jungle.png"},
                {id:"world_color",title:"World Of Color",theme:"Fantasy",decs:"Obama",price:"40Kr",img:"../images/low/world of color.png"},
                {id:"castle_clouds",title:"Castle in the Clouds",theme:"Fantasy",decs:"Obama",price:"160Kr",img:"../images/fantasy/Castle_in_the_Clouds.png"},
                {id:"dragons_lair",title:"Dragons Lair",theme:"Fantasy",decs:"Obama",price:"199Kr",img:"../images/fantasy/Dragons_Lair.png"},
                {id:"enchanted_waterfall",title:"Enchanted Waterfall",theme:"Fantasy",decs:"Obama",price:"170r",img:"../images/fantasy/Enchanted_Waterfall.png"},
                {id:"faerie_ring",title:"Faerie Ring",theme:"Fantasy",decs:"Obama",price:"99Kr",img:"../images/fantasy/Faerie_Ring.png"},
                {id:"fairy_garden",title:"Fairy Garden",theme:"Fantasy",decs:"Obama",price:"150Kr",img:"../images/fantasy/Fairy_Garden.png"},
                {id:"giants_playground",title:"Giants Playground",theme:"Fantasy",decs:"Obama",price:"99Kr",img:"../images/fantasy/Giants_Playground.png"},
                {id:"magic_mirror",title:"Magic Mirror",theme:"Fantasy",decs:"Obama",price:"120Kr",img:"../images/fantasy/Magic_Mirror.png"},
                {id:"mermaids_cove",title:"Mermaids_Cove",theme:"Fantasy",decs:"Obama",price:"99Kr",img:"../images/fantasy/Mermaids_Cove.png"},
                {id:"phonix_rising",title:"Phonix_Rising",theme:"Fantasy",decs:"Obama",price:"199Kr",img:"../images/fantasy/Phonix_Rising.png"},
                {id:"crystal_castle",title:"The Crystal Castle",theme:"Fantasy",decs:"Obama",price:"130Kr",img:"../images/fantasy/The_Crystal_Castle.png"},
                {id:"dark_tower",title:"The Dark Tower",theme:"Fantasy",decs:"Obama",price:"120Kr",img:"../images/fantasy/The_Dark_Tower.png"},
                {id:"the_enchanted_forest",title:"The Enchanted Forest",theme:"Fantasy",decs:"Obama",price:"150Kr",img:"../images/fantasy/The_Enchnated_Forest.png"},
                {id:"lost_city",title:"The Lost City",theme:"Fantasy",decs:"Obama",price:"99Kr",img:"../images/fantasy/The_Lost_City.png"},
                {id:"quintet",title:"The Quintet",theme:"Fantasy",decs:"Obama",price:"199Kr",img:"../images/fantasy/The_Quintet.png"},
                {id:"unicorn_meadows",title:"Unicorn_Meadows",theme:"Fantasy",decs:"Obama",price:"100Kr",img:"../images/fantasy/Unicorn_Meadows.png"},
                {id:"wizards_workshop",title:"Wizards Workshop",theme:"Fantasy",decs:"Obama",price:"80Kr",img:"../images/fantasy/Wizards_Workshop.png"},

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