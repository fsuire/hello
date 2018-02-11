# Constants

A component may have some constants (especially action types). These should lay in the `constants.js` file of the component:
```javascript
export const A_CONSTANT = 'A_CONSTANT'

export SOME_ACTION_TYPE = 'SOME_ACTION_TYPE'
export SOME_OTHER_ACTION_TYPE = 'SOME_OTHER_ACTION_TYPE'
```

Because they own the action types, the `constants.js` files are often used in [actions](actions.html) and [side effects](side_effects.html).

## About the action types

If an action type is named in `src/constants.js`, no prefix is required:
```javascript
const SOME_ACTION_TYPE = 'SOME_ACTION_TYPE'
```

If an action type is named in `src/SomeComponent/constants.js`, Then using the component's name as a prefix is preferred:
```javascript
const SOME_ACTION_TYPE = 'SomeComponent/SOME_ACTION_TYPE'
```

If an action type is named in `src/SomeComponent/SubComponent/constants.js`, Then using the sub-component's path as a prefix is preferred:
```javascript
const SOME_ACTION_TYPE = 'SomeComponent/SubComponent/SOME_ACTION_TYPE'
```