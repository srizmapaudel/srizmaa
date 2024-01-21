function turnOnLight(switchNumber){
switch(switchNumber){
    case 1:
       alert('Illuminate bulb 1');
    case 2:
        alert('Illauminate bulb 2');
     case 3:
        alert('Illuminate bulb 3');
    case 4:
        alert('Illuminate bulb 4');
    case 5:
        alert('Illuminate bulb 5');
    case 6:
        alert('Illuminate bulb 6');
        case "ON";
        alert('Pressed switch named ON')
        break;
        default:
            alert("bulb not found!")
}
}
turnOnLight(1)
turnOnLight("ON")
function getDayOfWeek(day){

}



function getDayOfWeek(day){
switch(day){
       case 1:
        return "Sunday";
        case 2:
        return "Monday";
        case 3:
        return"Tuesday";
        case 4:
        return "Wednesday";
        case 5:
        return "Thursday";
        case 6:
        return "Friday";
        case 7:
        return "Saturday" ;

}
}
let today=new Date().getDay();
console.log("here");
document.getElementById('day').innerText=getDayOfWeek(today);