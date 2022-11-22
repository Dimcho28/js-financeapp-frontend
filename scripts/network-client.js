const baseUrl = "https://financeapp-be.vercel.app/";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxZWVlZjhhLWZlN2YtNDc2Yy1hMzkyLWVkYzU0MGQzZmQxNiIsImVtYWlsIjoiZXZpbDExMkBhYnYuYmciLCJuYW1lIjoiRGltaSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODkzMzgxMiwiZXhwIjoxNjY5Nzk3ODEyfQ.3sCiNc1aSqVr-uQc1C7R3F8nD9wJP-ffvQLRZyTBXEk";



function request (endPoint, method, requestBody, success) {
    $.ajax ({
        url: baseUrl+endPoint,
        type: method,
        data: JSON.stringify(requestBody),
        headers: {
            "Authorization" : "Bearer "+ token,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Heders": "*"
        },
        success: success,
        contentType: "application/json",
    });
}