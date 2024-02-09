import { map, range, tap } from "rxjs";

const numero$ = range(1, 5);

numero$
  .pipe(
    tap((x) => console.log("tap", x)),
    map((val) => val * 10),
    tap({
      next: (valor) => console.log("tap2", valor),
      complete: () => console.log("Se terminó todo"),
    })
  )
  .subscribe((val) => console.log("subs", val));
