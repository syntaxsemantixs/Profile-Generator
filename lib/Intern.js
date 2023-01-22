const Intern = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email, school)
        this.school = school
    }

    getSchool() {
        return this.school
    }

    getIntern() {
        return "Intern"
    }
}

module.exports=Intern