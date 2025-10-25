def binary_search(arr: list, key: int) -> int:
    low = 0
    high = len(arr) - 1
    while low <= high:
        middle = (low + high) // 2
        if arr[middle] > key:
            high = middle - 1
        elif arr[middle] < key:
            low = middle + 1
        else:
            return middle
    raise ValueError("Value not found")