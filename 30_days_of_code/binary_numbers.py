# https://www.hackerrank.com/challenges/30-binary-numbers/problem

def solve(n):
    arr = []
    maxi = 0
    count = 0
    while (n > 0):
        r = n % 2
        arr.append(r)
        n = n // 2
        if r == 1:
            count += 1
        else:
            count = 0
        maxi = max(maxi, count)
    print(maxi)

solve(125)