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
addbutton.addEventListener("click", addButtonClick);
//console.log(`minusknapp type off= ${typeof(minusknapp)}`)

function addButtonClick(){
    
    const now = Date.now(); 
    const id = now.toString()
    let car = new Bil("Volvo", "Röd", id);
    console.log(`Bid= ${car.getId()}`)
    
    localStorage.setItem(id, JSON.stringify(car));
    console.log(`click`); 
   
}











