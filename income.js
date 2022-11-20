function logIncome (incomes) {
    const incomeTableBody = $("#incomeTableBody");
    for(const income of incomes) {
        incomeTableBody.append(`<tr> <td>${income.amount}</td> <td>${income.comment}</td> <td>${income.date}</td> </tr>`)
    }
}

request("income/get", "get", undefined, logIncome);

function addIncome () {
    const amount = Number($("#amount").val());
    const comment = $("#comment").val();
    const date = "2022-10-09T13:50:00.000Z";
    const requestBody = {
        date: date,
        amount: amount,
        comment: comment
    };
    // const requestBody = {
    //     date: "2022-10-09T13:50:00.000Z",
    //     amount: 123.21,
    //     comment: "test"
    // };
    console.log(requestBody);
    request("income/add", "post", requestBody);
}

