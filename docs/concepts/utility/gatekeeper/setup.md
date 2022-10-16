---
id: setup
title: Gatekeeper Setup
sidebar_label: Setup
hide_table_of_contents: true
---

# Project
Project is your project for which you would want to engage Gatekeeper. Each project will have a unique key generated which gives your project access via the DRIP SDK.

Find your Project Key and Utility ID from Utility Page.

![Utility Config](/docs/assets/examples/utility-config.png "Utility Config")

Now, we need the DripVerse SDK. Currently, we support only javascript sdk, so you need to fetch from [Node Package Manager](https://www.npmjs.com/package/dripverse).

Install the package from your app root: `npm install dripverse --save` which should install it in your project. Make sure your node version is above `16.x.x`.
