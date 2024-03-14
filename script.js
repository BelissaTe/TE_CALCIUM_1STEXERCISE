var x = window.prompt('Enter a first number: ');
var y = window.prompt('Enter a second number: ');
x = Number(x);
y = Number(y);

document.write('Enter a first number: ' + x);
document.write('<br> Enter a second number: ' + y);
document.write('<br> <br> The inputs before swapping: ' + x + ' and ' + y + '.');

var temp = x;
x = y;
y = temp;
var sum = x + y;

document.write('<br> After swapping: ' + x + ' and ' + y + '.');
document.write('<br> The sum of the two numbers is ' + sum + '.');