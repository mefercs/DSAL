

def binary_search(ar: list[int], value: int) -> str|list[int]:
    result :list[int] = []
    end :int= len(ar)-1
    start :int= 0
    mid :int= (end-start)//2
    while start<=end:
        result.append( ar[mid] )
        if ar[mid]==value:
            return result
        if value>ar[mid]: 
            start = mid+1
        if value<ar[mid]:
            end = mid-1
        mid = ((end-start)//2)+start

    return "Value Not Found"


print( binary_search([1,2,3,4,5,6,7],5) )
