//https://javascript.info/localstorage
//https://www.freecodecamp.org/news/how-to-use-javascript-collections-map-and-set/

class Bil {

    constructor(brand, color, bid){
        this.brand = brand;
        this.color = color;
        this.bid = bid;
    }

    getId(){
        return this.bid;
    }
}

const addbutton = document.getElementById("addbutton");
const brand = document.getElementById("brand");
const color = document.getElementById("color");

addbutton.addEventListener("click", addButtonClick);
//console.log(`minusknapp type off= ${typeof(minusknapp)}`)

function addButtonClick(){
    
    console.log(`color= ${brand.value}`)
    const now = Date.now(); 
    const id = now.toString()
    let brandname = brand.value;

    if (brandname != ""){
        let car = new Bil(brand.value, color.value, id);
        //console.log(`Bid= ${car.getId()}`)
        localStorage.setItem(id , JSON.stringify(car));
    }
    else
        alert("Måste fylla i fabrikat")
   
}











