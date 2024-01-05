function rectangle(width, height, color) {
    return {
      width: width,
      height: height,
      color: color.charAt(0).toUpperCase() + color.slice(1),
      calcArea: function() {
        return this.width * this.height;
      }
    };
  }
  
  // Example usage:
  let rect = rectangle(4, 5, 'red');
  
  console.log(rect.width);    // 4
  console.log(rect.height);   // 5
  console.log(rect.color);    // Red
  console.log(rect.calcArea()); // 20
  