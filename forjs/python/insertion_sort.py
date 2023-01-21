
def insertion_sort( ar : list[int] ) -> list[int]: 
    for i in range(len(ar)): 
        current :int= ar[i] #valor actual
        j :int= i-1         #index anterior
        while j>=0 and ar[j]>current: #while we are not in the begin or the value at index j is greater than current
            ar[j+1] = ar[j]
            j -= 1
        ar[j+1] = int(current)
    return ar

print( insertion_sort([5,4,3,2,1]) )
def insertionSort(ar: list[int])-> list[int]:
    """This function returs a sorted array using the insertion sort algorithm"""
    for i in range(len(ar)) :
        current = ar[i]
        j = i-1
        while j>=0 and ar[j]>current:
            ar[j+1] = ar[j]
            j-=1
        ar[j+1] = current
    return ar

print( f"Second:{insertionSort([5,4,3,2,1])} " )

