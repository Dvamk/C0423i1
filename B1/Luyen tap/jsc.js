var opera = "+";
var a = 6;
var b = 3;
switch (opera) {
    case '+':
        alert("a + b=" + (a + b));
        break;
    case '-':
        alert("a - b=" + (a - b));
        break;
    case '*':
        alert("a * b=" + (a * b));
        break;
    case '/':
        alert("a / b=" + (a / b));
    default:
        alert("Không có phép toán!");
        break;
}