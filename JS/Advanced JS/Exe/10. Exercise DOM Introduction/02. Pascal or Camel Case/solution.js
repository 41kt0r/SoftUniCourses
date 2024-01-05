function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;

  let res = "";
  switch (convention) {
    case "Camel Case":
      //"this is an example" ->  thisIsAnExample
      let textArr = text.toLowerCase().split(" ");
      res += textArr.shift();
      textArr.forEach(element => {
        res += element[0].toUpperCase() + element.substring(1);
      });
      
      break;
    case "Pascal Case":
      //"this is an example" ->  ThisIsAnExample
      text.toLowerCase()
      .split(" ")
      .forEach(element => res += element[0].toUpperCase() + element.substring(1));
      break;
    default:
      res = "Error!"
      break;
  }

  document.getElementById("result").textContent = res;
}