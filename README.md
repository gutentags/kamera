
# Kamera

The kamera is a singleton that ensures that only one component has focus.
When a component takes the focus, the kamera blurs the prior focal component
and stores the new focal component to be blurred later.

For [Guten Tag][] components, the kamera is a dependency we inject at the root
scope to be shared by all child components and all their widgets.

[Guten Tag]: https://github.com/

```js
var Kamera = require("kamera");
var Scope = require("gutentag/scope");
var scope = new Scope();
scope.attention = new Kamera();
```

Then, each widget in the application many use `attention.takeFocus(this)` in its
focus method to ensure that `component.blur` is called on the prior focal
component whenever it takes the focus.

```js
function Widget(body, scope) {
    this.attention = scope.attention;
}

// ...

Widget.prototype.focus = function focus() {
    this.element.classList.add('focus');
    this.attention.takeFocus(this);
};

// This can be called manually, or implicitly called by the focus method of
// another component by way of attention.takeFocus.
Widget.prototype.blur = function blur() {
    this.element.classList.remove('focus');
};
```

## License and Copyright

Copyright (c) 2015 by Kristopher Michael Kowal and contributors.
MIT License.
