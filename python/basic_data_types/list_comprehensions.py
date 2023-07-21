# https://www.hackerrank.com/challenges/list-comprehensions/problem

def solve(x, y , z, n):
    result = [[a, b, c] for a in range(x + 1) for b in range(y + 1) for c in range(z + 1) if a + b + c != n]
    print(result)

solve(1, 1, 2, 3)

""" 
also works
def solve(x, y , z, n):
    result = []
    for i in range(x+1):
        for j in range(y+1):
            for k in range(z+1):
                if i+j+k == n:
                    continue
                result.append([i,j,k])
    print(result) """