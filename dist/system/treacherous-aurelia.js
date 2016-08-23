"use strict";

System.register(["treacherous-view"], function (_export, _context) {
    "use strict";

    var ViewStrategyRegistry, ViewTriggerRegistry, viewTriggerRegistry, viewStrategyRegistry;
    function configure(aurelia) {
        aurelia.globalResources("./attributes/validation-group-attribute");
        aurelia.globalResources("./attributes/view-strategy-attribute");
        aurelia.globalResources("./attributes/validate-attribute");


        aurelia.container.registerInstance(ViewStrategyRegistry, viewStrategyRegistry);
        aurelia.container.registerInstance(ViewTriggerRegistry, viewTriggerRegistry);
    }

    _export("configure", configure);

    return {
        setters: [function (_treacherousView) {
            ViewStrategyRegistry = _treacherousView.ViewStrategyRegistry;
            ViewTriggerRegistry = _treacherousView.ViewTriggerRegistry;
            viewTriggerRegistry = _treacherousView.viewTriggerRegistry;
            viewStrategyRegistry = _treacherousView.viewStrategyRegistry;
        }],
        execute: function () {}
    };
});