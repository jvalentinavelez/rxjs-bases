import {
  Observable,
  debounceTime,
  fromEvent,
  map,
  mergeAll,
  mergeMap,
  pluck,
} from "rxjs";

import { ajax } from "rxjs/ajax";
import { GithubUserResp } from "../interfaces/github-user.interface";

const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");

body.append(textInput, orderList);

//Helpers
const showUser = (usuario: GithubUserResp) => {
  orderList.innerHTML = "";
  console.log(usuario);

  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = usuario.avatar_url;
  const anchor = document.createElement("a");
  anchor.href = usuario.html_url;
  anchor.text = "Ver página";
  anchor.target = "_blank";
  li.append(img);
  li.append(usuario.login);
  li.append(anchor);
  orderList.append(li);
};

//Streams
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

// input$
//   .pipe(
//     debounceTime(500),
//     map((event) => {
//       const texto = event.target["value"];
//       return ajax.getJSON(`https://api.github.com/search/users?q=/${texto}`);
//     })
//   )
//   .subscribe((resp) => {
//     resp.pipe().subscribe(console.log);
//   });

input$.pipe(
  debounceTime<KeyboardEvent>(500),
  map<KeyboardEvent, string>((evento) => evento.target["value"]),
  mergeMap<string, Observable<GithubUserResp>>((texto) =>
    ajax.getJSON(`https://api.github.com/users/${texto}`)
  )
);
//   .subscribe(showUser);

const url = "https://httpbin.org/delay/1?arg=";

//para este caso no se recomienda usar el mergeMap,
//porque este se suscribe a cuantos observables se emitan
//se resuelve mejor usando el switchMap
input$
  .pipe(
    pluck("target", "value"),
    mergeMap((texto) => ajax.getJSON(url + texto))
  )
  .subscribe(console.log);
