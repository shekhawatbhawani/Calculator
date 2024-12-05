let buttons = document.querySelectorAll("button");
let input = document.querySelector("input");
let ans = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let character = button.innerText;

    const specialChars = ["+", "-", "*", "/","%","."];

    if (character === "AC") {
      ans = "";
    } else if (character === "=") {
      ans = eval(ans);
    } else if (character === "Del") {
      ans = ans.slice(0, -1);
    } else {

      let lastChar = ans[ans.length - 1];
      if (!(specialChars.includes(lastChar) && specialChars.includes(character))) {
        ans += character;
      }
    }


    if (ans === "") {
      input.value = "0";
    } else {
      input.value = ans;
    }
  });
});
