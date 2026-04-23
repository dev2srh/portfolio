document.addEventListener("DOMContentLoaded", () => {
  let form = document.forms[0];
  form &&
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(`Hey ${form[0].value}, We received your message.`);
      form.reset();
    });
});
