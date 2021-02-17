import { Builder } from "./builder";

/**
 * A director can be used to ensure the builder steps occur in a specific order
 */
export class Director {
    private builder: Builder;

    /**
     * 
     * @param builder The builder instance being constructed
     */
    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    /**
     * Product variant 1
     */
    public buildMinimalViableProduct(): void {
        this.builder.producePartA();
    }

    /**
     * Product variant 2
     */
    public buildFullFeaturedProduct(): void {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
}