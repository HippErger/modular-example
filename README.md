# Modular Example

## setup / helpers

### Logging
- `yarn add -D debug`

```javascript
// App.js

import Debug from 'debug'

const log = Debug('src:App')

// In the browser console

> localStorage.debug='src:*'

// Refresh

```

### Fetch Helpers
- grab a fetch polyfill
- `yarn add fetch-ponyfill`

```javascript
// src/helpers/api/index.js

// write fetch helpers

export const get = (url, params) =>
  fetch(url, params)
    .then(res => res.json())
    .then(res => parseResponse(res))
    .catch(error => parseError(error))

export const post = (url, params) =>
  fetch(url, {
    ...params,
    method: 'POST',
  })
    .then(res => res.json())
    .then(res => parseResponse(res))
    .catch(error => parseError(error))
```

