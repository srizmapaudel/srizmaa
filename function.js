//FUNCTION
function printgetName(name){
    console.log(name);


}
printName("Shyam");
//anonymous function syntaz=:()=>{}
const printName1=(studentName)=>{
    console.log(studentName);


}
printName1("Shyam Thapa");


function addNums(num1,num2){
    let sum=num1+num2;
    console.log("sum:",sum);

}
addNums(10,20)
addNums(30,40)
const addNums2=(num1,num2,retryTimes) =>{
    let sum=num1+num2;
    if(retryTimes!==1){
    console.log("sum:",sum);//1,2
    console.log("retrtTimes",retryTimes)
    
    addNums2(num1,num2,retryTimes-1);
}
}
addNums2(20,20,3)