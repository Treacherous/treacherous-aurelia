export declare class ValidationStrategy {
    actionValidProperty: (element: any, property: any) => void;
    actionInvalidProperty: (element: any, property: any, error: any) => void;
}
export declare class InlineStrategy extends ValidationStrategy {
    _currentCount: number;
    _getElementValidatorId: (element: any) => string;
    _createErrorElement: (message: any, element: any) => void;
    _removeErrorElement: (element: any) => void;
    _addElementError: (message: any, element: any) => void;
    actionValidProperty: (element: any, property: any) => void;
    actionInvalidProperty: (element: any, property: any, error: any) => void;
}

export declare class ClassHelper {
    static hasClass: (element: any, className: any) => any;
    static addClass: (element: any, className: any) => void;
    static removeClass: (element: any, className: any) => void;
}

export declare function configure(aurelia: any): void;