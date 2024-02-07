import { asyncScheduler, of, range } from "rxjs";

const src1$ = of(1,2,3,4,5);
const src2$ = range(1,5, asyncScheduler);

console.log('inicio');
// src1$.subscribe( console.log );
src2$.subscribe( console.log );
console.log('fin');