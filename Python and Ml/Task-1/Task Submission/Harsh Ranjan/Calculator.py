import math
i=0
print('''Calculator options: 
1->Addition
2->Substraction
3->Multiplication
4->Division
5->Remainder(Modolus)
6->Power
7->Square Root
8->Factorial
''')
i=int(input("Please Input your choice (0 to 8): "))
if i==1:
    a=int(input("Please Input the 1st number: "))
    b=int(input("Please input the second number: "))
    o=a+b
    print("The Addition of ",a,b,"is: ",o)
elif i==2:
    a=int(input("Please Input the 1st number: "))
    b=int(input("Please input the second number: "))
    o=a-b
    print("The Substraction of ",a,b,"is: ",o)
elif i==3:
    a=int(input("Please Input the 1st number: "))
    b=int(input("Please input the second number: "))
    o=a*b
    print("The Multiplication of ",a,b,"is: ",o)
elif i==4:
    a=int(input("Please Input the 1st number: "))
    b=int(input("Please input the second number: "))
    o=a/b
    print("The Division of ",a,b,"is: ",o)
elif i==5:
    a=int(input("Please Input the 1st number: "))
    b=int(input("Please input the second number: "))
    o=a+b
    print("The Remainder of ",a,"When divided by ",b,"is(Modolus): ",o)
elif i==6:
    a=int(input("Please Input the number at base: "))
    b=int(input("Please input the number at power: "))
    o=math.pow(a,b)
    print("The Substraction of ",a,b,"is: ",o)
elif i==7:
    a=int(input("Please Input the base number: "))
    o=math.sqrt(a)
    print("The Square Root of ",a,"is: ",o)
elif i==8:
    a=int(input("Please Input the base number: "))
    o=math.factorial(a)
    print("The Factorial of ",a,"is: ",o)
else:
    print("Please Enter a valid choice!!")
print("Thank you for using our calculator!\nRestart the program to Enter again! ")

