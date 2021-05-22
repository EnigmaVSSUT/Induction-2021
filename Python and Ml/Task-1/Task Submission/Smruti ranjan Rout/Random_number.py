
import random
s = 0
l = []
for i in range(10):
    n = random.randint(1, 100)
    l.append(n)
    s += n
print("RANDOM NUMBERS")
for j in l:
    print(j, " ")
print("\n")
print("Sum=", s)
