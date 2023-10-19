// let fibonacci = function (n, dp) {
//     if (n == 0 || n == 1) return n;
//     let ans1, ans2;
//     if (!dp[n - 1]) {
//         ans1 = fibonacci(n - 1, dp);
//         dp[n - 1] = ans1;
//     } else ans1 = dp[n - 1];

//     if (!dp[n - 2]) {
//         ans2 = fibonacci(n - 2, dp);
//         dp[n - 2] = ans2;
//     } else ans2 = dp[n - 2];

//     let ans3 = ans1 + ans2;
//     dp[n] = ans3;
//     return ans3;
// }

// let dp = new Array(100);

// console.log(fibonacci(10, dp));
// console.log(dp);

let fibonacci = function (n, dp) {
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i < n+1; i++){
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

console.log(fibonacci(10, []));

