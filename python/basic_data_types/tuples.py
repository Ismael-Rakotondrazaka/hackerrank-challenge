# https://www.hackerrank.com/challenges/python-tuples/problem

def solve(n, integers):
    n = int(n)
    result = hash(tuple([x for x in map(int, integers.split(" "))]))
    print(result)

solve("2", "1 2")