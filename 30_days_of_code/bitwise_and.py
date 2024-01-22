# https://www.hackerrank.com/challenges/30-bitwise-and/problem?isFullScreen=true

def bitwiseAnd(N, K):
    res=0
    for i in range(1, N):
        for j in range(i + 1, N + 1):
            v=i & j
            if v > res and v < K: res = v
    return res

""" # Time limit exceeded
def bitwiseAnd(N, K):
    res=0
    for i in range(1, N):
        for j in range(i + 1, N + 1):
            a = "{0:b}".format(i)
            b = "{0:b}".format(j)
            m= max(len(a), len(b))
            a=a.rjust(m, "0")
            b=b.rjust(m, "0")
            s=""
            for k in range(m):
                s = str(int(a[k]) * int(b[k])) + s
            v=int(s, 2)
            if v > res and v < K: res = v
    return res """

""" # Time limit exceeded
def toBinary(n):
    res=""
    r = n
    while r >= 2:
        res = str(r % 2) + res
        r = r // 2
    if (r == 1): res = str(1) + res
    return res

def bitwiseAnd(N, K):
    res=0
    for i in range(1, N):
        for j in range(i + 1, N + 1):
            a = toBinary(i)
            b = toBinary(j)
            m= max(len(a), len(b))
            a=a.rjust(m, "0")
            b=b.rjust(m, "0")
            s=""
            for k in range(m):
                s = str(int(a[k]) * int(b[k])) + s
            v=int(s, 2)
            if v > res and v < K: res = v
    return res """

a = bitwiseAnd(2,2)
print(a)
