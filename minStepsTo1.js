let ans1, ans2, ans3;
function minStepsTo1(n, dp) {
    if (n == 1) return 0;
    if (!dp[n - 1]) {
        ans1 = minStepsTo1(n - 1, dp);
        dp[n - 1] = ans1;
    } else ans1 = dp[n - 1];
    if (n % 2 == 0) {
        if (!dp[n/2]) {
            ans2 = minStepsTo1(n / 2) || Infinity;
            dp[n/2] = ans2;
        } else ans2 = dp[n/2];
        
    }
    if (n % 3 == 0) {
        if (!dp[n/3]) {
            ans3 = minStepsTo1(n / 3) || Infinity;
            dp[n/3] = ans3;
        } else ans3 = dp[n/3];
        ans3 = minStepsTo1(n/3) || Infinity;
    }
    return Math.min(ans1, ans2, ans3) + 1;
}
let n = 10;
let dp = new Array(10);
console.log(minStepsTo1(5, dp));