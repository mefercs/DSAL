
def partition(ar:list[int],low:int,high:int) -> int:
    pivot = ar[high]
    i = low - 1
    for j in range(low,high): 
        if ar[j]<pivot:
            i += 1 
            ar[i],ar[j]=ar[j],ar[i]
    ar[i+1],ar[high] = ar[high],ar[i+1]
    return i + 1

def quick_sort(ar: list[int], low=None,high=None)->None:
    low = 0 if low==None else low
    high = len(ar)-1 if high==None else high
    if(low<high):
        pi :int= partition(ar,low,high)
        quick_sort(ar,low,pi-1)
        quick_sort(ar,pi+1,high)
ar = [5,4,3,2,1]
quick_sort(ar)
print( ar )


