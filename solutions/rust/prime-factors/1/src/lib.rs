pub fn factors(n: u64) -> Vec<u64> {
    let mut c = 2;
    let mut factors = Vec::new();
    let mut number = n;

    while c * c <= number {
        while number % c == 0 {
            factors.push(c);
            number /= c;
        }
        c += 1;
    }

    if number > 1 {
        factors.push(number);
    }

    factors
}
