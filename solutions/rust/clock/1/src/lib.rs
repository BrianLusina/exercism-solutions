use std::fmt::{Display, Error, Formatter};

#[derive(Clone, Debug, Eq, Ord, PartialEq, PartialOrd)]
pub struct Clock {
    minutes: i32,
}

impl Clock {
    pub fn new(hours: i32, minutes: i32) -> Self {
        Self::build(hours * 60 + minutes)
    }

    fn build(minutes: i32) -> Self {
        let mut mins = minutes;
        while mins < 0 {
            mins += 1440;
        }

        Clock {
            minutes: mins % 1440,
        }
    }

    pub fn add_minutes(&self, minutes: i32) -> Self {
        Self::build(self.minutes + minutes)
    }
}


impl Display for Clock {
    fn fmt(&self, f: &mut Formatter) -> Result<(), Error> {
        let hours = self.minutes / 60;
        let minutes = self.minutes % 60;
        write!(f, "{:02}:{:02}", hours, minutes)
    }
}
