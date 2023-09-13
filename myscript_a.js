document.writeln("<h1> task4_1(a) </h1>");

document.writeln("<h3> array definition: </h3>");
var array = new Array(10);
var sum = 0;
for(var index = 0 ; index < array.length ; index++){
    array[index] = Math.floor(Math.random() * 100);
    console.log(array[index]);
    document.writeln(array[index]);
}

document.writeln("<h3> sum even nember: </h3>");
var sum = 0;
for(var index = 0 ; index < array.length ; index++){
    if (array[index] % 2 == 0)
    sum +=array[index];
}
console.log(sum);
document.writeln(sum);

document.writeln("<h3> sum number whose index is less than 5: </h3>");
var sum2 = 0;
for(var index = 0 ; index < array.length ; index++){
    if ( index < 5 )
    sum2 +=array[index];
}
console.log(sum2);
document.writeln(sum2);


