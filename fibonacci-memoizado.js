let memoArray = [];
function fibonacci_memoizado(n, memoArray) {
  //console.log(memoArray);
  if (memoArray[n] !== undefined) return memoArray[n];
  console.log("Calculando el fibonacci_memoizado", n);
  if (n <= 1) {
    memoArray[n] = n;
    return n;
  } else {
    let resultado =
      fibonacci_memoizado(n - 1, memoArray) +
      fibonacci_memoizado(n - 2, memoArray);
    memoArray[n] = resultado;
    return resultado;
  }
}

console.log(fibonacci_memoizado(10, memoArray));
