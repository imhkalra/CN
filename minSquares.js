let minSquares = function (n, dp = []) {
    
    if (n === 0) return 0;
    let minimum = Infinity;
    let i = 0;
    while(i**i <= n){
    
        let currAns;
        if (!dp[n - (i * i)]) {
            currAns = minSquares(n - (i * i), dp);
            dp[n - (i * i)] = currAns;
        } else {
            currAns = dp[n - (i * i)];
        }
 
        if (currAns < minimum) {
            minimum = currAns;
        }
        i++;
    }
   
    let answer = 1 + minimum;
    return answer;
}

console.log(minSquares(41));