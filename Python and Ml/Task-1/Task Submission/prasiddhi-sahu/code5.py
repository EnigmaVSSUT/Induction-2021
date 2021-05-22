import random

randomlist=random.sample(range(1, 100), 10)
print(randomlist)
    
sum = sum(randomlist)
  
print ("Random number summation list is : " + str(sum))
