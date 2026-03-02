const getDay = (p) => {
switch(p){
    case 1:
        return "Monday";
    case 2:
        return "Tuesday";
    case 3:
        return "Wednesday";
    case 4:
        return "Thursday";
    case 5:
        return "Friday";
    case 6:
        return "Saturday";
    case 7:
        return "Sunday";
    default:
        return "Invalid day number";
}

}


const day = getDay(1);
console.log(day);

//print numbers from 1 to 10 using while loop

const printNumbers = () => {
    let i = 1;
    while(i <= 10){
        console.log(i);
        i++;
    }
}

printNumbers();

// print number from 10 to 1 using do while loop
i=10

do{
    console.log(i);
    i--;
}while(i >= 1)