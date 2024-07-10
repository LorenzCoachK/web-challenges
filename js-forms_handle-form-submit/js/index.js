console.clear();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('[data-js="form"]');
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
    event.target.reset();
    event.target.elements.firstName.focus();
    const age = +data.age;
    const badness = +data.badness;
    const ageBadnessSum = age + badness;

    console.log(`The age-badness-sum of ${data.firstName} is ${ageBadnessSum}`);
  });
});
