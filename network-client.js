const baseUrl = "https://financeapp-be.vercel.app/";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxZWVlZjhhLWZlN2YtNDc2Yy1hMzkyLWVkYzU0MGQzZmQxNiIsImVtYWlsIjoiZXZpbDExMkBhYnYuYmciLCJuYW1lIjoiRGltaSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NzUwMjg3NiwiZXhwIjoxNjY4MzY2ODc2fQ.yf_ds_AOmLLoB7d9AMV0MZZR3O2ba5MX0FiLipJ2VWM";



function request (endPoint, method, requestBody, success) {
    $.ajax ({
        url: baseUrl+endPoint,
        type: method,
        data: requestBody,
        headers: {"Authorization" : "Bearer "+ token},
        success: success
    });
}