import { refs } from "../refs/index.js";

export const createHeaderMarkup = (list) => {
  const nav = document.createElement("nav");
  const navList = document.createElement("ul");

  list.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    navList.appendChild(listItem);
  });

  nav.appendChild(navList);
  refs.header.appendChild(nav);
};
