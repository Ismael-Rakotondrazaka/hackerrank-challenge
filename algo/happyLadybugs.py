# https://www.hackerrank.com/challenges/happy-ladybugs/problem
from collections import Counter, defaultdict;

def happyLadybugs(b, n):
    c = Counter(b)
    d = defaultdict(list)
    movable = False
    for i, v in enumerate(b):
        d[v].append(i)
        if v == "_": movable = True

    for k in c:
        if k != "_":
            if c[k] == 1: # single
                return "NO"
    if not movable:
        for k in d.values():
            for i in range(len(k) - 1):
                if k[i + 1] > k[i] + 1: return "NO"

    return "YES"
print(happyLadybugs("RBY_YBR", 7))
print(happyLadybugs("X_Y__X", 6))
print(happyLadybugs("__", 2))
print(happyLadybugs("B_RRBR", 6))