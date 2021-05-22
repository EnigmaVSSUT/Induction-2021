import math
a=int(input("Please Enput the Value of cofficient of x**2: "))
b=int(input("Please Input the value of cofficient of x: "))
c=int(input("Please input the value of constant: "))
d=(b*b)-(4*a*c)
if(a!=0):
    if( d > 0):
        x=(math.sqrt(d)-b)/(2*a)
        print("The solution of the quadratic equation ",a,"x**2 +",b,"x +",c, "=0 is:",x)
    elif( d < 0):
        print("The discriminant of the quadratic equation",a,"x**2 +",b,"x +",c,"=0 is negative, so no solutions")
elif(a==0):
    print("The cofficient of x**2 is zero, so make it >0")

