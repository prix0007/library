---
id: custodial_mint
title: DripVerse Mint
sidebar_label: Mint
hide_table_of_contents: false
---

# Mint an NFT

This function is used to mint a new NFT token for your image without the hassle of getting any token before.

:::success
If you found such a use-case and we would love to learn about it. Please reach out to us at [hello@dripverse.org](mailto:hello@dripverse.org).
:::

### Pre-requisites

You need to have:

- Your `Twitter Username` or `EmailId`, for which you have access to.
- Your Image file `locally` stored

### Let's Mint

Make a JSON Object with details as follow:

```js
let mintData = {
  filePath: "PATH_TO_YOUR_IMAGE_FILE",
  name: "NFT Name",
  description: "NFT Description",
  networkId: 2,
};
let userData = {
  social: {
    email: "",
    twitter: {
      username: "0xDripVerse",
    },
  },
};
```

Now to mint you new NFT, simply call `drip.mint`.

```js
let mintRes = await drip.mint(mintData, userData);
console.log("mintRes:", mintRes);
```

You should get an output indicating the `nftId` which you can claim on dripverse. The `mintRes` should give a response as follows.

```js
{
  id: 28,
  transactionHash: '0x6ce955757434a4a055888e96c5d3fc102d372528b73b17d3138ac91bc53aad6f',
  tokenId: 41
}
```

In order to claim you newly `nftId` to your address, you can goto `https://alpha.dripverse.org/nft/NFT_ID_YOU_RECEIVED` and claim it there.

:::success
Your NFT is minted successfully.
:::
