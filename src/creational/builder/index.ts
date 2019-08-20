import { Builder } from "./builder";
import { Director } from "./director";

(() => {
    // Using the builder
    const builder = new Builder();
    builder.producePartA();
    builder.producePartC();
    builder.getSample().listParts();

    // Parsing the builder instance to the director andhaving it initiate the Product
    const director = new Director();
    director.setBuilder(builder);

    director.buildMinimalViableProduct();
    builder.getSample().listParts();

    director.buildFullFeaturedProduct();
    builder.getSample().listParts();
})();