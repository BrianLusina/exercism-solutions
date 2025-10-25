type colors = 
  | "black"
  | "brown"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "violet"
  | "grey"
  | "white"

const COLORS = ["black" ,"brown" ,"red", "orange" ,"yellow" ,"green" ,"blue" ,"violet" ,"grey" ,"white" ]

export class ResistorColor {
  private color1: colors;
  private color2: colors

  constructor([color1, color2, ..._]: colors[]) {
    if(color1 === undefined || color2 === undefined ){
      throw new Error("At least two colors need to be present");
    }
    this.color1 = color1;
    this.color2 = color2;
  }

  value = (): number => {
    return COLORS.indexOf(this.color1) * 10 + COLORS.indexOf(this.color2)
  };
}
