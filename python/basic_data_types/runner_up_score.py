# https://www.hackerrank.com/challenges/find-second-maximum-number-in-a-list/problem

def solve(n, a):
    arr_unique_sorted = list(set(a))
    arr_unique_sorted.sort()
    length  = len(arr_unique_sorted)
    result = arr_unique_sorted[length - 2] if length > 1 else arr_unique_sorted[length - 1]
    print(result)

solve(5, [2, 3, 6, 6, 5])