# https://www.hackerrank.com/challenges/any-or-all/problem

def solve(n, integers):
    n = int(n)
    arr = integers.split(" ")
    arr_2 = [x for x in map(lambda x: x == x[::-1], arr)]
    arr_3 = [x for x in map(lambda x: int(x) >= 0, arr)]
    result = any(arr_2) and all(arr_3)
    print(result)

solve("5", "12 9 61 5 14")
solve("6", "1 2 3 4 5 -9")

"""
x[::-1] return a reversed string of x
"""