# https://www.hackerrank.com/challenges/python-lists/problem

def solve(n , commands):
    l = list([])

    for i in commands:
        command_arr = i.split(" ")

        def insert():
            l.insert(int(command_arr[1]), int(command_arr[2]))

        def print_f():
            print(l)
        
        def remove():
            l.remove(int(command_arr[1]))

        def append():
            l.append(int(command_arr[1]))

        def sort():
            l.sort()

        def pop():
            l.pop()

        def reverse():
            l.reverse()

        command_fun = {
            "insert": insert,
            "print": print_f,
            "remove": remove,
            "append": append,
            "sort": sort,
            "pop": pop,
            "reverse": reverse,
        }

        command_fun[command_arr[0]]()

solve(12, "insert 0 5\ninsert 1 10\ninsert 0 6\nprint\nremove 6\nappend 9\nappend 1\nsort\nprint\npop\nreverse\nprint".split("\n"))