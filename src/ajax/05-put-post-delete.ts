import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

// ajax
//   .put(
//     url,
//     {
//       id: 1,
//       nombre: "Fernando",
//     },
//     {
//       "mi-token": "ABC123",
//     }
//   )
//   .subscribe(console.log);

ajax({
  url,
  method: "GET",
  headers: {
    "mi-toke": "ABC123",
  },
  body: {
    id: 1,
    nombre: "Fernando",
  },
}).subscribe(console.log);
