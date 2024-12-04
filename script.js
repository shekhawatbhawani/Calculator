let buttons = document.querySelectorAll("button");
let input = document.querySelector("input");
let ans = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let character = button.innerText;

    if (character === "AC") {
      ans = "";
    } else if (character === "=") {
      ans = eval(ans);
    } else if (character === "Del") {
      ans = ans.slice(0, -1);
    } else {
      ans += character;
    }

    if (ans === "") {
      input.value = "0";
    } else {
      input.value = ans;
    }
  });
});
