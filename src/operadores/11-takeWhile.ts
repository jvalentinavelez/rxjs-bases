import { fromEvent, map, takeWhile } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, "click");

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    // takeWhile(({ y }) => y <= 150)
    // se le manda el parámetro inclusive para que indique el valor que rompió la condición
    takeWhile(({ y }) => y <= 150, true)
  )
  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("completado"),
  });
