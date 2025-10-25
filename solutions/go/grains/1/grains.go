package grains

import "errors"

func Total() uint64 {
	return 1<<64 - 1
}

func Square(i int) (uint64, error) {
	if i < 1 || i > 64 {
		return 0, errors.New("invalid input. Input should be between 1 and 64")
	}
	return 1 << (uint64(i) - 1), nil
}
