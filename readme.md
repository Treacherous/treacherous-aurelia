# Treacherous-Aurelia

[![Join the chat at https://gitter.im/grofit/treacherous](https://badges.gitter.im/grofit/treacherous.svg)](https://gitter.im/grofit/treacherous?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Treacherous plugin for aurelia which allows treacherous validation to hook into the view.

It is very much like the knockout one but tries to work similarly to aurelia's new validation system 
wherever possible.

(See more about Treacherous [HERE](https://github.com/grofit/treacherous))

## Installing

### Via JSPM

Just do an `jspm install npm:treacherous-aurelia`

## How do I use it

Once you have installed it you should have access to the `treacherous-aurelia` module, and the `treacherous` 
module (which is a dependency of `treacherous-aurelia`. You should use `treacherous` as normal to make 
your groups and rulesets etc, like:

```
import {createGroup, createRuleset} from "treacherous";

var model = ...;
var ruleset = createRuleset()...build();
var validationGroup = createGroup(model, ruleset);
```

The aurelia plugin here is purely just for letting aurelia know about the treacherous system so for aurelia
to be aware of your validation groups etc you need to add the plugin to aurelia in your setup, like so:

```js
export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('treacherous-aurelia'); // THIS MAGIC HERE
}
```

Then you need to specify what you want to validate:

```html
<input value.bind="someValue & validate"/>
```

or if you want to manually specify what you want to validate

```html
<input value.bind="someValue" validate-property="someValue"/>
```

or if you need to do anything complex go for:

```html
<input value.bind="someValue" validate-property.bind="'someArray[' + $index + ']'"/>
```

Here is an example of what it does and how to use it, feel free to look at the source in the examples folder.
[View Example](https://rawgithub.com/grofit/treacherous-aurelia/master/examples/index.html)

## Available Attributes/Elements/Binding Behaviours

This adds a few custom attributes/elements for you to consume to allow your `validationGroup` instances to be used within the view.

### `validate` binding behaviour

This will attempt to automatically resolve the property you wish to bind to and will use the default  registered 
validation strategy to process it. If it is something complex, like nested properties or arrays you may need
to use one of the complex binding attributes.

#### Usage
```html
<input value.bind="someValue & validate"/>
```

### `validation-group` Attribute

This binding is very much like a `with` binding, where it provides the validation group to the child bindingContext
scopes.

#### Basic Usage
```html
<section validation-group.bind="someValidationGroup">...</section>
```

### `validate-property` Attribute

This binding is for manually showing property errors, you can put this anywhere and it will automatically populate
the errors for that property into the element you are using.

#### Basic Usage
```html
<div validate-property="someProperty"></div>
```

Remember you want to pass the string literal for the property, you can bind complex logic if you are
within a complex scenario like a repeat etc.

### `validation-summary` Element

This binding populates the element with a validation summary showing all current errors for the model.

#### Basic Usage
```html
<!-- Assuming a validationGroup is in scope -->
<validation-summary></validation-summary>
```

#### Advanced Usage
```html
<validation-summary validation-group.bind="someValidationGroup"></validation-summary>
```

You can use this element anywhere on the page regardless of if it is within the scope of a `validation-group` container, 
this way if you have multiple validators on the page you can have them all be output in one place.

## Styling

By default there is no styling, as its up to you really how you want to style your inline/summary errors, 
there are some classes which are appended by default which should target in your css:

- **.valid** : When a the property associated is valid (you would probably do `input.valid` in most cases) 
- **.invalid** : When the property associated is invalid (you would probably do `input.invalid` in most cases)
- **.validation-error-container** : The element containing an inline error for a property
- **.validation-summary-container** : The element containing the validation summary elements

These classes are defined within the default `InlineValidator` as well, `ValidationSummaryElement`, so if 
you use your own implementations here you can define any classes you want.

## Extending

### Custom Strategy

Out of the box there is an inline strategy which can be replaced quite easily by replacing the current 
strategy in the DI container, like so:

```js
import {ValidationStrategy} from "treacherous-aurelia";
import {YourStrategy} from "wherever";

aurelia.container.registerInstance(ValidationStrategy, new YourStrategy());
```

## Webpack Users!

So if you are using webpack bundler for Aurelia you need to make sure in your webpack config file that 
where you have the `new AureliaWebpackPlugin()` call you add this in as a sub module like so:

```
new AureliaWebpackPlugin({
    nameExternalModules: false
}),
```

And your package.json like this:

```
"aurelia": {
    "build": {
        "resources": [
            "treacherous-aurelia"
        ]
    }
},
```

This will solve any of the `globalResources` calls which fail to resolve, same is needed for any other 
aurelia plugins you want to consume in your webpack project.

## TODO

So currently this is a bare bones implementation as the knockout version does a lot more for you,
such as automatic validation hooking on `value` and `textInput` bindings. So going forward
there should be some way to achieve the same thing within Aurelia but it is often difficult
to get targetted information from the Aurelia team while they are moving towards a major RC.

* There has been a minor update to allow for basic auto binding via the `validate` binding behaviour
