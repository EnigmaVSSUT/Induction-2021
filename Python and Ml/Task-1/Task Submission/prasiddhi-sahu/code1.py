import cmath

a=int(input('Enter the value of a= '))
b=int(input('Enter the value of b= '))
c=int(input('Enter the value of c= '))

d=float((b**2)-(4*a*c))
  
#roots
r1=(-b-cmath.sqrt(d))/(2*a)
r2 =(-b+cmath.sqrt(d))/(2*a)
  
print('The roots are:')
print(r1)
print(r2)
