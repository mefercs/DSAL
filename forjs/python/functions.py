#This work was made by: Miguel Fernando
#@Copyright: None
import time
from collections.abc import Callable

def test_time(func: Callable) -> Callable:
    def new_func(*args,**kwargs) -> None: 
        start :float= time.time()
        func(*args,**kwargs)
        end :float= time.time()
        print( f'The time taken is: {end-start}' )
    return new_func   
