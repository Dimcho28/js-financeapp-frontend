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
    
    request("income/add", "post", requestBody,()=>{
        request("income/get", "get", undefined, logIncome);  
    });
}

