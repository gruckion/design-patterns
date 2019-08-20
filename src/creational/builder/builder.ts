import { Sample } from "./sample";

/**
 * Buildable aspects of the Sample object
 */
export interface Builder {
    producePartA(): void;
    producePartB(): void;
    producePartC(): void;
}

/**
 * Concrete implementation of the builder
 */
export class Builder implements Builder {
    private sample: Sample;

    /**
     * Ensure we have a blank sample object
     */
    constructor() {
        this.reset();
    }

    public reset(): void {
        this.sample = new Sample();
    }

    public producePartA(): void {
        this.sample.parts.push("Part A");
    }

    public producePartB(): void {
        this.sample.parts.push("Part B");
    }

    public producePartC(): void {
        this.sample.parts.push("Part C");
    }

    /**
     * Return the build object
     */
    public getSample(): Sample {
        const result = this.sample;
        this.reset();
        return result;
    }
}