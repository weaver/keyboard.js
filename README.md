# Keyboard.js #

This module provides friendly, cross-browser support for handling
keyboard events. Declare a virtual keyboard, bind it to an element,
and define keys some keys.

    Keyboard()
      .bind(document)
      .define({
        'Control+Alt+$': function(ev) {
          alert('Got Control+Alt+$');
        }
      });

Utilities for parsing and formatting friendly names are also
exported. This makes it easy to add configurable keyboard shortcuts to
your application.

## Installation ##

Grab a copy of `lib/keyboard.js` and add it to your project.
Keyboard.js is designed for use with an asynchronous CommonJS module
system like [Require.js][1]:

    define(['lib/keyboard'], function(Kb) {
      Kb.Keyboard()
        // methods here ...
    });

If you're not using a module system, uncomment the indicated line at
the top of the file to define `window.Kb`:

    Kb.Keyboard()
      // methods here...

## Compatibility ##

Keyboard.js has been tested in these browsers. If you experience an
error, please report it in the issue tracker.

+ IE
  - 7 / Windows Server 2003
  - 8 / Windows Server 2003
  - 8 / Windows 7 Professional 64
+ Chrome
  - 7 / Windows 7 Professional 64
  - 7 / Linux 64
+ FF
  - 3.6 / Windows Server 2003
  - 3.6 / Linux 64

## Key Names ##

Key handlers are defined using friendly names. Primary keys and
modifier keys are separated by `+`. Supported modifier keys are:
`Alt`, `Control`, and `Shift`.

Primary keys are named as they appear on the keyboard with the
exception of special keys and `+`, which is called `Plus`.

Special key names are listed in the [DOM 3 Events][2]
specification. Currently supported are:

    Backspace
    Tab
    Enter (or Return)
    Shift
    Control
    Alt
    CapsLock
    Esc
    Spacebar
    PageUp
    PageDown
    End
    Home
    Left
    Up
    Right
    Down
    Del

## API ##

These public methods are available:

**Keyboard([keys])**

Create a new keyboard instance.

**.bind(el)**
**.bind(type, el)**

Listen for keystrokes on an element. If `type` is not given, handle
`keyup` events. The keyboard works best with `keydown` or `keyup`;
support for `keypress` is untested and may behave strangely.

**.define(object)**
**.define(name, callback)**

Add new key handlers. If `object` is given, expect that it's a mapping
of `(name, callback)` items.

**.clear()**

Clear all key definitions.

**.trigger(event)**

Manually trigger a key event. This can also be used to bind the
keyboard to elements externally. For example:

    var kb = Keyboard();
    jQuery(window).keyup(kb.trigger);

**key(event)**

Convert a DOM event to a `Key` object.

**title(name)**

A shortcut for `format(parse(name))`.

**parse(name)**

Parse a friendly name into a `Key` object.

**format(key)**

Convert a `Key` object to a friendly name.

## See Also ##

+ [DOM Level 3 Events][2]
+ [Javascript Madness: Keyboard Events][3]
+ [CommonJS Asynchronous Definition][4]

[1]: http://requirejs.org/
[2]: http://www.w3.org/TR/DOM-Level-3-Events/
[3]: http://unixpapa.com/js/key.html
[4]: http://wiki.commonjs.org/wiki/Modules/AsynchronousDefinition

## License ##

Copyright (c) 2010, Ben Weaver &lt;ben@orangesoda.net&gt;
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

* Redistributions of source code must retain the above copyright
  notice, this list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright
  notice, this list of conditions and the following disclaimer in the
  documentation and/or other materials provided with the distribution.

* Neither the name of the <organization> nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT
HOLDER> BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

