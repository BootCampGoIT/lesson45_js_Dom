import { addContent } from "../helpers/mainMarkupCreator.js";
import { contactsFunc, contactsPageMarkup } from "../pages/contactsPage.js";
import { homePageMarkup } from "../pages/homePage.js";
import { productPageMarkup } from "../pages/productsPage.js";
import { refs } from "../refs/index.js";

const contentSwitcher = (e) => {
  const item = e.target.dataset.page;
  switch (item) {
    case "home":
      addContent(homePageMarkup);
      break;
    case "products":
      addContent(productPageMarkup);
      break;
    case "contacts":
      addContent(contactsPageMarkup);
      contactsFunc();
      break;
    default:
      addContent(homePageMarkup);
      break;
  }
};

export const createHeaderMarkup = (list) => {
  const nav = document.createElement("nav");
  const navList = document.createElement("ul");

  list.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.dataset.page = item;
    listItem.textContent = item.toUpperCase();
    navList.appendChild(listItem);
    listItem.addEventListener("click", contentSwitcher);
  });

  nav.appendChild(navList);
  refs.header.appendChild(nav);
};
