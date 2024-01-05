function solve(input) {
    let students = {};
  
    for (let element of input) {
      let [name, ...grades] = element.split(' ');
      grades = grades.map(Number);
  
      if (students.hasOwnProperty(name)) {
        students[name].push(...grades);
      } else {
        students[name] = grades;
      }
    }
  
    let sortedNames = Object.keys(students).sort();
  
    for (let name of sortedNames) {
      let grades = students[name];
      let average = grades.reduce((a, b) => a + b, 0) / grades.length;
      console.log(`${name}: ${average.toFixed(2)}`);
    }
}
solve(['Lilly 4 6 6 5',
'Lilly 5 6',
'Tammy 2 4 3',
'Tim 6 6']);
console.log("--------");
solve(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']);