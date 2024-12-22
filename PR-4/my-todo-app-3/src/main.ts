class Stack<T> {
    private items: T[] = [];

    addDisk(item: T): void {
        this.items.push(item);
    }

    removeDisk(): T | undefined {
        return this.items.pop();
    }

    getItems(): T[] {
        return Array.from(this.items);
    }
}

let moveCount = 0;
function move<T>(from: Stack<T>, to: Stack<T>): void {
    const disk = from.removeDisk();
    if (disk !== undefined) {
        to.addDisk(disk);
    }
    moveCount++;
    printTowers();
}

function hanoi<T>(n: number, from: Stack<T>, to: Stack<T>, helperStack: Stack<T> ): void {
    if (n === 1) {
        move(from, to);
    } else {
        hanoi(n - 1, from, helperStack, to);
        move(from, to);
        hanoi(n - 1, helperStack, to, from);
    }
}


function printTowers(): void {
    console.log(`Ход ${moveCount}:`);
    console.log(`1 стержень: ${sourceTower.getItems().join(", ")}`);
    console.log(`2 стержень: ${targetTower.getItems().join(", ")}`);
    console.log(`3 стержень: ${helperTower.getItems().join(", ")}`);
    console.log("");
}

const sourceTower = new Stack<number>();
const targetTower = new Stack<number>();
const helperTower = new Stack<number>();

const disks = 3;
for (let i = disks; i > 0; i--) {
    sourceTower.addDisk(i);
}

hanoi(disks, sourceTower, targetTower, helperTower);
