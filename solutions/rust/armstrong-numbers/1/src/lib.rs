pub fn is_armstrong_number(num: u32) -> bool {
    let num_str = num.to_string();
    let num_digits = num_str.len();
    let mut total = 0;
    for c in num_str.chars() {
        let digit = c.to_digit(10).unwrap();
        let pow = digit.pow(num_digits as u32);
        total += pow;
    }
    total == num
}
