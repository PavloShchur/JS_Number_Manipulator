function test() {
    console.log('TEST');
}

function orderNumbers() {
    var numbersToSort = document.getElementById("inputId").value.split(" ");
    console.log('@@@ PAVLO orderNumbers(): ' + numbersToSort);

    numbersToSort.sort(function(a, b) {
        return a - b;
    });

    document.getElementById("orderedQuquenceId").innerHTML = numbersToSort;
}