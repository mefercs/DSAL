
def selection_sort( ar: list[int] ) -> list [int]:
    for i in range( len(ar) ): 
        current = i
        for j in range( i+1, len(ar) ): 
            if ar[current] > ar[j]:
                current = j 
            if current != i : 
                ar[current],ar[i] = ar[i],ar[current]
    return ar


def selectionSort(ar : list[int]) -> list[int]:
    for i in range(len(ar)): 
        current = i
        for j in range(i+1, len(ar)) : 
            if ar[current] > ar[j]:
                current = j
            if current != i:
                ar[i],ar[current ]= ar[current],ar[i]
    return ar

print( selectionSort([5,4,3,2,1]) )
