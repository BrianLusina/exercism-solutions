use std::collections::HashSet;

pub fn sum_of_multiples(limit: u32, factors: &[u32]) -> u32 {
    let mut multiples: HashSet<u32> = HashSet::new();
    for value in 0..limit {
        for factor in factors {
            if *factor != 0 && value % factor == 0 {
                multiples.insert(value);
            }
        }
    }
    multiples.iter().sum()
}
