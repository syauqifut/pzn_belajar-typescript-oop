describe("Inheritance", () => {
    // parent class
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Manager extends Employee {

    }

    class Director extends Manager {

    }

    it("should support", () => {
        const employee: Employee = new Employee("Bodhi");
        console.info(employee);

        const manager: Manager = new Manager("Yanti");
        console.info(manager);

        const director: Director = new Director("John");
        console.info(director);
    });
});