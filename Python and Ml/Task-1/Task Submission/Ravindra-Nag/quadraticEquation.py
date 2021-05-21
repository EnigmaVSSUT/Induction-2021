import math

print('General form of a quadratic equation is ax**2 + bx + c = 0')
a=int(input('Enter a: '))
b=int(input('Enter b: '))
c=int(input('Enter c: '))
d=b*b - 4*a*c
if a==0:
    print('Not a quadratic equation')
elif d>0:
    x1= (-b + math.sqrt(d)) / (2*a)
    x2= (-b - math.sqrt(d)) / (2*a)
    print('x1: ' + str(x1) + '\n' + 'x2: ' + str(x2))
elif d<0:
    d=abs(d)
    print('x1: ' + str(-b / (2*a)) + '+i' + str(math.sqrt(d) / (2*a)))
    print('x1: ' + str(-b / (2*a)) + '-i' + str(math.sqrt(d) / (2*a)))
else:
    print('x: ' + str(-b/2*a))