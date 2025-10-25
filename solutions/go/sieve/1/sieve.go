package sieve

import "math"

func IsPrime(n int) bool {
	if n < 2 {
		return false
	} else if n == 2 {
		return true
	} else if n%2 == 0 {
		return false
	}

	for i := 3; i <= int(math.Sqrt(float64(n))); i += 2 {
		if n%i == 0 {
			return false
		}
	}
	return true
}

func Sieve(limit int) (result []int) {
	toSieve := []int{}

	for i := 2; i <= limit; i++ {
		toSieve = append(toSieve, i)
	}

	for _, num := range toSieve {
		if IsPrime(num) {
			result = append(result, num)
		}
	}

	return
}
