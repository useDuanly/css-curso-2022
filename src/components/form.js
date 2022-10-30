export default function Form(classForm) {
  const $form = document.querySelector(classForm);

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
  });
}
