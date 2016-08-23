import {ViewStrategyRegistry, ViewTriggerRegistry, viewTriggerRegistry, viewStrategyRegistry} from "treacherous-view";

/*
export * from "./helper/class-helper";
export * from "./strategy/validation-strategy";
export * from "./strategy/inline-strategy";
export * from "./binding-behaviours/validate-binding-behaviour";*/

export function configure(aurelia) {
    //aurelia.globalResources("./binding-behaviours/validate-binding-behaviour");
    aurelia.globalResources("./attributes/validation-group-attribute");
    aurelia.globalResources("./attributes/view-strategy-attribute");
    aurelia.globalResources("./attributes/validate-attribute");
    //aurelia.globalResources("./elements/validation-summary-element");

    aurelia.container.registerInstance(ViewStrategyRegistry, viewStrategyRegistry);
    aurelia.container.registerInstance(ViewTriggerRegistry, viewTriggerRegistry);
}