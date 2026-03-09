n = int(input())

students = {}

for _ in range(n):
    data = input().split()
    name = data[0]
    scores = list(map(float, data[1:]))  
    students[name] = scores

query_name = input()

average = sum(students[query_name]) / len(students[query_name])
print(f"{average:.2f}")