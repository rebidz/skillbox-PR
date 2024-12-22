interface Car {
    model: string;
    price: number;
    dynamic_1: Record<string | number, string>;
    dynamic_2: {
        [key: string | number]: number;
    };
    tuple: [string, number, string];
}

const myCar: Car = {
    model: "cherry",
    price: 5,
    dynamic_1: {
        1: "1",
        2: "5",
    },
    dynamic_2: {
        "1": 1,
        2: 2,
    },
    tuple: ["string", 1, "string"],
};

type CarKey = keyof typeof myCar;

const carKeys: CarKey[] = Object.keys(myCar) as CarKey[];

console.log(carKeys);


function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: any, b: any): any {
    return a + b;
}

console.log(add(2, 3));
console.log(add("brbr ", "52"));
console.log(add("3", 22));

