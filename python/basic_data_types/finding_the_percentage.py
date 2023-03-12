# https://www.hackerrank.com/challenges/finding-the-percentage/problem

# like the reduce function in JavaScript
from functools import reduce

def solve(student_marks, query_name):
    arr = student_marks[query_name]
    print("{:.2f}".format(reduce(lambda prev, curr: prev + curr, arr) / len(arr)))

solve({'Krishna': [67.0, 68.0, 69.0], 'Arjun': [70.0, 98.0, 63.0], 'Malika': [52.0, 56.0, 60.0]}, "Malika")