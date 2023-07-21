# https://www.hackerrank.com/challenges/30-2d-arrays/problem

import math


def solve(matrix):
    maxi = -math.inf
    for i in range(1, 5):
        for j in range(1, 5):
            maxi = max(maxi, matrix[i][j] + matrix[i - 1][j - 1] + matrix[i - 1][j] + matrix[i -
                                                                                 1][j + 1] + matrix[i + 1][j - 1] + matrix[i + 1][j] + matrix[i + 1][j + 1])
    print(maxi)


a = """1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 9 2 -4 -4 0
0 0 0 -2 0 0
0 0 -1 -2 -4 0"""
"""a = 1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0"""
a = list(map(lambda x: list(map(int, x.split(' '))), a.split("\n")))
solve(a)
