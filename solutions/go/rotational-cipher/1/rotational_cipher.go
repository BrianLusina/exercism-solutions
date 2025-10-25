package rotationalcipher

import "fmt"

const (
	ASCII_LOWERCASE = "abcdefghijklmnopqrstuvwxyz"
	ASCII_UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
)

type tuple struct {
	a, b rune
}

func zip(a, b string) ([]tuple, error) {
	if len(a) != len(b) {
		return nil, fmt.Errorf("zip: arguments must be of same length")
	}

	r := make([]tuple, len(a), len(b))

	for i, e := range a {
		r[i] = tuple{e, rune(b[i])}
	}

	return r, nil
}

func dict(a []tuple) map[rune]rune {
	m := make(map[rune]rune)
	for _, t := range a {
		m[t.a] = t.b
	}
	return m
}

func updateDict(m, n map[rune]rune) map[rune]rune {
	for k, v := range n {
		m[k] = v
	}
	return m
}

func RotationalCipher(plain string, shiftKey int) string {
	var cipher string
	key := shiftKey % 26

	l, err := zip(ASCII_LOWERCASE, ASCII_LOWERCASE[key:]+ASCII_LOWERCASE[:key])
	if err != nil {
		panic("RotationalCipher: " + err.Error())
	}

	u, err := zip(ASCII_UPPERCASE, ASCII_UPPERCASE[key:]+ASCII_UPPERCASE[:key])
	if err != nil {
		panic("RotationalCipher: " + err.Error())
	}

	ml := dict(l)
	mu := dict(u)
	m := updateDict(ml, mu)

	for _, char := range plain {
		letter, ok := m[char]
		if ok {
			cipher += string(letter)
		} else {
			cipher += string(char)
		}
	}
	return cipher
}
