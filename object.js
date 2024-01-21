let student={
    name:"Mike",
    roll:200,
    age:19,
    subjects:['maths','science','social'],
    isMale:true,
    nationality:"Nepali",
    grades:{
        maths:"A",
        science:"B",
        accounts:"B+"
    },
    getFavoriteColor:()=>{
        return 'red';
    }
}
console.log(student.getFavoriteColor());
function changeSubjectGrade(subject,grade){
    student.grades[subject]=grade;
}
changeSubjectGrade('maths','D-')
console.log("age",student.age)
console.log(student.name);
console.log(student['name']);
console.log(student.nationality);

//displaying value in html
let elem=document.getElementById('studentName');
elem.innerText=student.name;

let rollElem=getElement('studentRoll');
changeTextByDocument(rollElem,student.roll)

let nationalityelem=getElement('studentNationality');
changeTextByDocument(nationalityelem,student.nationality)

function getElement(id){
    return document.getElementById(id)
}

function changeTextByDocument(item,text){
    item.innerText=`tulsi ${text}`;
}

console.log(Object.keys(student));
console.log(Object.values(student));

student.name="Ram";
student.roll=30;
let valuesArray=Object.entries(student);
valuesArray.forEach((item)=>{
    console.log(`${item[0]};${item[1]}`);
})



