//  Takes in two arrays, and switches one after the other
list1 = ['f', 'o', 'o']
list2 = ['hello', 'world']
result = [None]*(len(list1)+len(list2))
result[::2] = list1
result[1::2] = list2
print(result)