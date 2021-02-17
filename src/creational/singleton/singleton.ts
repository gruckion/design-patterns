export class Singleton {

    private static instance: Singleton;

    /**
     * Use of a private constructor to prevent direct construction
     */
    private constructor() {
    }

    /**
     * Using a static factory method to get the singleton instance.
     */
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    /**
     * Business logic the purpose of the single, what it provides access to.
     */
    public doSomething() {
        console.log("Performs an action.");
    }

}
