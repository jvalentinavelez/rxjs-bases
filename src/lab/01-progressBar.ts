import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement("div");
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate et nunc sit amet consectetur. Pellentesque eget vestibulum leo. Aliquam venenatis justo vitae placerat pretium. Duis lacus lacus, varius ut felis in, posuere imperdiet metus. Fusce in suscipit magna. Sed nec finibus purus. Nunc id dolor quis leo venenatis dignissim. Ut a tortor ipsum. Nam rhoncus non sem nec malesuada. Nunc a turpis dictum, tristique urna a, placerat mi. Curabitur cursus ante ullamcorper est tempus mattis. Nulla mollis mi vel nisi vehicula, eget tempus libero euismod. Vestibulum felis ipsum, tempor ut enim ut, feugiat venenatis purus. Morbi ac eros in risus venenatis iaculis quis ac neque.
<br/><br/>
Proin mollis diam et nisi vehicula, eu ultricies sapien iaculis. Donec sed consectetur massa. Sed vitae vulputate nisl, ac tempus arcu. Mauris pretium efficitur gravida. Aenean at pellentesque enim. Nulla fermentum fringilla eleifend. Nullam venenatis finibus est, non efficitur lacus porta et. In ultricies mollis eros. Nam laoreet tincidunt est sed viverra. Donec blandit eros quis tellus condimentum iaculis. Nunc et consequat sapien, quis ornare nibh. Vestibulum convallis metus sed laoreet dictum. Nunc sagittis euismod porttitor.
<br/><br/>
Nulla feugiat, nibh nec rhoncus scelerisque, magna turpis fermentum libero, vitae eleifend nulla nisl non dui. Morbi dapibus mauris eu nisl bibendum, et venenatis est faucibus. Vestibulum euismod eget augue ac tristique. Vivamus placerat viverra urna ut lacinia. Vivamus ornare viverra dolor ac semper. Praesent vitae tempus nibh. Praesent iaculis euismod arcu, vitae cursus justo fringilla vel. Pellentesque a rhoncus arcu, eget maximus quam. Suspendisse fringilla consequat dolor, at interdum turpis vulputate nec. Mauris quis consequat sem.
<br/><br/>
Phasellus quis lacus odio. Duis fermentum efficitur ultrices. Nunc vel tellus nibh. Nulla ut aliquam metus. Nullam non pharetra odio, ut placerat felis. Nunc dapibus metus eget molestie porta. Integer lectus mi, semper dignissim feugiat vulputate, molestie ultricies lacus. Vestibulum condimentum justo eget velit eleifend, et posuere nisi porta. Phasellus nunc nunc, tempor at ligula non, hendrerit tincidunt diam. Proin sed magna consequat, feugiat sem vel, hendrerit libero. Suspendisse tortor ante, tempus nec tristique eu, facilisis suscipit nisi. Proin sed est dolor. Aenean sit amet purus vel mauris pulvinar dictum. Nulla facilisi. Nunc varius pulvinar odio, non pellentesque erat.
<br/><br/>
Aliquam dolor enim, dignissim sit amet neque eget, ornare ultrices nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer in mauris nunc. Cras fermentum tempor blandit. Cras finibus sem vel sem iaculis lacinia. Pellentesque ornare tincidunt tincidunt. In malesuada nisi eu mi euismod, id venenatis dolor malesuada. Nam maximus, turpis eu vehicula sagittis, enim velit semper ipsum, rutrum malesuada ipsum ex in nisl. Fusce ut suscipit sapien. Mauris at ornare mauris, vel ornare velit. Aliquam sem nisi, facilisis vitae viverra ac, dignissim nec nunc. Etiam tortor mi, hendrerit vel commodo vel, accumsan vel ante. Sed eget aliquet libero. Duis eu risus tristique, ullamcorper purus in, accumsan eros.
`;

const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");

body.append(progressBar);

// función que realice el cálculo del porcentaje del width del progress bar

const calcularPorcentajeScroll = (event) => {
  const { scrollHeight, scrollTop, clientHeight } =
    event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

const scroll$ = fromEvent(document, "scroll");

const progress$ = scroll$.pipe(
  map((event) => calcularPorcentajeScroll(event)),
  tap(console.log)
);

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
