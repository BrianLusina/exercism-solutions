interface BandMap {
  [key: string]: number
}

export class ResistorColor {
  private colors: string[];
  private bandMap: BandMap = {
    "black": 0,
    "brown": 1,
    "red": 2,
    "orange": 3,
    "yellow": 4,
    "green": 5,
    "blue": 6,
    "violet": 7,
    "grey": 8,
    "white": 9
  }

  constructor(colors: string[]) {
    if(colors.length <=1 ){
      throw new Error("At least two colors need to be present");
    }
    this.colors = colors;
  }

  value = (): number => {
    return parseInt(`${this.bandMap[this.colors[0]]}${this.bandMap[this.colors[1]]}`)
  };
}
