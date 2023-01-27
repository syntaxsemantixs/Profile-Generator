const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it(' should get the github username from the getGitHub() method', () => {
            const engineer = new Engineer('Gerardo', 123456789, 'gerardo1234@gmail.com', "syntaxsemantixs");

            expect(engineer.getGithub()).toBe("syntaxsemantixs");
        });

        it(' should get the Role from the getRole() method', () => {
            const engineer = new Engineer('Gerardo', 123456789, 'gerardo1234@gmail.com', "Engineer");

            expect(engineer.getRole()).toBe("Engineer");
        });
    })
});