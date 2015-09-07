"use strict";

module.exports = Kamera;

function Kamera() {
    this.subject = null;
}

Kamera.prototype.takeFocus = function (subject) {
    if (this.subject && this.subject.blur) {
        this.subject.blur();
    }
    this.subject = subject;
};
