/// Check a Luhn checksum.
pub fn is_valid(code: &str) -> bool {
    // remove spaces from the input to have one full string
    let cleaned_code = code.replace(" ", "");

    // strings of length 1 or less are not valid (after removing spaces)
    if cleaned_code.len() <= 1 {
        return false;
    }

    // all other non-digit characters are disallowed
    if !cleaned_code.chars().all(|c| c.is_ascii_digit()) {
        return false;
    }

    // Iterate from right, doubling every second digit starting with the second from the right.
    // If a doubled value is greater than 9, subtract 9 from it. Sum all digits.
    let mut sum = 0;
    for (i, c) in cleaned_code.chars().rev().enumerate() {
        let mut d = c.to_digit(10).unwrap();
        if i % 2 == 1 {
            d *= 2;
            if d > 9 {
                d -= 9;
            }
        }
        sum += d;
    }

    sum % 10 == 0
}
