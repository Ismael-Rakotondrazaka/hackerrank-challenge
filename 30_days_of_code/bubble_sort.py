totalSwapped = 0
a = [5, 3, 8, 4, 6]
n = len(a)

while True:
    swaps = 0
    for i in range(n - 1):
        if a[i] > a[i + 1]:
            temp = a[i]
            a[i] = a[i + 1]
            a[i + 1] = temp
            swaps += 1
    totalSwapped += swaps
    if swaps == 0:
        break

print("Array is sorted in", totalSwapped, "swaps.")
print("First Element:", a[0])
print("Last Element:", a[n - 1])
