def bubbleSort2(array: list[int])->list[int]:
    """This function sorts an unsorted list of numbers"""
    length :int= len(array)-1
    length2 :int= len(array)
    for i in range(length2):
        for j in range(length):
            print(j)
            if array[j]>array[j+1]:
                array[j],array[j+1] = array[j+1],array[j]
            length :int= length2 -1- i
    return array
def bubbleSort(arr:list[int])->list[int]: 
    length :int= len(arr)-1
    length2 :int= len(arr)
    for i in range(length2):
        for j in range(length):
            if arr[j] > arr[j+1]:
                arr[j],arr[j+1]=arr[j+1],arr[j]
            length :int= length2-i-1
    return arr

# [5,3,4,3,2,1]
# 563421 6
# 534216 5
# 342156 4
# 321456 3
# 213456 2
# 123456 1
print(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))
print(bubbleSort([5,4,3,2,1]))

