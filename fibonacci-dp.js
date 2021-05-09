function fibonacci_dp(n) {
  let memo = [0, 1];
  for (let actual = 2; actual <= n; ++actual) {
    memo[actual] = memo[actual - 1] + memo[actual - 2];
  }
  return memo[n];
}

console.log(fibonacci_dp(1000));
