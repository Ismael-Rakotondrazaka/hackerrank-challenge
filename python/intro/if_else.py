# https://www.hackerrank.com/challenges/py-if-else/problem
def solve(n: int):
    if n % 2 == 1:
        print("Weird")
    else:
        if n >= 2 and n <= 5:
            print("Not Weird")
        elif n >= 6 and n <= 20:
            print("Weird")
        elif n > 20:
            print("Not Weird")

solve(3)
solve(24)