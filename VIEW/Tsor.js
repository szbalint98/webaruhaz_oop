export default class Tsor{
    #termekObj={}
    #szulElem;
    #sorElem;
    #torlesElem;
    constructor(termekObj,szulElem){
        this.#termekObj=termekObj;
        this.#szulElem=szulElem;
        console.log(this.#szulElem);
        this.#sorokletrehozasa();
        this.#torlesElem=this.#szulElem.children("tr:last-child").children("td").children(".tbody")
        this.#torlesElem.on("click",()=>{

            this.#trigger("torol")
        })
    }
    #trigger(esemeny){
        const e = new CostumEvent(esemeny,{detail:this.termekObj.id})
        window.dispatchEvent(e)
    }


    #sorokletrehozasa(){
        let txt=`<tr>`
        for (const key in this.#termekObj) {
            txt+=`<td>${this.#termekObj[key]}</td>`
        }
        txt+=`</td><button class="torol>Töröl</button></td>`
        txt+=`</tr>`
        this.#szulElem.append(txt);
    }
}