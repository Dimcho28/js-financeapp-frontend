function logExpense (expense) {
    const expenseTableBody = $("#expenseTableBody");
    for(const expense of expenses) {
        expenseTableBody.append(`<tr> <td>${expense.amount}</td> <td>${expense.comment}</td> <td>${expense.date}</td> </tr>`)
    }
}

request("expense/get", "get", undefined, logExpense);