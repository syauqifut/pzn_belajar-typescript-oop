describe("Parameter properties", () => {
    class Person {
        constructor(public name: string){

        }
    }

    it("shoul support", () => {
        const person = new Person("Eki");
        console.info(person.name);

        person.name = "Budi";
        console.info(person.name);
    })
})