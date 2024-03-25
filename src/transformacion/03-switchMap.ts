import { fromEvent, pluck, switchMap } from "rxjs";

import { ajax } from "rxjs/ajax";

const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");

body.append(textInput, orderList);

//Streams
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

const url = "https://httpbin.org/delay/1?arg=";

//para este caso no se recomienda usar el mergeMap,
//porque este se suscribe a cuantos observables se emitan
//se resuelve mejor usando el switchMap
input$
  .pipe(
    pluck("target", "value"),
    switchMap((texto) => ajax.getJSON(url + texto))
  )
  .subscribe(console.log);
