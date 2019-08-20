export class Sample {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Sample parts: ${this.parts.join(', ')}\n`);
    }
}