var output = document.getElementById("numbers")

for (var i = 1; i <= 100; i++) {
    output.innerHTML += i
    if ((i % 3 === 0) && (i % 5 === 0)) {
        output.innerHTML +="FIZZBUZZ"
    }
    else if (i % 3 === 0) {
        output.innerHTML +="FIZZ"
    } 
    else if (i % 5 === 0) {
        output.innerHTML +="BUZZ"
    }
        output.innerHTML += "<br>"
}