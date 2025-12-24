let inputs = document.querySelectorAll("input");
// console.log(inputs);

inputs.forEach((input) => {
  input.addEventListener("keydown", (e) => {
    if (input.value !== "") {
      let label = e.target.parentElement.children[0];
      label.style.transform = "translateY(-0.5rem)";
      label.style.fontSize = ".7rem";
    }
  });
});
