---
id: sdk
title: DripVerse SDK
sidebar_label: 📦 SDK
hide_table_of_contents: true
---

Now that the SDK is setup, let's try to make use of it:

Import and Initialise sdk:

```js
const drip = new DripSDK($PROJECT_KEY);
```

Just check for access with:

```js
await drip.hasAccess($USER_ADDRESS, $UTILITY_ID);
```

This should give us a response on weather the particular is allowed in your designated gate or not.
