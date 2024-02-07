import { of,from } from "rxjs";

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('complete')
}

//const source$ = from([1,2,3,4,5]);
//const source$ = of([1,2,3,4,5]);
//const source$ = of(...[1,2,3,4,5]);

//funcion generadora *
//es un iterable, permitiendo obtener los valores de manera secuencial
const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3
}


const miIterable = miGenerador();

// for ( let id of miIterable){
//     console.log(id);
// }
from(miIterable).subscribe(observer);

///---------------------------------------

const source$ = from( fetch('https://api.github.com/users/klerith'));

// source$.subscribe(observer);
source$.subscribe( async (resp) => {
    console.log( resp);

    const dataResp = await resp.json();
    console.log(dataResp);
});