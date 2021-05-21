low=int(input('Enter lower limit: '))
high=int(input('Enter higher limit: '))
high+=1
c=0
for i in range(low, high):
    temp = i
    sum = 0
    while temp!=0:
        d=temp%10
        sum+= d*d*d
        temp//=10
    if sum==i:
        c+=1
        print(i)
        

if c==0:
    print('There is no armstrong number in this range.')