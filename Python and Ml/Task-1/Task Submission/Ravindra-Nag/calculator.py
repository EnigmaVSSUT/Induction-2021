print('Enter two numbers: ')
x=int(input())
y=int(input())

print('Enter operation (+, -, *, //, %, /)')
o=input()
if(o=='+'):
    print(x+y)
elif(o=='-'):
    print(x-y)
elif(o=='*'):
    print(x*y)
elif(o=='//'):
    print(x//y)
elif(o=='%'):
    print(x%y)
elif(o=='/'):
    print(x/y)
else:
    print('Invalid entry')