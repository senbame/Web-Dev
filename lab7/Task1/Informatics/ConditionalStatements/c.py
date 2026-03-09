a = int(input())
b = int(input())

correct = (1000 <= a <= 9999) and str(a) == str(a)[::-1]

if (correct and b == 1) or (not correct and b != 1):
    print("YES")
else:
    print("NO")