package gigasecond

import "time"

const gigasecond = 1e9

// AddGigasecond takes in a moment and returns a gigasecond after that moment
func AddGigasecond(t time.Time) time.Time {
	return t.Add(gigasecond * time.Second)
}
