import math
a=int(input("Please input the upper limit of the range of the armstrong number: "))
b=int(input("Please input the lower limit opf the armstrong number: "))
arm=0
chk=0
print("The armstrong numbers are: ")
for i in range (a,b):
    c=i
    arm=0
    while c!=0:
        dig = c%10
        arm = arm + (math.pow(dig,3))
        c=(c-dig)/10
    if arm==i:
        chk=chk+1
        print(i)
print("Total Armstrong number between ",a,"to ",b,"is: ",chk)