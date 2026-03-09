if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    
    arr.sort()
    maximum = arr[-1]
    while maximum in arr:
        arr.remove(maximum)
    print(arr[-1])
