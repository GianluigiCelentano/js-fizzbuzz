var numbers = []
for (var i = 0; i <= 100; i++) {
    if (numbers % 2!==0) {
        numbers.push(i)
    }
    document.getElementById("numbers").innerHTML += numbers
}