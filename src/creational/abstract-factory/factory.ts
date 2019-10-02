import { AbstractProductA } from "./productA";

/**
 * The possible abstract products that the factory can build
 */
export interface AbstractFactory {
    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;
}

/**
 * The concrete factory returns instances of the concrete products.
 */
export class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

/**
 * The concrete factory returns instances of a different
 * concrete product that follows the abstract product
 */
export class ConcreteFactory2 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}