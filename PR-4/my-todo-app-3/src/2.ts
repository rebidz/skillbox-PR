interface Container<T> {
    value: T;
}

function getValue<T>(container: Container<T>): T {
    return container.value;
}

const numberContainer: Container<number> = { value: 52 };
const stringContainer: Container<string> = { value: "gufjx" };
const booleanContainer: Container<boolean> = { value: false };

console.log(getValue(numberContainer));
console.log(getValue(stringContainer));
console.log(getValue(booleanContainer));