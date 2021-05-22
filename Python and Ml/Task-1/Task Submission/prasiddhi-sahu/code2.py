#let the interval be 100 to 1000

for n in range(100,1000):
  temp=n
  sum=0
  while temp>0:
      x=temp%10
      sum=sum+x**3
      temp=temp//10
      if sum==n:
           print (n)
