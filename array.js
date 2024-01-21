let lunch=['Rice','Dal','Achar','Masu','Paneer']
lunch.push("Papad");
lunch[1]="Water"
lunch.forEach(item=>{
    console.log(item.toUpperCase())
})
lunch.splice(1,1);
console.log(lunch)


let students=[
    {
        name:"Sudhir",
        roll:200,
        age:50,
        subjects:['maths','science','social'],
        isMale:true,
        nationality:"Chinese",
        grades:{
            maths:"B",
            science:"B-",
            accounts:"B+"
        },
        attendance:80,
    },
    {
        name:"Sudhir",
        roll:201,
        age:51,
        subjects:['maths','science','social'],
        isMale:true, 
        nationality:"Chinese",
        grades:{
            maths:"B",
            science:"B-",
            accounts:"B+"
        },
        attendance:25,
    }
]
// students.forEach((student)=>{
//     student.subjects.push("React")
//     if(student.attendance<50){
//         alert(`${item.name}'s attendance is less than 50`)
//     }
//     else if(student.attendance>75){
//         alert(`${student.name}'s attendance is above 75%!!`)
//     }
// })
console.log(students);
