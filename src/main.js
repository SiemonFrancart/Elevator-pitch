import "./style.css";
import heroImg from "./assets/hero.png";
import javascriptLogo from "./assets/javascript.svg";
import viteLogo from "./assets/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `

<div>
<header>
<div class='text'>
<h1> Why chose vite? </h1>
<ul>
<li>pre bundle dependencies. Improves loading speed vite is faster than any javascript bundler.</li>
<li>All modern framework maintain intergrations with vite.</li>
<li>Vite is great when paired with backend frameworks.</li>
<li>Vite has been focused on performance since its origin.</li>
</ul>
</div>
</header>
`;

setupCounter(document.querySelector("#counter"));
