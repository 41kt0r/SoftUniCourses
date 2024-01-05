function hydrateWorker(worker) {
    if (worker.dizziness) {
      // Проверяваме дали worker.dizziness е true (истина).
      // Ако е true, това означава, че работника е в бавност и има нужда от вода.
  
      const requiredWater = 0.1 * worker.weight * worker.experience;
      // Изчисляваме необходимото количество вода за възстановяване на работника.
      // Формулата е 0.1 * (теглото на работника) * (годините на опит на работника).
  
      worker.levelOfHydrated += requiredWater;
      // Добавяме изчисленото количество вода към текущото ниво на хидратация на работника.
  
      worker.dizziness = false;
      // Задаваме свойството dizziness на работника на false, тъй като след приемане на вода
      // той не е повече в бавност и не е в нужда от вода.
    }
  
    return worker;
    // Връщаме модифицирания работник обратно като резултат от функцията.
  }
  
  // Примери за използване:
  const worker1 = {
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true,
  };
  
  const worker2 = {
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true,
  };
  
  const worker3 = {
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false,
  };
  
  const updatedWorker1 = hydrateWorker(worker1);
  const updatedWorker2 = hydrateWorker(worker2);
  const updatedWorker3 = hydrateWorker(worker3);
  
  console.log(updatedWorker1);
  console.log(updatedWorker2);
  console.log(updatedWorker3);
  // Отпечатваме модифицираните работници след приемане на вода.
  