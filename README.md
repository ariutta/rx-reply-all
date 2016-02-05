# rx-thenable
Patches [RxJS](https://github.com/Reactive-Extensions/RxJS) to allow `Observables` to be consumed as `Promises`:

```js
var Rx = require('rx');
require('rx-thenable');

Rx.Observable.range(0, 5).then(function(result) {
    // on result
  }, function(err) {
    // on err
  });
```

This functionality is only made available if the environment supports Promises/A+ conformant promises.
