export class RateConstant {
    constructor(
        public name: string,
        public id: number,
        public symbol: string
    ) {
    }
}

export class Rate {
    constructor(
        public Cur_ID: number,
        public Cur_OfficialRate: number,
        public Date: Date
    ) {
    }
}
