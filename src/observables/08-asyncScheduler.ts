import { asyncScheduler } from "rxjs";

// setTimeout(()=> { }, 3000); 
// setInterval(() => { }, 3000);

const saludar = () => console.log('Hola mundo :)');

const saludar2 = nombre => console.log(`Hola ${nombre} :)`);

//pasados 3 segundos ejecuta la función saludar
//asyncScheduler.schedule(saludar, 3000);

//asyncSchedule actuando como el setTimeout
//recibe función flecha, arrow function

//como 3er parametros se manda el estado, que en este caso es el nombre
//asyncScheduler.schedule(saludar2, 3000, 'Juanita');

//asyncSchedule actuando como el setInterval
//recibe una función

//como 2endo argumento se manda el intervalo de tiempo en el que se quiere que la función comience a ejecutarse
//3er agumento el estado inicial
const subs = asyncScheduler.schedule( function(state){
    console.log('state', state);

    this.schedule( state + 1, 1000 );

}, 3000, 0);

// setTimeout( () => {
//     subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule( () => subs.unsubscribe(), 6000);