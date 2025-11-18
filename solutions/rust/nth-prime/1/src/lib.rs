pub fn nth(n: u32) -> u32 {
    primes()
        .nth(n as usize)
        .expect("Prime iterator should be infinite")
}

struct Primes {
    primes: Vec<u32>,
    next_candidate: u32,
}

impl Iterator for Primes {
    type Item = u32;

    fn next(&mut self) -> Option<Self::Item> {
        // Handle the first prime explicitly
        if self.primes.is_empty() {
            self.primes.push(2);
            self.next_candidate = 3; // start checking odd numbers next
            return Some(2);
        }

        // Search for the next prime by testing odd candidates
        loop {
            let n = self.next_candidate;
            self.next_candidate = self.next_candidate.saturating_add(2); // move to the next odd number

            let mut is_prime = true;
            for &p in &self.primes {
                // Stop trial division at sqrt(n)
                if (p as u64) * (p as u64) > n as u64 {
                    break;
                }
                if n % p == 0 {
                    is_prime = false;
                    break;
                }
            }

            if is_prime {
                self.primes.push(n);
                return Some(n);
            }
            // otherwise, continue with next odd candidate
        }
    }
}

// Create an (infinite) generator of prime numbers
fn primes() -> Primes {
    Primes {
        primes: Vec::new(),
        next_candidate: 2,
    }
}
