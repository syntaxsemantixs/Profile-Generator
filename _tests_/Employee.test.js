const Employee = require('../lib/Employee');


describe("new Employee", () => {
    describe("Initialization", () => {
        it(' should show the contstructor values for the employee object', () => {
            const employee = new Employee('Gerardo', 123456789, 'gerardo1234@gmail.com');

            expect(employee.name).toBe("Gerardo");
            expect(employee.id).toBe(123456789);
            expect(employee.email).toBe("gerardo1234@gmail.com");
        });

        it(' should get the name from the getName() method', () => {
            const employee = new Employee('Gerardo', 123456789, 'gerardo1234@gmail.com');

            expect(employee.getName()).toBe("Gerardo");
        });

        it(' should get the id from the getId() method', () => {
            const employee = new Employee('Gerardo', 123456789, 'gerardo1234@gmail.com');

            expect(employee.getId()).toBe(123456789);
        });

        it(' should get the email from the getEmail() method', () => {
            const employee = new Employee('Gerardo', 123456789, 'gerardo1234@gmail.com');

            expect(employee.getEmail()).toBe("gerardo1234@gmail.com");
        });

        it(' should get the Role from the getRole() method', () => {
            const employee = new Employee('Gerardo', 123456789, 'gerardo1234@gmail.com');

            expect(employee.getRole()).toBe("Employee");
        });
    })
});
