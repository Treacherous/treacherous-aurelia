import {createGroup, createRuleset} from "treacherous";

class ExampleModel
{
    constructor()
    {
        this.someNumber = 10;
        this.someText = "hello";
        this.someNestedObject = { someNumber: 200 };
        this.someArray = [10, 15, 30];
    }
}

export class App
{
    constructor(){
        this.model = new ExampleModel();

        var ruleset = this._generateRulesetForModel();
        this.validationGroup = createGroup(this.model, ruleset);
    }

    _generateRulesetForModel() {
        var nestedRuleset = createRuleset()
            .forProperty("someNumber")
                .addRule("maxValue", 100)
            .build();

        return createRuleset()
            .forProperty("someNumber")
                .addRule("maxValue", 20)
            .forProperty("someText")
                .addRule("required")
                .addRule("minLength", 3)
            .forProperty("someNestedObject")
                .addRuleset(nestedRuleset)
            .forProperty("someArray")
                .addRule("maxLength", 2)
                .addRuleForEach("maxValue", 20)
            .build();
    }
}