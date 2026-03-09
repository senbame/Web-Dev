l = int(input())
arr = list(map(int , input().split()))

for i in range(l):
    if i % 2 == 0:
        print(arr[i] , end = ' ')
