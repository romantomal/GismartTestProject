export class ApexChart {
    constructor(
        public options: ApexOption,
        public series: ApexSeries[]
    ) {
    }
}

export class ApexOption {
    constructor(
        public chart: Chart,
        public xaxis: Xaxis
    ) {
    }
}

export class ApexSeries {
    constructor(
        public name: string,
        public data: number[]
    ) {
    }
}

export class Chart {
    constructor(
        public id: string
    ) {
    }
}

export class Xaxis {
    constructor(
        public categories: string[]
    ) {
    }
}
