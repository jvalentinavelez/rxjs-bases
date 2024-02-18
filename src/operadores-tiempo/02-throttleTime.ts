import {
  asyncScheduler,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  pluck,
  throttleTime,
} from "rxjs";

// Ejemplo 1

const click$ = fromEvent<PointerEvent>(document, "click");

click$.pipe(throttleTime(3000)).subscribe({
  next: (value) => console.log("next", value),
  complete: () => console.log("complete"),
});

// Ejemplo 2

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup");

input$
  .pipe(
    throttleTime(3000, asyncScheduler, {
      leading: true,
      trailing: true,
    }),
    pluck("target", "value"),
    distinctUntilChanged()
  )
  .subscribe({
    next: (inputVal) => console.log("next", inputVal),
    complete: () => console.log("complete"),
  });
