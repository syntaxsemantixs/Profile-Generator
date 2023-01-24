const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it(' should get the office number from the getOfficeNumber() method', () => {
            const manager = new Manager('Gerardo', 123456789, 'gerardo1234@gmail.com', 123);

            expect(manager.getOfficeNumber()).toBe(123);
        });

        it(' should get the Role from the getRole() method', () => {
            const manager = new Manager('Gerardo', 123456789, 'gerardo1234@gmail.com', 123);

            expect(manager.getEmail()).toBe("Manager");
        });
    })
});
