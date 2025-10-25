package anagram

import (
	"sort"
	"strings"
)

type sortRunes []rune

func (s sortRunes) Less(i, j int) bool {
	return s[i] < s[j]
}

func (s sortRunes) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

func (s sortRunes) Len() int {
	return len(s)
}

func sortString(s string) string {
	r := []rune(s)
	sort.Sort(sortRunes(r))
	return string(r)
}

// Detect checks if the candidates list contains words that can be formed by re-arranging the subject
func Detect(subject string, candidates []string) (sublist []string) {
	if len(candidates) == 0 {
		return sublist
	}

	for _, candidate := range candidates {
		candidateLower := strings.ToLower(candidate)
		subjectLower := strings.ToLower(subject)

		if len(subject) == len(candidate) && subjectLower != candidateLower {
			sortedCandidate := sortString(candidateLower)
			sortedSubject := sortString(subjectLower)

			if sortedCandidate == sortedSubject {
				sublist = append(sublist, candidate)
			}
		}
	}

	return sublist
}
