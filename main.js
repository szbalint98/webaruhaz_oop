import Tablazat from "./VIEW/Tablazat.js";
import { OBJEKTUMLISTA } from "./adat.js";

const DS=new DataService();
DS.getAdat("http://localhost:3000/emberekLISTA", megjelenit)

function megjelenit(){
    new Tablazat(OBJEKTUMLISTA,$(".tablazat"))
}

$(window).on("torol",(event)=>{
    console.log(event.detail)
})