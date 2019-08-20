function a(arg1){
    console.log(arg1);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(this.c);
}

var b = a.bind({c:4}, 1, 2);

b(3);