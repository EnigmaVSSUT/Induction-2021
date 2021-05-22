import math
a = int(input("Enter the value of a:\n "))
b = int(input("Enter the value of b:\n "))
c = int(input("Enter the value of c:\n "))
d = ((b**2)-4*a*c)  # d= discriminant

print()
if d > 0:
    print(" Real roots are \n")
    r1 = ((-b)+math.sqrt(d))/(2*a)
    r2 = ((-b)-math.sqrt(d))/(2*a)
    print("First root: ", int(r1))
    print("Second root: ", int(r2))
elif d == 0:
    print(" Equal root is")
    r = (-b)/(2*a)
    print("root is: ", int(r))

else:
    print("Imaginary roots are")
    x = (-b)/(2*a)
    y = (math.sqrt(-d))/(2*a)
    print("1st root is:", str(x) + " + "+"i("+str(y)+")")
    print("2nd root is:", str(x) + " - "+"i("+str(y)+")")
