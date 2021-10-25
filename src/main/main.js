import { refs } from "../refs/index.js";

const createProductsMarkup = (products) => {
  const productsList = document.createElement("ul");
  products.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.classList.add("listItem");
    const name = document.createElement("p");
    name.textContent = product.name;
    const price = document.createElement("p");
    price.style.fontWeight = "700";
    price.textContent = product.price;
    listItem.append(name, price);
    productsList.append(listItem);
  });
  refs.main.append(productsList);
};

export default createProductsMarkup;
