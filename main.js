import Tablazat from "./VIEW/Tablazat.js";
import { OBJEKTUMLISTA } from "./adat.js";
import {DataService} from './DataService.js';


const DS=new DataService();
DS.getAdat("http://localhost:3000/OBJEKTUMLISTA", megjelenit)

function megjelenit(){
    new Tablazat(OBJEKTUMLISTA,$(".tablazat"))
}

$(window).on("torol",(event)=>{
    console.log(event.detail)
})