// handle deposit button event  
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited 
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;


    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;


    // clear the deposti input field 
    depositInput.value = '';

});

// handel withdraw event handeler  
document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newwithdrawAmount = parseFloat(withdrawAmountText);

    // set withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdeawTest = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdeawTest);

    const newWithdrawTotal = previousWithdrawTotal + newwithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    // clear the withdraw input field 
    withdrawInput.value = '';


    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalanceTotal - newwithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

});