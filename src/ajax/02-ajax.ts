//fetchApi
import { catchError, map, of } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";

const url = "https://api.github.com/users?per_page=5";

const handleErrors = (err: AjaxError) => {
  console.warn("error en:", err.message);
  return of([]);
};

ajax(url)
  .pipe(
    map((resp) => resp.response),
    catchError(handleErrors)
  )
  .subscribe((users) => console.log("usuarios", users));
