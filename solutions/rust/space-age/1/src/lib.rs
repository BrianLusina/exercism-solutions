#[derive(Debug)]
pub struct Duration {
    seconds: f64
}

const EARTH_ORBITAL: f64 = 31_557_600.0;

impl From<u64> for Duration {
    fn from(s: u64) -> Self {
        Self {
            seconds: s as f64
        }
    }
}

impl From<f64> for Duration {
    fn from(s: f64) -> Self {
        Self { seconds: s }
    }
}

pub trait Planet {
    fn orbital_duration() -> Duration;

    fn years_during(d: &Duration) -> f64 {
        d.seconds / Self::orbital_duration().seconds
    }
}

pub struct Mercury;
pub struct Venus;
pub struct Earth;
pub struct Mars;
pub struct Jupiter;
pub struct Saturn;
pub struct Uranus;
pub struct Neptune;

impl Planet for Mercury {
    fn orbital_duration() -> Duration {
        Duration::from(0.2408467 * EARTH_ORBITAL)
    }
}

impl Planet for Venus {
    fn orbital_duration() -> Duration {
        Duration::from(0.61519726 * EARTH_ORBITAL)
    }
}

impl Planet for Earth {
    fn orbital_duration() -> Duration {
        Duration::from(EARTH_ORBITAL)
    }
}

impl Planet for Mars {
    fn orbital_duration() -> Duration {
        Duration::from(1.8808158 * EARTH_ORBITAL)
    }
}

impl Planet for Jupiter {
    fn orbital_duration() -> Duration {
        Duration::from(11.862615 * EARTH_ORBITAL)
    }
}

impl Planet for Saturn {
    fn orbital_duration() -> Duration {
        Duration::from(29.447498 * EARTH_ORBITAL)
    }
}

impl Planet for Uranus {
    fn orbital_duration() -> Duration {
        Duration::from(84.016846 * EARTH_ORBITAL)
    }
}

impl Planet for Neptune {
    fn orbital_duration() -> Duration {
        Duration::from(164.79132 * EARTH_ORBITAL)
    }
}
