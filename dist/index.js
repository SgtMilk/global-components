

function ___$insertStyle(css) {
  if (!css) {
    return;
  }

  if (typeof window === 'undefined') {
    return;
  }

  const style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var icons = require('@material-ui/icons');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var lightGrey = "#494949";
var accentBlue = "#3C5763";
var white = "#FFFFFF";

var main = "sans-serif";

var flex = {
    display: "flex",
    flexDirection: "column",
};
var centerFlex = __assign(__assign({}, flex), { alignItems: "center", justifyContent: "center" });
var inlineFlex = {
    display: "inline-flex",
    flexDirection: "row",
};
var centerInlineFlex = __assign(__assign({}, inlineFlex), { alignItems: "center", justifyContent: "center" });

var text = function (textColor) { return ({
    color: textColor ? textColor : white,
    fontFamily: main,
    fontWeight: 600,
}); };
var formContainer = __assign({ width: "20rem" }, centerFlex);
var option = function (backgroundColor) { return (__assign({ backgroundColor: backgroundColor ? backgroundColor : lightGrey }, text)); };
var inputContainer = function (size) {
    return __assign({ marginTop: size + "rem", marginBottom: size + "rem" }, centerFlex);
};
var inputBox = function (size, backgroundColor) {
    return __assign(__assign(__assign({ backgroundColor: backgroundColor ? backgroundColor : lightGrey, paddingTop: size * 0.75 + "rem", paddingBottom: size * 0.75 + "rem", borderRadius: size * 0.5 + "rem", fontSize: size + "rem", paddingRight: size * 1.5 + "rem", paddingLeft: size * 1.5 + "rem" }, text), centerInlineFlex), { justifyContent: "flex-start" });
};
var icon = function (size, color) {
    return {
        height: size / 2 + "rem",
        width: size / 2 + "rem",
        borderRadius: size / 4 + "rem",
        border: size / 4 + "rem solid " + color,
    };
};
var visibilityIcon = function (size, color) {
    return {
        width: size + "rem",
        height: "auto",
        color: color ? color : white,
    };
};
var checkbox = function (size) {
    return {
        height: size + "rem",
        width: size + "rem",
        marginRight: size + "rem",
    };
};
var stylesheet = {
    flex: flex,
    inlineFlex: centerInlineFlex,
    text: text,
    formContainer: formContainer,
    option: option,
    inputBox: inputBox,
    icon: icon,
    inputContainer: inputContainer,
    checkbox: checkbox,
    visibilityIcon: visibilityIcon,
};

/**
 * This component will display an input for an email. It will show an indicator if the email is valid
 * @param name (string)
 * @param placeholder (string)
 * @param size (number, optional)
 * @param style (React.CSSProperties object, optional)
 * @param value (useState value)
 * @param updateValue (useState update function)
 * @constructor
 */
var BooleanInput = function (_a) {
    var name = _a.name, _b = _a.placeholder, placeholder = _b === void 0 ? "boolean" : _b, backgroundColor = _a.backgroundColor, textColor = _a.textColor, _c = _a.size, size = _c === void 0 ? 1 : _c, _d = _a.style, style = _d === void 0 ? {} : _d, value = _a.value, updateValue = _a.updateValue;
    var handleUpdate = function (e) {
        updateValue(e.target.value);
    };
    return (jsxRuntime.jsxs("div", __assign({ style: __assign(__assign({}, stylesheet.inputBox(size, backgroundColor)), style), "data-testid": "BooleanInput" }, { children: [jsxRuntime.jsx("style", { children: "\n        .input {\n          all: unset;\n        }\n      " }, void 0), jsxRuntime.jsx("input", { type: "checkbox", onChange: handleUpdate, style: __assign({ width: "100%" }, stylesheet.checkbox(size)), name: name, id: name, placeholder: placeholder, value: value, autoComplete: "off" }, void 0), jsxRuntime.jsx("label", __assign({ style: stylesheet.text(textColor) }, { children: name }), void 0)] }), void 0));
};

var BooleanInput$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BooleanInput: BooleanInput
});

/**
 * This component will display an input for an email. It will show an indicator if the email is valid
 * @param name (string)
 * @param placeholder (string)
 * @param size (number, optional)
 * @param style (React.CSSProperties object, optional)
 * @param value (useState value)
 * @param updateValue (useState update function)
 * @constructor
 */
var DateInput = function (_a) {
    var name = _a.name, _b = _a.placeholder, placeholder = _b === void 0 ? "date" : _b, backgroundColor = _a.backgroundColor, textColor = _a.textColor, _c = _a.size, size = _c === void 0 ? 1 : _c, _d = _a.style, style = _d === void 0 ? {} : _d, value = _a.value, updateValue = _a.updateValue;
    var handleUpdate = function (e) {
        updateValue(e.target.value);
    };
    return (jsxRuntime.jsxs("div", __assign({ style: __assign(__assign({}, stylesheet.inputBox(size, backgroundColor)), style), "data-testid": "DateInput" }, { children: [jsxRuntime.jsx("style", { children: "\n        .input {\n          all: unset;\n        }\n      " }, void 0), jsxRuntime.jsx("input", { type: "date", onChange: handleUpdate, style: __assign({ width: "100%" }, stylesheet.text(textColor)), name: name, id: name, placeholder: placeholder, className: "input", value: value, autoComplete: "off" }, void 0)] }), void 0));
};

var DateInput$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DateInput: DateInput
});

/**
 * This component will display an input for an email. It will show an indicator if the email is valid
 * @param name (string)
 * @param placeholder (string)
 * @param size (number, optional)
 * @param style (React.CSSProperties object, optional)
 * @param value (useState value)
 * @param updateValue (useState update function)
 * @constructor
 */
var EmailInput = function (_a) {
    var name = _a.name, _b = _a.placeholder, placeholder = _b === void 0 ? "email" : _b, backgroundColor = _a.backgroundColor, textColor = _a.textColor, _c = _a.size, size = _c === void 0 ? 1 : _c, _d = _a.style, style = _d === void 0 ? {} : _d, value = _a.value, updateValue = _a.updateValue;
    var _e = react.useState(false), errorMessage = _e[0], setErrorMessage = _e[1];
    var ValidateEmail = function (e) {
        updateValue(e.target.value);
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setErrorMessage(re.test(String(value).toLowerCase()));
    };
    return (jsxRuntime.jsxs("div", __assign({ style: __assign(__assign({}, stylesheet.inputBox(size, backgroundColor)), style), "data-testid": "EmailInput" }, { children: [jsxRuntime.jsx("style", { children: "\n        .input {\n          all: unset;\n        }\n      " }, void 0), jsxRuntime.jsx("input", { type: "email", onChange: ValidateEmail, style: __assign({ width: "100%" }, stylesheet.text(textColor)), name: name, id: name, placeholder: placeholder, className: "input", value: value, autoComplete: "off" }, void 0), jsxRuntime.jsx("div", { style: stylesheet.icon(size, errorMessage ? "limegreen" : "red") }, void 0)] }), void 0));
};

var EmailInput$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    EmailInput: EmailInput
});

/**
 * This component will display an input for a number.
 * @param name (string)
 * @param placeholder (string)
 * @param size (number, optional)
 * @param style (React.CSSProperties object, optional)
 * @param value (useState value)
 * @param updateValue (useState update function)
 * @constructor
 */
var NumberInput = function (_a) {
    var name = _a.name, _b = _a.placeholder, placeholder = _b === void 0 ? "number" : _b, backgroundColor = _a.backgroundColor, textColor = _a.textColor, _c = _a.size, size = _c === void 0 ? 1 : _c, _d = _a.style, style = _d === void 0 ? {} : _d, value = _a.value, updateValue = _a.updateValue;
    var handleUpdate = function (e) {
        updateValue(e.target.value);
    };
    return (jsxRuntime.jsxs("div", __assign({ style: __assign(__assign({}, stylesheet.inputBox(size, backgroundColor)), style), "data-testid": "NumberInput" }, { children: [jsxRuntime.jsx("style", { children: "\n        .input {\n          all: unset;\n        }\n      " }, void 0), jsxRuntime.jsx("input", { type: "number", style: __assign({ width: "100%" }, stylesheet.text(textColor)), name: name, id: name, onChange: handleUpdate, placeholder: placeholder, className: "input", value: value, autoComplete: "off" }, void 0)] }), void 0));
};

var NumberInput$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    NumberInput: NumberInput
});

/**
 * This component will display an input for a password.
 * If the parameter 'color' is not given, there will be no indicator.
 * Otherwise, it will be green for true, and red for false.
 * @param name (string)
 * @param placeholder (string)
 * @param size (number, optional)
 * @param style (React.CSSProperties object, optional)
 * @param color (boolean, optional)
 * @param value (useState value)
 * @param updateValue (useState update function)
 * @constructor
 */
var PasswordInput = function (_a) {
    var color = _a.color, _b = _a.placeholder, placeholder = _b === void 0 ? color === undefined ? "password" : "repeat password" : _b, backgroundColor = _a.backgroundColor, textColor = _a.textColor, _c = _a.size, size = _c === void 0 ? 1 : _c, _d = _a.style, style = _d === void 0 ? {} : _d, value = _a.value, updateValue = _a.updateValue;
    var _e = react.useState(false), visible = _e[0], setVisibility = _e[1];
    var handleUpdate = function (e) {
        updateValue(e.target.value);
    };
    var updateVisibility = function () {
        setVisibility(!visible);
    };
    return (jsxRuntime.jsxs("div", __assign({ style: __assign(__assign({}, stylesheet.inputBox(size, backgroundColor)), style), "data-testid": "PasswordInput" }, { children: [jsxRuntime.jsx("style", { children: "\n        .input {\n          all: unset;\n        }\n      " }, void 0), jsxRuntime.jsx("input", { type: visible ? "text" : "password", style: __assign({ width: "100%" }, stylesheet.text(textColor)), onChange: handleUpdate, placeholder: placeholder, className: "input", value: value, autoComplete: "off" }, void 0), jsxRuntime.jsxs("div", __assign({ style: stylesheet.inlineFlex }, { children: [color === undefined ? null : (jsxRuntime.jsx("div", { style: stylesheet.icon(size, color ? "limegreen" : "red") }, void 0)), jsxRuntime.jsx(Spacer, { size: size * 2 }, void 0), jsxRuntime.jsx("div", __assign({ onClick: updateVisibility, className: "input", style: stylesheet.inlineFlex }, { children: visible ? (jsxRuntime.jsx(icons.VisibilityOff, { style: stylesheet.visibilityIcon(size, textColor) }, void 0)) : (jsxRuntime.jsx(icons.Visibility, { style: stylesheet.visibilityIcon(size, textColor) }, void 0)) }), void 0)] }), void 0)] }), void 0));
};

var PasswordInput$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    PasswordInput: PasswordInput
});

/**
 * This component will display an input for an email. It will show an indicator if the email is valid
 * @param placeholder (string)
 * @param size (number, optional)
 * @param style (React.CSSProperties object, optional)
 * @param value (useState value)
 * @param updateValue (useState update function)
 * @constructor
 */
var StringInput = function (_a) {
    var _b = _a.placeholder, placeholder = _b === void 0 ? "string" : _b, backgroundColor = _a.backgroundColor, textColor = _a.textColor, _c = _a.size, size = _c === void 0 ? 1 : _c, _d = _a.style, style = _d === void 0 ? {} : _d, value = _a.value, updateValue = _a.updateValue;
    var handleUpdate = function (e) {
        updateValue(e.target.value);
    };
    return (jsxRuntime.jsxs("div", __assign({ style: __assign(__assign({}, stylesheet.inputBox(size, backgroundColor)), style), "data-testid": "StringInput" }, { children: [jsxRuntime.jsx("style", { children: "\n        .input {\n          all: unset;\n        }\n      " }, void 0), jsxRuntime.jsx("input", { type: "text", onChange: handleUpdate, style: __assign({ width: "100%" }, stylesheet.text(textColor)), placeholder: placeholder, className: "input", value: value, autoComplete: "off" }, void 0)] }), void 0));
};

var StringInput$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    StringInput: StringInput
});

/**
 * This component will display a select input
 * @param name (string)
 * @param choices (array of strings)
 * @param size (number, optional)
 * @param style (React.CSSProperties object, optional)
 * @param value (useState value)
 * @param updateValue (useState update function)
 * @constructor
 */
var SelectInput = function (_a) {
    var name = _a.name, choices = _a.choices, placeholder = _a.placeholder, backgroundColor = _a.backgroundColor, textColor = _a.textColor, _b = _a.size, size = _b === void 0 ? 1 : _b, _c = _a.style, style = _c === void 0 ? {} : _c, value = _a.value, updateValue = _a.updateValue;
    var handleUpdate = function (e) {
        updateValue(e.target.value);
        console.log(e.target.value);
    };
    return (jsxRuntime.jsxs("div", __assign({ style: __assign(__assign({}, stylesheet.inputBox(size, backgroundColor)), style), "data-testid": "SelectInput" }, { children: [jsxRuntime.jsx("style", { children: "\n        .input {\n          all: unset;\n        }\n      " }, void 0), jsxRuntime.jsxs("select", __assign({ onChange: handleUpdate, style: __assign({ width: "100%" }, stylesheet.text(textColor)), name: name, id: name, className: "input", value: value === "" ? "placeholder" : value }, { children: [jsxRuntime.jsx("option", __assign({ disabled: true, value: "placeholder", style: stylesheet.option(backgroundColor) }, { children: placeholder ? placeholder : "Choose:" }), void 0), choices
                        ? choices.map(function (choice, i) { return (jsxRuntime.jsx("option", __assign({ value: choice, style: stylesheet.option(backgroundColor) }, { children: choice }), i)); })
                        : null] }), void 0)] }), void 0));
};

var SelectInput$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SelectInput: SelectInput
});

var TYPE;
(function (TYPE) {
    TYPE[TYPE["boolean"] = 0] = "boolean";
    TYPE[TYPE["date"] = 1] = "date";
    TYPE[TYPE["email"] = 2] = "email";
    TYPE[TYPE["number"] = 3] = "number";
    TYPE[TYPE["password"] = 4] = "password";
    TYPE[TYPE["repeatedPassword"] = 5] = "repeatedPassword";
    TYPE[TYPE["select"] = 6] = "select";
    TYPE[TYPE["string"] = 7] = "string";
})(TYPE || (TYPE = {}));
/**
 * This component will display a form from an input array of wanted input fields
 * @param size (number, optional)
 * @param style (React.CSSProperties object, optional)
 * @param values (object)
 * In values:
 * @param name (string)
 * @param placeholder (string)
 * @param type (TYPE)
 * @param value (useState value)
 * @param updateValue (useState update function)
 * @constructor
 */
var FormInstance = function (_a) {
    var values = _a.values, _b = _a.size, size = _b === void 0 ? 1 : _b, _c = _a.style, style = _c === void 0 ? {} : _c;
    var DisplayForm = function (_a) {
        var values = _a.values, _b = _a.size, size = _b === void 0 ? 1 : _b, _c = _a.style, style = _c === void 0 ? {} : _c;
        return values.map(function (value, index) {
            switch (value.type) {
                case TYPE.boolean:
                    return (jsxRuntime.jsx("div", __assign({ style: stylesheet.inputContainer(size) }, { children: jsxRuntime.jsx(BooleanInput, __assign({ size: size }, value, { style: style }), void 0) }), index));
                case TYPE.date:
                    return (jsxRuntime.jsx("div", __assign({ style: stylesheet.inputContainer(size) }, { children: jsxRuntime.jsx(DateInput, __assign({ size: size }, value, { style: style }), void 0) }), index));
                case TYPE.email:
                    return (jsxRuntime.jsx("div", __assign({ style: stylesheet.inputContainer(size) }, { children: jsxRuntime.jsx(EmailInput, __assign({ size: size }, value, { style: style }), void 0) }), index));
                case TYPE.number:
                    return (jsxRuntime.jsx("div", __assign({ style: stylesheet.inputContainer(size) }, { children: jsxRuntime.jsx(NumberInput, __assign({ size: size }, value, { style: style }), void 0) }), index));
                case TYPE.password:
                    return (jsxRuntime.jsx("div", __assign({ style: stylesheet.inputContainer(size) }, { children: jsxRuntime.jsx(PasswordInput, __assign({ size: size }, value, { style: style }), void 0) }), index));
                case TYPE.repeatedPassword:
                    if (values[index - 1].type === TYPE.password) {
                        return (jsxRuntime.jsx("div", __assign({ style: stylesheet.inputContainer(size) }, { children: jsxRuntime.jsx(PasswordInput, __assign({ size: size, color: value.value === values[index - 1].value &&
                                    value.value !== "" }, value, { style: style }), void 0) }), index));
                    }
                    else
                        return null;
                case TYPE.select:
                    return (jsxRuntime.jsx("div", __assign({ style: stylesheet.inputContainer(size) }, { children: jsxRuntime.jsx(SelectInput, __assign({ size: size }, value, { style: style }), void 0) }), index));
                case TYPE.string:
                    return (jsxRuntime.jsx("div", __assign({ style: stylesheet.inputContainer(size) }, { children: jsxRuntime.jsx(StringInput, __assign({ size: size }, value, { style: style }), void 0) }), index));
                default:
                    return null;
            }
        });
    };
    return (jsxRuntime.jsx("form", __assign({ style: __assign({}, stylesheet.formContainer), onSubmit: function (event) { return event.preventDefault(); }, autoComplete: "off" }, { children: DisplayForm({ values: values, size: size, style: style }) }), void 0));
};

var FormInstance$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get TYPE () { return TYPE; },
    FormInstance: FormInstance
});

var index$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Boolean: BooleanInput$1,
    Date: DateInput$1,
    Email: EmailInput$1,
    Number: NumberInput$1,
    Password: PasswordInput$1,
    String: StringInput$1,
    Select: SelectInput$1,
    Form: FormInstance$1
});

var functionCSS$1 = {
    text: function (size) { return ({
        fontFamily: main,
        fontSize: size + "rem",
    }); },
};

/**
 * This component will display an array
 * @param value (Array of any type)
 * @param size (the size if the component, will default to 1, optional)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
var ArrayInstance = function (_a) {
    var value = _a.value, _b = _a.size, size = _b === void 0 ? 1 : _b, _c = _a.style, style = _c === void 0 ? {} : _c;
    return (jsxRuntime.jsx("ul", __assign({ style: __assign(__assign({}, functionCSS$1.text(size)), style), "data-testid": "ArrayDisplay" }, { children: value.map(function (v, index) {
            var delegateProps = {
                value: v,
                size: size,
                style: style,
            };
            return Array.isArray(v) ? (jsxRuntime.jsx("div", { children: jsxRuntime.jsx(Delegate, __assign({}, delegateProps), void 0) }, index)) : (jsxRuntime.jsx("li", { children: jsxRuntime.jsx(Delegate, __assign({}, delegateProps), void 0) }, index));
        }) }), void 0));
};

var ArrayInstance$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ArrayInstance: ArrayInstance
});

/**
 * This component will display a boolean
 * @param value (boolean)
 * @param size (the size if the component, will default to 1, optional)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
var BooleanInstance = function (_a) {
    var value = _a.value, _b = _a.size, size = _b === void 0 ? 1 : _b, _c = _a.style, style = _c === void 0 ? {} : _c;
    return (jsxRuntime.jsx("div", __assign({ style: __assign(__assign({}, functionCSS$1.text(size)), style), "data-testid": "BooleanDisplay" }, { children: "" + value }), void 0));
};

var BooleanInstance$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BooleanInstance: BooleanInstance
});

/**
 * This component will display a date
 * @param value (Date ts object)
 * @param size (the size if the component, will default to 1, optional)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
var DateInstance = function (_a) {
    var value = _a.value, _b = _a.size, size = _b === void 0 ? 1 : _b, _c = _a.style, style = _c === void 0 ? {} : _c;
    return (jsxRuntime.jsx("div", __assign({ style: __assign(__assign({}, functionCSS$1.text(size)), style), "data-testid": "DateDisplay" }, { children: value.toDateString() }), void 0));
};

var DateInstance$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DateInstance: DateInstance
});

/**
 * This component will display a number
 * @param value (number)
 * @param size (the size if the component, will default to 1, optional)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
var NumberInstance = function (_a) {
    var value = _a.value, _b = _a.size, size = _b === void 0 ? 1 : _b, _c = _a.style, style = _c === void 0 ? {} : _c;
    return (jsxRuntime.jsx("div", __assign({ style: __assign(__assign({}, functionCSS$1.text(size)), style), "data-testid": "NumberDisplay" }, { children: value }), void 0));
};

var NumberInstance$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    NumberInstance: NumberInstance
});

/**
 * This component will display a json-type object
 * @param value (json-type object)
 * @param size (the size if the component, will default to 1, optional)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
var ObjectInstance = function (_a) {
    var value = _a.value, _b = _a.size, size = _b === void 0 ? 1 : _b, _c = _a.style, style = _c === void 0 ? {} : _c;
    return (jsxRuntime.jsx("ul", __assign({ style: __assign(__assign({}, functionCSS$1.text(size)), style), "data-testid": "ObjectDisplay" }, { children: Object.entries(value).map(function (_a, index) {
            var k = _a[0], v = _a[1];
            var delegateProps = {
                value: v,
                size: size,
                style: style,
            };
            return (jsxRuntime.jsxs("li", { children: [k + ": ", jsxRuntime.jsx(Delegate, __assign({}, delegateProps), void 0)] }, index));
        }) }), void 0));
};

var ObjectInstance$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ObjectInstance: ObjectInstance
});

/**
 * This component will display a string
 * @param value (string)
 * @param size (the size if the component, will default to 1, optional)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
var StringInstance = function (_a) {
    var value = _a.value, _b = _a.size, size = _b === void 0 ? 1 : _b, _c = _a.style, style = _c === void 0 ? {} : _c;
    return (jsxRuntime.jsx("div", __assign({ style: __assign(__assign({}, functionCSS$1.text(size)), style), "data-testid": "StringDisplay" }, { children: value }), void 0));
};

var StringInstance$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    StringInstance: StringInstance
});

/**
 * This component will display of any of the following types:
 * array, boolean, Date ts object, number, json-type object, string
 * @param value (array, boolean, Date ts object, number, json-type object, string)
 * @param size (the size if the component, will default to 1, optional)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
var Delegate = function (props) {
    var type = typeof props.value;
    switch (type) {
        case "boolean":
            return jsxRuntime.jsx(BooleanInstance, __assign({}, props), void 0);
        case "number":
            return jsxRuntime.jsx(NumberInstance, __assign({}, props), void 0);
        case "string":
            return jsxRuntime.jsx(StringInstance, __assign({}, props), void 0);
        case "object":
            if (props.value instanceof Date)
                return jsxRuntime.jsx(DateInstance, __assign({}, props), void 0);
            else if (props.value instanceof Array)
                return jsxRuntime.jsx(ArrayInstance, __assign({}, props), void 0);
            else if (props.value instanceof Object)
                return jsxRuntime.jsx(ObjectInstance, __assign({}, props), void 0);
            else
                return (jsxRuntime.jsx("p", __assign({ style: { color: "red" }, "data-testid": "DelegateError" }, { children: "Invalid type" }), void 0));
        default:
            return (jsxRuntime.jsx("p", __assign({ style: { color: "red" }, "data-testid": "DelegateError" }, { children: "Invalid type" }), void 0));
    }
};

var Delegate$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Delegate: Delegate
});

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Delegate: Delegate$1,
    Array: ArrayInstance$1,
    Boolean: BooleanInstance$1,
    Date: DateInstance$1,
    Number: NumberInstance$1,
    Object: ObjectInstance$1,
    String: StringInstance$1
});

var button = function (size, backgroundColor, textColor) { return (__assign(__assign({ 
    // font stuff
    fontSize: size + "rem", color: textColor ? textColor : white, fontFamily: main, fontWeight: 650, userSelect: "none" }, centerInlineFlex), { width: "auto", height: "auto", paddingTop: size * 0.75 + "rem", paddingBottom: size * 0.75 + "rem", borderRadius: size * 0.5 + "rem", paddingRight: size * 1.5 + "rem", paddingLeft: size * 1.5 + "rem", backgroundColor: backgroundColor ? backgroundColor : accentBlue, transition: "0.3s" })); };
var hoverAnimation = "\n.buttonDarken:hover{\n  filter: brightness(0.75);\n}\n.buttonLighten:hover{\n  filter: brightness(1.5);\n}\n";

/**
 * Custom Button
 * @param onClick (callback function for clicking the button)
 * @param backgroundColor (string, optional, background color for the button)
 * @param textColor (string, optional, color of the text in the button)
 * @param hoverDarken (boolean, optional, will default to false. If true, will darken on hover, if false, will lighten on hover)
 * @param size (number, size of the component, optional)
 * @param children (child jsx components, optional)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
var Button = function (_a) {
    var onClick = _a.onClick, backgroundColor = _a.backgroundColor, textColor = _a.textColor, _b = _a.hoverDarken, hoverDarken = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? 1 : _c, children = _a.children, _d = _a.style, style = _d === void 0 ? {} : _d;
    return (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("style", { children: hoverAnimation }, void 0), jsxRuntime.jsx("div", __assign({ onClick: onClick, className: hoverDarken ? "buttonDarken" : "buttonLighten", style: __assign(__assign({}, button(size, backgroundColor, textColor)), style) }, { children: children }), void 0)] }, void 0));
};

var functionCSS = {
    box: function (size) { return ({
        width: size * 0.5 + "rem",
    }); },
};

/**
 * This component is a horizontal spacer (for buttons, for example, to not use margins).
 * Note for storybook: You obviously cannot see the spacer, but it is included here for documentation.
 * @param size (number, the width of the spacer, defaults to 1)
 * @constructor
 */
var Spacer = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 1 : _b;
    return jsxRuntime.jsx("div", { style: functionCSS.box(size) }, void 0);
};

exports.Button = Button;
exports.Display = index;
exports.Input = index$1;
exports.Spacer = Spacer;
//# sourceMappingURL=index.js.map
