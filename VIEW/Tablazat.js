import Tsor from "./Tsor.js";

export default class Tablazat{
    #LISTA=[]
    #szulElem;
    #tbodyElem;
    constructor(LISTA,szulElem){
        this.#LISTA=LISTA;
        this.#szulElem=szulElem;
        this.#tablazatMegjelenit();
        this.#tbodyElem=this.#szulElem.children("table").children("tbody");
        console.log(this.#tbodyElem)
        this.#sorokhozzadasa()

    }
    #tablazatMegjelenit(){

        let txt = `<table class="table table-dark table-striped" >`
        txt+=`<tr><th>Id</th><th>Név</th><th>Gyártó:</th><th>Ár:</th><th>Kép</th></tr>`;

        txt+=`</table>`;
        this.#szulElem.append(txt)

    }
    #sorokhozzadasa(){
        this.#LISTA.forEach((element) => {
            new Tsor(element,this.#tbodyElem)
        
    });
}
}