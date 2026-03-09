n = int(input())
arr = list(map(int , input().split()))
answer = ""
for i in range(1 , n):
    if (arr[i-1] > 0 and arr[i] > 0) or (arr[i-1] < 0 and arr[i] < 0):
        answer = "YES"
        break
    else:
        answer = "NO"
print(answer)