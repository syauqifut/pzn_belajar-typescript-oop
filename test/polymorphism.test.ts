describe("Polymorphism", () => {
    class Employee {
        constructor(public name:string){}
    }

    class Manager extends Employee {

    }

    class VicePresident extends Manager {

    }

    function sayHello(employee: Employee): void {
        if (employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.info(`Hello VP ${vp.name}`);
        } else if (employee instanceof Manager) {
            const manager = employee as Manager;
            console.info(`Hello manager ${manager.name}`);
        } else {
            console.info(`Hello employee ${employee.name}`);
        }
    }

    function sayHelloWrong(employee: Employee): void {
        if (employee instanceof Manager) {
            const manager = employee as Manager;
            console.info(`Hello manager ${manager.name}`);
        } else if (employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.info(`Hello VP ${vp.name}`);
        } else {
            console.info(`Hello employee ${employee.name}`);
        }
    }

    it('should support', () => {
        let employee: Employee = new Employee("Joko");
        console.info(employee);

        employee = new Manager("Budi");
        console.info(employee);

        employee = new VicePresident("Mulyono");
        console.info(employee);
    })

    it('should support method parameter polymorphism', () => {
        sayHello(new Employee('Joko'));
        sayHello(new Manager('Budi'));
        sayHello(new VicePresident('Mulyono'));
    })

    it('should support method parameter polymorphism wrong', () => {
        sayHelloWrong(new Employee("Eko"));
        sayHelloWrong(new Manager("Budi"));
        sayHelloWrong(new VicePresident("Joko"));
    });
})