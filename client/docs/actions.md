# Actions

The actions of a component reside in its component's directory, in a file named `actions.js`.

An action is a simple function that returns an simple javascript object containing at least a type and a payload. The type should be a [constant](constants.html) from a component's `constants.js` file, and the payload can be anything.

Actions are mainly used by [side effects](side_effects.html) (which trigger them) and by [reducers](reducers.html) (which listen to them).
```javascript
import {
  SOME_ACTION_TYPE,
  SOME_OTHER_ACTION_TYPE
} from './constants'

export const getSomeAction = (payload) => ({
  type: SOME_ACTION_TYPE,
  payload
})

export const getSomeOtherAction = (payload, somethingElse) => ({
  type: SOME_OTHER_ACTION_TYPE,
  payload,
  somethingElse
})
```

And that's all.