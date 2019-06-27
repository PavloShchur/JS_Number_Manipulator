function orderNumbers() {
    let entryNumbers = document.getElementById("inputId").value.split(" ");

    let numbersToSort = [];

    entryNumbers.forEach(element => {
        var reg = /^-?\d+\.?\d*$/;
        if(reg.test(element)) {
            numbersToSort.push(element);    
        }
    });

    numbersToSort.sort(function(a, b) {
        return a - b;
    });

    document.getElementById("orderedQuquenceId").innerHTML = null;

    numbersToSort.forEach((item, index) => {
        let elementToAdd;
        if(index > 0) {
            elementToAdd = ', ' + item;
        } else {
            elementToAdd = item;
        }
        document.getElementById("orderedQuquenceId").innerHTML += elementToAdd;
    });
}