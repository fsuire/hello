# How to

## Make an absolute import

Since the app is designed to be run inside a container under the path `/app` whatever the environment, an absolute import can be made like this:
```javascript
import { something } from '/app/src/something'
```