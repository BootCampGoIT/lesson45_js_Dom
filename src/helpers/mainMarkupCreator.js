import { refs } from "../refs/index.js";

export const addContent = (markup) => (refs.main.innerHTML = markup);
