import { Singleton } from "./singleton";

/**
 * Implementation logic for the singleton pattern
 * In node there is a single thread and hence concurrency access
 * is not a big problem.
 * 
 * Further to this, singletons are header to test against.
 */
const start = () => {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        console.log("The singleton works");
    } else {
        throw Error("The instance should not change.");
    }
}
