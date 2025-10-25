const GIGAMILLISECOND = 10**12

export default class Gigasecond {
    
    constructor(private readonly currentMoment: Readonly<Date>) {}

    date = (): Date => {
        return new Date(this.currentMoment.valueOf() + GIGAMILLISECOND)
    }
}