import { first, fromEvent, map, take, tap } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, "click");

click$
  .pipe(
    //take(1)
    //first()
    //obtener el primer evento cuyo clientY sea mayor a 50

    //tap((x) => console.log("tap", x.clientY)),
    // map((event) => ({
    //   clientY: event.clientY,
    //   clientX: event.clientX,
    // })),
    map(({ clientX, clientY }) => ({
      clientY,
      clientX,
    })),
    tap(console.log),
    first((event) => event.clientY >= 50)
  )
  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("complete"),
  });
