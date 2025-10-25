pub fn annotate(garden: &[&str]) -> Vec<String> {
 if garden.is_empty() {
        return vec![];
    }

    let rows = garden.len();
    let columns = garden[0].len();

    if columns == 0 {
        return vec![String::new()];
    }

    let grid: Vec<&[u8]> = garden.iter().map(|row| row.as_bytes()).collect();

    let mut result = Vec::with_capacity(rows);

    for y in 0..rows {
        let mut new_row = String::with_capacity(columns);

        for x in 0..columns {
            if grid[y][x] == b'*' {
                new_row.push_str("*");
                continue;
            }

            let mut count = 0;

            for dy in -1..=1 {
                for dx in -1..=1 {
                    if dy==0 && dx==0 {
                        continue;
                    }

                    let ny = y as i32 + dy;
                    let nx = x as i32 + dx;

                    if ny >= 0 && ny < rows as i32 && nx >=0 && nx < columns as i32 {
                        if grid[ny as usize][nx as usize] == b'*' {
                            count +=1;
                        }
                    }
                }
            }

            if count == 0 {
                new_row.push(' ');
            } else {
                new_row.push_str(&count.to_string());
            }
        }
        result.push(new_row);
    }

    result
}
