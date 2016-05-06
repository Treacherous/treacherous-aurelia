import {ValidationStrategy} from "./strategy/validation-strategy";
import {InlineStrategy} from "./strategy/inline-strategy";

export {ValidationStrategy} from "./strategy/validation-strategy";

export function configure(aurelia) {
    aurelia.globalResources("./attributes/validation-group-attribute");
    aurelia.globalResources("./attributes/validation-options-attribute");
    aurelia.globalResources("./attributes/validate-property-attribute");
    aurelia.globalResources("./elements/validation-summary-element");

    aurelia.container.registerInstance(ValidationStrategy, new InlineStrategy());
}