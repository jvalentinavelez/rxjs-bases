import { fromEvent, map, sampleTime } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, "click");

click$
  .pipe(
    sampleTime(3000),
    map(({ x, y }) => ({ x, y }))
  )
  .subscribe(console.log);
