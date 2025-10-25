pub fn annotate(minefield: &[&str]) -> Vec<String> {
    if minefield.is_empty() {
        return vec![]
    }

    let rows: usize = minefield.len();
    let columns = minefield[0].len();

    // convert input to a 2D grid of bytes fir efficient access
    let grid: Vec<&[u8]> = minefield.iter().map(|row| row.as_bytes()).collect();

    let mut result: Vec<String> = Vec::with_capacity(rows);

    for y in 0..rows {
        let mut new_row = String::with_capacity(columns);

        for x in 0..columns {
            if grid[y][x] == b'*' {
                new_row.push('*');
                continue;
            }

            let mut count = 0;

            // check all 8 possible adjacent cells
            for dy in -1..=1 {
                for dx in -1..=1 {
                    if dy ==0 && dx==0 {
                        // skip current cel
                        continue;
                    }

                    let ny = y as i32 + dy;
                    let nx = x as i32 + dx;

                    if ny >= 0 && ny < rows as i32 && nx >= 0 && nx < columns as i32 {
                        if grid[ny as usize][nx as usize] == b'*' {
                            count += 1;
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
