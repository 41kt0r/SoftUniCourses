class Company {
    departmentsData = {}

    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !position || !department || !salary || salary < 0) {
            throw new Error("Invalid input!")
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
            this.departmentsData[department] = {
                sumSalary: 0,
                avgSalary: 0
            };
        }
        let employee = {name, salary, position}
        this.departments[department].push(employee);
        this.departmentsData[department].sumSalary += salary;
        this.departmentsData[department].avgSalary =
            this.departmentsData[department].sumSalary / this.departments[department].length
        return `New employee is hired. Name: ${employee.name}. Position: ${employee.position}`
    }

    bestDepartment() {
        let [bestDepartmentName, salaryData] = Object.entries(this.departmentsData).sort((a, b) => b[1].avgSalary - a[1].avgSalary)[0];

        let buff = `Best Department is: ${bestDepartmentName}\n`
        buff += `Average salary: ${salaryData.avgSalary.toFixed(2)}\n`

        this.departments[bestDepartmentName].sort((objA, objB) => {
            return objB.salary - objA.salary || objA.name.localeCompare(objB.name)
        }).forEach(obj => {
            return buff += `${obj.name} ${obj.salary} ${obj.position}\n`
        });

        return buff.trim();
    }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());