const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it(' should get the github username from the getGitHub() method', () => {
            const engineer = new Engineer('Gerardo', 123456789, 'gerardo1234@gmail.com', "Engineer");

            expect(engineer.getSchool()).toBe("Rutgers");
        });

        it(' should get the Role from the getRole() method', () => {
            const engineer = new Engineer('Gerardo', 123456789, 'gerardo1234@gmail.com', "Engineer");

            expect(engineer.getEmail()).toBe("Engineer");
        });
    })
});