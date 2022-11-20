function logExpense (expenses) {
    const expenseTableBody = $("#expenseTableBody");
    for(const expense of expenses) {
        expenseTableBody.append(`<tr> <td>${expense.amount}</td> <td>${expense.comment}</td> <td>${expense.date}</td> </tr>`)
    }
}

request("expense/get", "get", undefined, logExpense);

function addExpense () {
    const amount = Number($("#amount").val());
    const comment = $("#comment").val();
    const date = "2022-10-09T13:50:00.000Z";
    const requestBody = {
        date: date,
        amount: amount,
        comment: comment
    };

    request("expense/add", "post", requestBody, ()=>{
        request("expense/get", "get", undefined, logExpense);
    });
}