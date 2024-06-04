import Tablazat from "./VIEW/Tablazat.js";
import { OBJEKTUMLISTA } from "./adat.js";
import DataService from './MODEL/DataService.js';


const DS=new DataService();
DS.getKeres("OBJEKTUMLISTA", megjelenit)

function megjelenit(){
    new Tablazat(OBJEKTUMLISTA,$(".tablazat"))
}

$(window).on("torol",(event)=>{
    console.log(event.detail)
})