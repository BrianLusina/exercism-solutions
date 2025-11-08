pub fn recite(start_bottles: u32, take_down: u32) -> String {
    let mut result = String::from("");
    
    for bottle in 0..take_down {
        let current_bottle: u32 = start_bottles - bottle;
        let verse = format!(
            "{}\n{}\n{}{}\n\n",
            bottles(current_bottle),
            bottles(current_bottle),
            action(current_bottle),
            next_verse(current_bottle-1)
        );

        result.push_str(&verse);
    }
    result.to_string()
}

fn bottles(n: u32) -> String {
    let bottle_count = value_to_name(n);

    match n {
        0 => "No green bottles".to_string(),
        1 => "One green bottle hanging on the wall,".to_string(),
        _ => format!("{} green bottles hanging on the wall,", bottle_count),
    }
}

fn value_to_name(n: u32) -> String {
    match n {
        0 => "No".to_string(),
        1 => "One".to_string(),
        2 => "Two".to_string(),
        3 => "Three".to_string(),
        4 => "Four".to_string(),
        5 => "Five".to_string(),
        6 => "Six".to_string(),
        7 => "Seven".to_string(),
        8 => "Eight".to_string(),
        9 => "Nine".to_string(),
        10 => "Ten".to_string(),
        _ => n.to_string(),
    }
}

fn action(n: u32) -> String {
    if n > 1 {
        "And if one green bottle should accidentally fall,\n".to_string()
    } else {
        "And if one green bottle should accidentally fall,\n".to_string()
    }
}

fn bottle_name(n: u32) -> String {
    match n {
        1 => "bottle".to_string(),
        _ => "bottles".to_string(),
    }
}

fn next_verse(n: u32) -> String {
    format!(
        "There'll be {} green {} hanging on the wall.",
        value_to_name(n).to_lowercase(), bottle_name(n)
    )
}