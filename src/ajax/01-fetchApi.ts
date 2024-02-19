//fetchApi

const url = "https://api.github.com/usersxxx?per_page=5";

const handleErrors = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const fetchPromise = fetch(url);

fetchPromise
  .then(handleErrors)
  .then((resp) => resp.json())
  .then((data) => console.log("data", data))
  .catch((err) => console.warn("error en usuarios", err));
