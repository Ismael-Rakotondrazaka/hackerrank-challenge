# https://www.hackerrank.com/challenges/text-alignment/problem

# thickness = int(input())  # This must be an odd number
thickness = 3
c = 'H'

b = (((thickness - 1) * 2 + 1) - thickness) // 2

# Top Cone
a = thickness * 2 - 1
for i in range(thickness):
    print(((c * i * 2) + "H").center(a, " "))

# Top Pillars
for i in range(thickness+1):
    print((" " * b) + ("-" * ((thickness) * 3)).center(thickness * 5, c))

# Middle Belt
for i in range((thickness+1)//2):
    print((" " * b) + c * thickness * 5)

# Bottom Pillars
for i in range(thickness+1):
    print((" " * b) + (" " * ((thickness) * 3)).center(thickness * 5, c))

# Bottom Cone
for i in range(thickness):
    print((" " * (thickness * 5 - (b * 2) - 1)) +
          ((c * (thickness - i - 1) * 2) + "H").center(a, " "))
