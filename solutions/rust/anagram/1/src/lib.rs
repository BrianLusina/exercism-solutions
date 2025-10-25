use std::collections::HashSet;

fn sort_word(word: &str) -> String {
    let mut sorted: Vec<char> = word.chars().collect();
    sorted.sort_unstable();
    sorted.into_iter().collect()
}


pub fn anagrams_for<'a>(word: &str, possible_anagrams: &[&'a str]) -> HashSet<&'a str> {
    let lower_case_word = word.to_lowercase();
    let sorted = sort_word(&lower_case_word);

    possible_anagrams
        .iter()
        .filter(|possible_anagram| {
            let lower = possible_anagram.to_lowercase();
            lower_case_word != lower && sorted == sort_word(&lower)
        })
        .cloned()
        .collect()
}

