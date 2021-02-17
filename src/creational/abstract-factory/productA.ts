/**
 * The functionality of the product
 */
export interface AbstractProductA {
    usefulFunctionA(): string;
}

/**
 * Different implementations of the base interface
 */
export class ConcreteProductA1 implements AbstractProductA {
    usefulFunctionA(): string {
        return "A string from product A1";
    }
}

export class ConcreteProductA2 implements AbstractProductA {
    usefulFunctionA(): string {
        return "A string from product A2";
    }
}
