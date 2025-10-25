// Package triangle contains helper functions for triangles
package triangle

import (
	"math"
)

// Kind of triangle
type Kind string

// Types of triangles
const (
	NaT Kind = "Not A Triangle"
	Equ Kind = "Equilateral"
	Iso Kind = "Isosceles"
	Sca Kind = "Scalene"
)

// KindFromSides takes 3 sides of a triangle and determines the kind of triangle
func KindFromSides(a, b, c float64) Kind {
	if math.IsNaN(a) || math.IsNaN(b) || math.IsNaN(c) {
		return NaT
	}

	// First sort the sides, in ascending order, by re-assigning
	if a > b {
		a, b = b, a
	}

	if b > c {
		b, c = c, b
	}

	if a > b {
		a, b = b, a
	}

	// once sides are sorted
	switch {
	// if largest side is Inf, Not A Triangle
	case math.IsInf(c, 1):
		return NaT
		// Smallest side is 0
	case a <= 0:
		return NaT
	case a+b < c:
		return NaT
		// if smallest and largest are equal, then middle value is equal to either as well
	case a == c:
		return Equ
	case a == b || b == c:
		return Iso
	}

	return Sca
}
