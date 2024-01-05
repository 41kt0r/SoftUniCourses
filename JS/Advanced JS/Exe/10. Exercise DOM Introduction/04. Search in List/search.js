function search() {
   let searchText = document.getElementById("searchText").value;
   let items = Array.from(document.querySelectorAll("#towns li"));
   let counter = 0;

   items.forEach(item => {
      if (item.textContent.includes(searchText)) {
         item.style.fontWeight = "bold";
         item.style.textDecoration = "underline";
         return counter++;
      }
      item.style.fontWeight = "";
      item.style.textDecoration = "none";
   });
   document.getElementById("result").textContent = `${counter} matches found`;
}
