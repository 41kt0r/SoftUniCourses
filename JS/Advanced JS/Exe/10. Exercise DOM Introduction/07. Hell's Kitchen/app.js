function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const textArea = document.querySelector("#inputs textarea");
   const restaurantNameRef = document.querySelector("#bestRestaurant p")
   const workerLisrRef = document.querySelector("#workers p")

   function onClick () {
      let info = JSON.parse(textArea.value);
      let res = {};

      for(let restaurantInfo of info) {
         let [restaurantName, workersString] = restaurantInfo.split(" - ");
         let workers = workersString.split(", ")
         if(!res.hasOwnProperty(restaurantName)){
            res[restaurantName] = {
               avgSalary: calcAverageSalary(workers),
               bestSalary: calcBestSalary(workers),
               workers: workers
            }
         } else {
            res[restaurantName].workers = concatWorkers(res[restaurantName].workers, workers);
            res[restaurantName].avgSalary = calcAverageSalary(res[restaurantName].workers)
            res[restaurantName].bestSalary = calcBestSalary(res[restaurantName].workers)
         }
      }
      let sortRestaurant = Object.entries(res).sort((a,b) => b[1].avgSalary - a[1].avgSalary)
      let bestRest = sortRestaurant[0];

      let workerAsText = " ";
      bestRest[1].workers.sort(sortWorkers).forEach(e => {
         let [name, salary] = e.split(" ");
         workerAsText += `Name: ${name} With Salary: ${salary} `
         return;
      });

      restaurantNameRef.textContent = `Name: ${bestRest[0]} Average Salary: ${bestRest[1].avgSalary.toFixed(2)} Best Salary: ${bestRest[1].bestSalary.toFixed(2)}`;
      workerLisrRef.textContent = workerAsText;
   }

   function sortWorkers(workerA, workerB) {
      let[nameA, salaryA] = workerA.split(" ");
      let [nameB, salaryB] = workerB.split(" ");
      salaryA = Number(salaryA);
      salaryB = Number(salaryB);
      return salaryB - salaryA;

   }

   function concatWorkers (oldWorkers, newWorkers){
      return oldWorkers.concat(newWorkers);
   }

   function calcBestSalary(workers) {
      let bestSalary = 0;
      workers.forEach(worker => {
         let [name, salary] = worker.split(" ");
         salary = Number(salary);
         if(salary > bestSalary){
            bestSalary = salary;
            return
         }
      })
      return bestSalary;
   }

   function calcAverageSalary (workers) {
      let sum = 0;
      workers.forEach(worker => {
         let[name, salary] = worker.split(" ");
         return sum += Number(salary)
      });
      return sum / workers.length;
   }
}