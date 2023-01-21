
 
def merge_sort(ar: list[int]):
    if len(ar)>1:
        mid :int= len(ar)//2
        l :list[int]= ar[:mid]
        r :list[int]= ar[mid:]
        print(f"LEFT:{l}")
        print(f"RIGH:{r}\n")
        merge_sort(l)
        merge_sort(r)
        i = j = k = 0
        while i<len(l) and j<len(r):
            if l[i]<=r[j]: 
                ar[k]=l[i]
                i+=1
            else:
                ar[k]=r[j]
                j+=1
            k+=1
        while i < len(l):
            ar[k] = l[i]
            k+=1
            i+=1
        while j < len(r):
            ar[k] = r[j]
            k+=1
            j+=1

def mergeSort(ar:list[int])->list[int]:
    if len(ar)>1:
        result :list[int]= []
        mid :int= len(ar)//2
        l :list[int]= mergeSort(ar[:mid])
        r :list[int]= mergeSort(ar[mid:])
        i = j = 0 
        while i<len(l) and j<len(r):
            if l[i]<=r[j]:
                result.append(l[i])
                i+=1
            else:
                result.append(r[j])
                j+=1
        while i<len(l): 
            result.append(l[i])
            i+=1
        while j<len(r): 
            result.append(r[j])
            j+=1
        return result
    else:
        return ar
print( mergeSort([5,4,3,2,1]) )
