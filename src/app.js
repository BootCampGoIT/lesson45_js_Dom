import { data } from "./data/data.js";
import { createHeaderMarkup } from "./header/header.js";
import createProductsMarkup from "./main/main.js";

createHeaderMarkup(data.header.headerList);
createProductsMarkup(data.main.products);
const testList = document.querySelector(".testList");

const fragment = document.createDocumentFragment();

data.main.products.forEach((product) => {
  const li = document.createElement("li");
  li.textContent = product.name;
  fragment.appendChild(li);
});

testList.appendChild(fragment);
