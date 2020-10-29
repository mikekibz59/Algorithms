

  function fibonacci(n,memo) {
    memo = memo || {}
    if (memo[n]) {
        console.log('hello')
        return memo[n]
    }
    if (n <= 1) {
        return 1
    }
    return memo[n] = fibonacci(n - 2, memo) + fibonacci(n - 1, memo)
}

fib = fibonacci
console.log('ans',fib(2000))


