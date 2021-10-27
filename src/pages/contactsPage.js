export const contactsPageMarkup = `
<form name="contactForm">
<label> Name 
    <input type="text" name="name"/> 
</label>
<label> Phone <input type="text" name="phone"/> </label>
<button type="submit">Add contact</button>
</form>`;

export const contactsFunc = () => {
  const refs = {
    contactForm: document.forms.contactForm,
    name: document.forms.contactForm.name,
    phone: document.forms.contactForm.phone,
  };
  const contacts = [];

  let contact = {
    name: "",
    phone: "",
  };

  const setContact = (e) => {
    contact[e.target.name] = e.target.value;
    console.log(contact);
  };
  const addContact = (e) => {
    e.preventDefault();
    contacts.push(contact);
    contact = {
      name: "",
      phone: "",
    };
    refs.contactForm.reset();
    console.log("contacts :>> ", contacts);
  };

  refs.name.addEventListener("input", setContact);
  refs.phone.addEventListener("input", setContact);
  refs.contactForm.addEventListener("submit", addContact);
};
