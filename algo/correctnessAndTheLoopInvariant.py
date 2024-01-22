# https://www.hackerrank.com/challenges/correctness-invariant/problem

def insertion_sort(l):
    for i in range(1, len(l)):
        j = i-1
        key = l[i]
        while (j >= 0) and (l[j] > key):
           l[j+1] = l[j]
           j -= 1
        l[j+1] = key
        
ar = [4, 1, 3, 5, 6, 2]
insertion_sort(ar)
print(" ".join(map(str,ar)))