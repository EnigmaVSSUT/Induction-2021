sen = input('Enter a sentence: ')
list=sen.split()
list.sort()
for i in range(len(list)):
    print(list[i])