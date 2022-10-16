//importacion de la informacion 
import {vehiculos} from './datos/data.js';

console.log("MOstrar todos los datos");
console.log(vehiculos);

//find
const BuscarPorPlaca= (Placa)=>{
    return vehiculos.find ((vehiculo) =>vehiculo.placa==Placa);
} 

console.log("Mostrar un dato por la placa");
console.log(BuscarPorPlaca("bgt534"));

//filter
const FiltroMarca=(Marca)=>{
    return vehiculos.filter((ListaVehiculos)=> ListaVehiculos.marca==Marca);
}

console.log("Mostrar Los vehiculos de la misma marca");
console.log(FiltroMarca("Kia"));
