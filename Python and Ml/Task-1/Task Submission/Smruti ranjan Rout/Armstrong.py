def armstrong(i):
    p = 0
    s = 0
    k = i
    while i > 0:
        d = i % 10
        s += 1
        i = i//10

    while k > 0:
        d = k % 10
        p = p+(d**s)
        k = k//10
    return p


l = int(input("Enter the lower range:\n "))
u = int(input("Enter the upper range:\n "))
print("\nTHE FOLLOWING ARE THE ARMSTRONG NUMBERS\n")
for j in range(l, u+1):
    r = armstrong(j)
    if j == r:
        print(j)
