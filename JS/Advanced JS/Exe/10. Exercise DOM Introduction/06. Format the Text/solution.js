function solve() {
  let input = document.getElementById("input").value;
  let output = document.getElementById("output");
  let splitedInput = input.split(".").filter((p) => p.length > 0);
  
  for(let i = 0; i < splitedInput.length; i+=3){
    let arr = [];
    for(let y = 0; y < 3; y++){
      if(splitedInput[i + y]){
        arr.push(splitedInput[i + y]);
      }
    }
    let paragraph = arr.join('. ') + '.';
    output.innerHTML += `<p>${paragraph}</p>`;
  }
}