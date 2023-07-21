# https://www.hackerrank.com/challenges/nested-list/problem

def solve(name, score):
    length = len(name)
    score_name = {}

    for i in range(length):
        s = score[i]
        n = name[i]
        if s in score_name:
            score_name[s].append(n)
        else:
            score_name[s] = [n]

    keys = list(score_name)
    keys.sort()
    
    score_name[keys[1]].sort()
    for a in score_name[keys[1]]:
        print(a)


solve(["chi", "beta", "alpha"], [20.0, 50.0, 50.0])