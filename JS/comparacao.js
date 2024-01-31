let n1 = 10;
let n2 = 8;
let n3 = 9;
let n4 = 7;

let media = ((n1+n2+n3+n4)/4);

if(media <5){
    document.write('A média é ',[media],' e você foi reprovado')
}
else if(media >=5 && media <7){
    document.write('A média é ',[media],' e você está com a nota regular')
}
else if(media >=5 && media <8){
    document.write('A média é ',[media],  ' e você está com a nota boa')
}
else{
    document.write('A média é ',[media],' e você está com a nota muito boa')
}

