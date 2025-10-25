package series

func All(n int, s string) []string {
	if n > len(s) {
		return nil
	}
	series := []string{}
	for i := 0; i < len(s)-n+1; i++ {
		series = append(series, s[i:i+n])
	}
	return series
}

func UnsafeFirst(n int, s string) string {
	return All(n, s)[0]
}

func First(n int, s string) (string, bool) {
	series := All(n, s)
	if len(series) == 0 {
		return "", false
	}
	return series[0], true
}
