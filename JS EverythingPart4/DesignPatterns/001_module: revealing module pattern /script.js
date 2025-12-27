// module pattern  &  Revealing module pattern
// iife 

// When you return the variables and functions in the form of an object, you just have to rename them in order to make it a revealing module pattern.



let Bank = (function () {
    let bankBalance = 12000;

    function checkBalance() {
        console.log(bankBalance);
    }

    function setBalance(val) {
        bankBalance = val;
    }

    function withdraw(val) {
        if (val <= bankBalance) {
            bankBalance -= val;
            console.log(bankBalance);
        }
    }

    return {
        check : checkBalance,
        set: setBalance,
        draw: withdraw
    }
})();

Bank.checkBalance();




