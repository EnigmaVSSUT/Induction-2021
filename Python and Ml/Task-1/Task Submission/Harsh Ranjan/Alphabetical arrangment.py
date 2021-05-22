my_str = "Hi everyone, I am Harsh Ranjan"
words = [word.lower() for word in my_str.split()]
words.sort()
print("The words shorted in alphabetical order are:")
for word in words:
   print(word)