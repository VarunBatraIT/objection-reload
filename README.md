objection plugin to reload the latest values from database

# Usage

```shell
npm i -S objection-reload
```

## Include with mixin

```js
const Reload = require('objection-reload')


class User extends mixin(Model, [Reload]) {
```


## Then

```js
user.$reload();
```

# Limitations 

It will only load its own properties and not relations
