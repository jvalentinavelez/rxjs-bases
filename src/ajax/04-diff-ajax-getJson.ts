import { catchError, of } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";

const url = "https://httpbin.ord/delay/1";

const handleError = (resp: AjaxError) => {
  console.warn("error", resp.message);
  return of([]);
};

// const obs$ = ajax.getJSON(url).pipe(catchError(handleError));
// const obs2$ = ajax(url).pipe(catchError(handleError));

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

obs$.pipe(catchError(handleError)).subscribe({
  next: (val) => console.log("next", val),
  error: (err) => console.warn("error en subs: ", err),
  complete: () => console.log("complete"),
});
// obs2$.subscribe((data) => console.log("ajax", data));
