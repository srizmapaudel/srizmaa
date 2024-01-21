let student={
    fullname:Scarlet Johansan,
    age:20,
    subjects:['maths','science','english'],
    Student.elem.updateGrades = function(subject, grade) {
        student.grades[subject] = grade;
    };

    Student.prototype.displayAlerts = function() {
        for (let property in this) {
            if (this.hasOwnProperty(property)) {
                const value = this[property];
    
                if (typeof value === 'number') {
                    alert(`Student's ${property} is ${value}.`);
                } else if (typeof value === 'object') {
                    for (let subject in value) {
                        alert(`Student's grades in ${subject} is ${value[subject]}.`);
                    }
                } else {
                    alert(`Student's ${property} is ${value}.`);
                }
            }
        }
    };


}