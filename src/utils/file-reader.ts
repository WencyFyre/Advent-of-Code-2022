import { readFile } from "node:fs/promises"

export const rootDir = __dirname;

export async function readText(path: string): Promise<string> {
    try {
        const data = readFile(path, { encoding: 'utf8' });
        return data;
    } catch {
        throw new Error("the file was not found on the given path: " + path)
    }
}
export async function readAllLines(path: string): Promise<string[]> {
    try {
        const data = await readFile(path, { encoding: 'utf8' });
        return (data.split(/\r?\n/));
    } catch (err) {
        throw new Error("the file was not found on the given path: " + path)
    }
}
