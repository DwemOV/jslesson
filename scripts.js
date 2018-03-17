function sayHi(name) {
    var phrase = "Привет, " + name;
    alert( phrase );

    ElementNameUser = document.getElementById('hi');
    ElementNameUser.innerText = 'hello '+name+'!!!';
}


function pow(x, n) {
    var result = 1;

    if ((x===0&&n===0)||(n<0)||(n%1>0)) return NaN

    // if (n<0) {
    //     x=1/x;
    //     n=-1*n
    // }

    for (var i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}