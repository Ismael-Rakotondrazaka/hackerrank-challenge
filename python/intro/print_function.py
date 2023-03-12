# https://www.hackerrank.com/challenges/python-print/problem

def solve(n):
    result = "".join(map(lambda x: str(x), list(range(1, n + 1))))
    print(result)

solve(5)
solve(3)
