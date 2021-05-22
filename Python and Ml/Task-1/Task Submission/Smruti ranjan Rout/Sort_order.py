
n = int(input("Enter the length of the list\n "))
l = []
for i in range(n):
    a = input("enter "+str(i+1)+"serial word:")
    l.append(a)
l.sort()              # The command play aimpt role and sort the sequence
print("\n\t\tSORTED ORDER\n")
for j in l:
    print(j)
