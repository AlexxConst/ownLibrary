import $ from '../core';

$.prototype.addClass = function (...classNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.add(...classNames);
    }

    return this;
};

$.prototype.removeClass = function (...classNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.remove(...classNames);
    }

    return this;
};

$.prototype.toggleClass = function (classNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.toggle(classNames);
    }

    return this;
};

$.prototype.setAttr = function (attrName, value) {
    return this[0].setAttribute(attrName, value);
};

$.prototype.getAttr = function (attrName) {
    return this[0].getAttribute(attrName);
};

$.prototype.removeAttr = function (attrName) {
    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(attrName);
    }

    return this;
};
