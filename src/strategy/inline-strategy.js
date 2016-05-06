import {ValidationStrategy} from "./validation-strategy";
import {ClassHelper} from "../helper/class-helper"

export class InlineStrategy extends ValidationStrategy
{
    _currentCount = 1;

    _getElementValidatorId = (element) =>
    {
        if(!element.getAttribute("id"))
        { element.setAttribute("id", "unique-" + this._currentCount++); }

        return element.getAttribute('id') + "-error-container";
    };

    _createErrorElement = (message, element) =>
    {
        var errorContainerName = this._getElementValidatorId(element);
        var errorContainer = document.createElement("div");
        errorContainer.id = errorContainerName;
        errorContainer.className = "validation-error-container";
        errorContainer.textContent = message;
        element.parentElement.appendChild(errorContainer);
    };

    _removeErrorElement = function(element)
    {
        var errorContainerName = this._getElementValidatorId(element);
        var errorElement = document.getElementById(errorContainerName);

        if(errorElement) { errorElement.remove(); }
    };

    _addElementError = function(message, element)
    {
        var errorContainerName = this._getElementValidatorId(element);
        var errorContainer = document.getElementById(errorContainerName);
        if(!errorContainer)
        { this._createErrorElement(message, element); }
        else
        {
            this._removeErrorElement(element);
            this._createErrorElement(message, element);
        }
    };

    actionValidProperty = (element, property) => {
        ClassHelper.removeClass(element, "invalid");
        ClassHelper.addClass(element, "valid");
        this._removeErrorElement(element);
    }

    actionInvalidProperty = (element, property, error) => {
        ClassHelper.removeClass(element, "valid");
        ClassHelper.addClass(element, "invalid");
        this._addElementError(error, element);
    }
}