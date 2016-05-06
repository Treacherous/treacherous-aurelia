export class ValidationStrategy
{
    actionValidProperty = function(element, property) {
        throw new Error("Must override method");
    }

    actionInvalidProperty = function(element, property, error) {
        throw new Error("Must override method");
    }
}
