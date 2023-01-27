const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Initialization", () => {

        it(' should get the school from the getSchool() method', () => {
            const intern = new Intern('Gerardo', 123456789, 'gerardo1234@gmail.com', "Rutgers");

            expect(intern.getSchool()).toBe("Rutgers");
        });

        it(' should get the Role from the getRole() method', () => {
            const intern = new Intern('Gerardo', 123456789, 'gerardo1234@gmail.com', "Rutgers");

            expect(intern.getRole()).toBe("Intern");
        });
    })
});