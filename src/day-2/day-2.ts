import { DaySolution } from "../daysoluton";
import { readAllLines } from "../utils/file-reader";



export class Day2 implements DaySolution {
    async partOne(): Promise<void> {
        readAllLines(`C:\\Users\\wency\\source\\repos\\Advent-of-Code-2022\\src\\day-2\\input.txt`).then((lines) => {
            let sum = 0;
            lines.forEach(line => {
                const choises = this.lineToChoises(line);
                sum += this.getRockPaperResult(choises[0], choises[1])
            })
            console.log("Day 2 Part 1: " + sum);
        });
    }
    partTwo(): void {
        readAllLines(`C:\\Users\\wency\\source\\repos\\Advent-of-Code-2022\\src\\day-2\\input.txt`).then((lines) => {
            let sum = 0;
            lines.forEach(line => {
                const choises = this.lineToChoises(line);
                sum += this.getRockPaperResultsBasedOnOutcome(choises[0], choises[1])
            })
            console.log("Day 2 Part 2: " + sum);
        });
    }

    private getRockPaperResult(opponent: "A" | "B" | "C", you: "X" | "Y" | "Z"): number {
        const lose = 0;
        const draw = 3;
        const win = 6;
        const rock = 1;
        const paper = 2;
        const scissors = 3
        if (opponent == 'A') { //rock
            if (you == 'X') return draw + rock;
            else if (you == 'Y') return win + paper;
            else return lose + scissors;
        }
        else if (opponent == 'B') { //paper
            if (you == 'X') return lose + rock;
            else if (you == 'Y') return draw + paper;
            else return win + scissors;
        }
        else { //scissors
            if (you == 'X') return win + rock;
            else if (you == 'Y') return lose + paper;
            else return draw + scissors;
        }
    }
    private getRockPaperResultsBasedOnOutcome(opponent: "A" | "B" | "C", outcome: "X" | "Y" | "Z"): number {
        const lose = 0;
        const draw = 3;
        const win = 6;
        const rock = 1;
        const paper = 2;
        const scissors = 3
        if (opponent == 'A') { //rock
            if (outcome == 'X') return lose + scissors;
            else if (outcome == 'Y') return draw + rock;
            else return win + paper;
        }
        else if (opponent == 'B') { //paper
            if (outcome == 'X') return lose + rock;
            else if (outcome == 'Y') return draw + paper;
            else return win + scissors;
        }
        else { //scissors
            if (outcome == 'X') return lose + paper;
            else if (outcome == 'Y') return draw + scissors;
            else return win + rock;
        }
    }

    private lineToChoises(line: string): ["A" | "B" | "C", "X" | "Y" | "Z"] {
        const choices = line.split(" ");
        let opponent: "A" | "B" | "C";
        let you: "X" | "Y" | "Z";
        if (choices[0] == "A") opponent = "A";
        else if (choices[0] == "B") opponent = "B";
        else opponent = "C";
        if (choices[1] == "X") you = "X";
        else if (choices[1] == "Y") you = "Y";
        else you = "Z";
        return [opponent, you];
    }
}
