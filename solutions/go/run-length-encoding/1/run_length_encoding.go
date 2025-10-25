package encode

import (
	"fmt"
	"strconv"
)

func RunLengthEncode(input string) string {
	result := ""
	count := 1

	encode := func(count, idx int, s string) string {
		if count > 1 {
			return fmt.Sprintf("%d%c", count, s[idx-1])
		}
		return fmt.Sprintf("%c", s[idx-1])
	}

	for idx, char := range input {
		if idx != 0 {
			if char == rune(input[idx-1]) {
				count++
			} else {
				result += encode(count, idx, input)
				count = 1
			}
		}
	}

	if input != "" {
		result += encode(count, len(input), input)
	}

	return result
}

func RunLengthDecode(input string) string {
	count := 1
	var stringCount, result string
	for _, c := range input {
		if _, err := strconv.Atoi(string(c)); err == nil {
			stringCount += string(c)
		} else {
			if stringCount != "" {
				count, _ = strconv.Atoi(stringCount)
			}
			for j := 0; j < count; j++ {
				result += string(c)
			}
			count = 1
			stringCount = ""
		}
	}
	return result
}
