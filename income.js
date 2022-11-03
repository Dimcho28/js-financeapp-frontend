function logIncome (incomes) {
    const incomeTableBody = $("#incomeTableBody");
    for(const income of incomes) {
        incomeTableBody.append(`<tr> <td>${income.amount}</td> <td>${income.comment}</td> <td>${income.date}</td> </tr>`)
    }
}

request("income/get", "get", undefined, logIncome);

