import { ViewStrategyRegistry, ViewTriggerRegistry, viewTriggerRegistry, viewStrategyRegistry } from "treacherous-view";

export function configure(aurelia) {
    aurelia.globalResources("./attributes/validation-group-attribute");
    aurelia.globalResources("./attributes/view-strategy-attribute");
    aurelia.globalResources("./attributes/validate-attribute");


    aurelia.container.registerInstance(ViewStrategyRegistry, viewStrategyRegistry);
    aurelia.container.registerInstance(ViewTriggerRegistry, viewTriggerRegistry);
}