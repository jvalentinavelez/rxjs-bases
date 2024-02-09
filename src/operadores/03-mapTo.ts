import { fromEvent } from "rxjs";
import { mapTo } from "rxjs/operators";

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyUpMapTo$ = keyup$.pipe(mapTo("tecla presionada"));

keyUpMapTo$.subscribe((val) => console.log("mapTo", val));
