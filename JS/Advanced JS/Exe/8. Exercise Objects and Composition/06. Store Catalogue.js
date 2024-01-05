function sortedCatalog(input) {
    let products = {};
  
    for (let line of input) {
      let [name, price] = line.split(" : ");
      price = Number(price);
  
      // Get the first character of the product name in uppercase
      let initial = name[0].toUpperCase();
  
      if (!products[initial]) {
        products[initial] = [];
      }
  
      products[initial].push({ name, price });
    }
  
    // Sort the products alphabetically by name
    let sortedInitials = Object.keys(products).sort();
    
    for (let initial of sortedInitials) {
      console.log(initial);
  
      // Sort the products within each initial group by name
      products[initial].sort((a, b) => a.name.localeCompare(b.name))
        .forEach(product => console.log(`  ${product.name}: ${product.price}`));
    }
  }
  
  // Example usage:
  const input = [
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
  ];
  
  sortedCatalog(input);
  