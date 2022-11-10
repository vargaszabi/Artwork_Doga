import { Artwork } from "./Artwork_Interface";
import { Statue } from "./Statue";
require('./style.css')

let artworklist : Artwork[] = [];
let title = (document.getElementById('title') as HTMLInputElement);
let year = (document.getElementById('year') as HTMLInputElement);
let price = (document.getElementById('price') as HTMLInputElement);
let height = (document.getElementById('height') as HTMLInputElement);
let errorarea = (document.getElementById('error') as HTMLDivElement);

const cname =  new RegExp(/[a-zA-Z]{1,}/);
const currentYear = new Date().getFullYear();
const cprice = 1;
const cheight = 20;


function titlecheck(title : string) : boolean{
    if (title.length > 0 && cname.test(title)){
        return true;
    }
    return false;
}

function yearcheck(year : number) : boolean{
    if(year < currentYear ){
        return true;
    }
    return false;
}

function pricecheck(price : number) : boolean{
    if(price >= cprice){
        return true;
    }
    return false;
}

function heightcheck(height : number) : boolean{
    if(height >= cheight){
        return true;
    }
    return false;
}

function checkAll(){
    errorarea.textContent = "";
    if(titlecheck(title.value) && yearcheck(parseInt(year.value)) && pricecheck(parseInt(price.value)) && heightcheck(parseInt(height.value))){
        artworklist.push(new Statue(title.value, parseInt(year.value), parseInt(price.value), parseInt(height.value)))
    }
    else{
        errorarea.textContent = "";
        if(!titlecheck(title.value)){
            errorarea.textContent = "Hibás a cím";
        }
        else if(yearcheck(parseInt(year.value))){
            errorarea.textContent = "Nem lehet jövöbeli évet megadni";
        }
        else if(pricecheck(parseInt(price.value))){
            errorarea.textContent = "Nem lehet 1 FT-nál kevesebbért adni";
        }
        else if(heightcheck(parseInt(height.value))){
            errorarea.textContent = "Nem lehet 20 cm-nél kisebb a szobor";
        }
    }
}

document.getElementById('submit')?.addEventListener('click', checkAll)