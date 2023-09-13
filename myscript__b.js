document.writeln("<h1> task4_1(b) </h1>");

document.writeln("<h3> Full Object: </h3>");
var obj = {
    Name :"Sara" ,
    phone : '0937206894',
    age : 24 ,
    gmail : 'sarameree52@gmail.com'
};
console.log(obj);
document.writeln(obj);

document.writeln("<h3> Each item from object: </h3>");

for (var i = 0 ; i < 4 ; i++){
    document.write(Object.values(obj)[i]+"<br>");
    console.log(Object.values(obj)[i]);
}
