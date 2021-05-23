
import cmath
a = float(input("Enter the value of a: "))
b = float(input("Enter the value of b: "))
c = float(input("And Enter the value of c: "))

print('The Quadratic Equation is ',a,'x**2 + ',b,'x + ',c,sep='')

d = (b**2) - (4*a*c)

r1 = (-b + cmath.sqrt(d)) / (2*a)
r2 = (-b - cmath.sqrt(d)) / (2*a)

print("First root:",r1)
print("Second root:",r2)
