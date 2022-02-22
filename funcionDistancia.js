/*function Calcular(x1,x2,y1,y2){
    return Math.sqrt(Math.pow((x1-x2),2)+Math.pow((y1-y2),2))
}
let distancia=Calcular(0,10,0,10)
console.log(`la distancia es de ${distancia.toFixed(2)} UA`)*/

let Calcular=(x1,x2,y1,y2)=>(Math.sqrt(Math.pow((x1-x2),2)+Math.pow((y1-y2),2)))
let distancia=Calcular(0,10,0,10)
console.log(`la distancia es de ${distancia.toFixed(2)} UA`)


