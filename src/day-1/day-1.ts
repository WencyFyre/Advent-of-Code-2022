import { DaySolution } from "../daysoluton";
import { readAllLines } from "../utils/file-reader";



export class Day1 implements DaySolution {
    async partOne(): Promise<void> {
        readAllLines(`C:\\Users\\wency\\source\\repos\\Advent-of-Code-2022\\src\\day-1\\input.txt`).then((lines) => {
            let sum = 0;
            let max = 0;
            for (let i = 0; i < lines.length; i++) {
                const calory = parseInt(lines[i]);
                if (isNaN(calory)) {
                    if (sum > max) max = sum;
                    sum = 0;
                } else {
                    sum += calory;
                }
            }
            console.log("Day 1 Part 1: " + max);
        });
    }
    partTwo(): void {
        readAllLines(`C:\\Users\\wency\\source\\repos\\Advent-of-Code-2022\\src\\day-1\\input.txt`).then((lines) => {
            let sum = 0;
            const max: [number, number, number] = [0, 0, 0];
            for (let i = 0; i < lines.length; i++) {
                const calory = parseInt(lines[i]);
                if (isNaN(calory)) {
                    if (sum > max[0]) max[0] = sum;
                    else if (sum > max[1]) max[1] = sum;
                    else if (sum > max[2]) max[2] = sum;
                    sum = 0;
                } else {
                    sum += calory;
                }
            }
            console.log("Day 1 Part 2: " + (max[0] + max[1] + max[2]));
        });
    }
}
