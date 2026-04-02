const aInput = document.getElementById("a");
const bInput = document.getElementById("b");
const result = document.getElementById("result");

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    const a = Number(aInput.value);
    const b = Number(bInput.value);
    const op = btn.dataset.op;

    try {
      let res;
      if (op === "+") res = add(a, b);
      if (op === "-") res = subtract(a, b);
      if (op === "*") res = multiply(a, b);
      if (op === "/") res = divide(a, b);
      result.textContent = "Résultat : " + res;
    } catch (e) {
      result.textContent = e.message;
    }
  });
});
