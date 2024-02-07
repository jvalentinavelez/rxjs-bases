import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('complete'),
}

const hoyEn5 = new Date(); //ahora
//le sumo 5 seg a la variable hoyEn5
hoyEn5.setSeconds( hoyEn5.getSeconds() +5);

const interval$ = interval(1000);
const timer$ = timer(hoyEn5);

//Crea un interval que inicia en 2 segundos
//y emite un valor cada 1seg 
//const timer$ = timer(2000, 1000);

console.log('Inicio');
//interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('Fin');