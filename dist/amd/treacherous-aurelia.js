define(["exports", "treacherous-view"], function (exports, _treacherousView) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.configure = configure;
    function configure(aurelia) {
        aurelia.globalResources("./attributes/validation-group-attribute");
        aurelia.globalResources("./attributes/view-strategy-attribute");
        aurelia.globalResources("./attributes/validate-attribute");


        aurelia.container.registerInstance(_treacherousView.ViewStrategyRegistry, _treacherousView.viewStrategyRegistry);
        aurelia.container.registerInstance(_treacherousView.ViewTriggerRegistry, _treacherousView.viewTriggerRegistry);
    }
});