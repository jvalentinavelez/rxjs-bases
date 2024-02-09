//reduce in javascript

import { interval, reduce, take, tap } from "rxjs";

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => {
  return acumulador + valorActual;
};

const total = numbers.reduce(totalReducer);

console.log("total arr", total);

//reduce in rxjs

interval(1000)
  .pipe(take(3), tap(console.log), reduce(totalReducer, 5))
  .subscribe({
    next: (val) => console.log("next: ", val),
    complete: () => console.log("complete"),
  });
