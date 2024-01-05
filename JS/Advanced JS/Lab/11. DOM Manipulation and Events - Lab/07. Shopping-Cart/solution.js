function solve() {
   const addProductButtonsElement = document.querySelectorAll(".add-product"); 
   const checkoutButtonElement = document.querySelector(".checkout");
   const textareaElement = document.querySelector("textarea");
   
   let products = [];
   let totalPrice = 0;

   for(const btn of addProductButtonsElement) {
      btn.addEventListener("click", addProductInCart)
   }

   checkoutButtonElement.addEventListener("click", checkout);

   function addProductInCart (e) {
      const productElement = e.target.parentNode.parentNode;
      const productTitle = productElement.querySelector('.product-title');
      const productPrice = productElement.querySelector(".product-line-price");

      printMessage(productTitle, productPrice);

      if(!products.includes(productTitle.textContent)) {
         products.push(productTitle.textContent);
      }
      
      totalPrice += Number(productPrice.textContent);
   }

   function printMessage(productTitle, productPrice) {
      textareaElement.textContent += `Added ${productTitle.textContent} for ${productPrice.textContent} to the cart.\n`
   }


   function checkout(e) {
      textareaElement.textContent += `You bought ${products.join(", ")} for ${totalPrice.toFixed(2)}.`;
   }
}