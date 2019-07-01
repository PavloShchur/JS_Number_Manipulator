var output;

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
    output = '';

    numbersToSort.forEach((item, index) => {
        let elementToAdd;
        if(item) {
            if(index > 0) {
                elementToAdd = ', ' + item;
            } else {
                elementToAdd = item;
            }
            output += elementToAdd;
        }
    });
}

function calculate() {
    console.log("@@@ PAVLO output: " + output);
    document.getElementById("orderedQuquenceId").innerHTML = output;
}