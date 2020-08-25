Reload the latest values from database

# Usage


## Include with mixin

```js
const Reload = require('objection-reload')


class User extends mixin(Model, [Reload]) {
```


## Then


user.$reload();


# Limitations 

It will only load its own properties and not relotions 
