from itertools import combinations_with_replacement


def find_minimum_coins(total_change, coins):
    if total_change == 0:
        return []

    if total_change < 0:
        raise ValueError("Cannot find change of negative values")

    if total_change < min(coins):
        raise ValueError("Cannot find change if total change is smaller than smallest coin")

    result = None

    for n in range(total_change):
        for combination in combinations_with_replacement(coins, n):
            if sum(combination) == total_change:
                return list(combination)
    if result is None:
        raise ValueError("No combination can add up to target")