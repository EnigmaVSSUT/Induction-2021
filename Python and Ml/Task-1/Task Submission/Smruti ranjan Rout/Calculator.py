
print("CALCULATOR")

print('1.ADDITION')
print('2.SUBSTRACTION')
print('3.MULTIPLICATION')
print('4.DIVISION')
print("5.REMAINDER\n")

c = int(input(("ENTER THE OPERATION No. YOU WANT:\n ")))

a = int(input("Enter the ist number \n"))
b = int(input("Enter the 2nd number \n"))

if c == 1:
    print("Sum is:\n")
    print(a+b)
elif c == 2:
    print("Difference is:\n")
    print(a-b)
elif c == 3:
    print("Multiplication is: \n")
    print(a*b)
elif c == 4:
    print("Division is: \n")
    print(a/b)
elif c == 5:
    print("Remainder is: \n")
    print(a % b)
else:
    print("U enter wrong one \nplease enter a number between 1-5")
