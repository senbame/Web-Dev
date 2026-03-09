x = int(input())

nums = []

for i in range(1 , x + 1):
    if x % i == 0:
        nums.append(i)

print(*nums)