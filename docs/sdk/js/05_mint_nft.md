---
id: custodial_mint
title: DripVerse Mint
sidebar_label: Mint
hide_table_of_contents: false
---

# Mint an NFT

This function is used to mint a new NFT token for your image without the hassle of getting any token before.

### Pre-requisites

You need to have:

- Your Image file path.

### Let's Mint

Make a JSON Object with details as follow:

```js
let mintData = {
  filePath: "PATH_TO_YOUR_IMAGE_FILE",
  name: "NFT Name",
  description: "NFT Description",
  networkId: 2
};
```

Optional:
- `description`
- `networkId` (_default 2_)

Now to mint you new NFT, simply call `drip.mint`.

```js
let mintRes = await drip.mint(mintData, userData);
console.log("mintRes:", mintRes);
```

You should get an output indicating the `nftId`. The `mintRes` above should give a response as follows:
```js
{
  id: 28,
  transactionHash: '0x6ce955757434a4a055888e96c5d3fc102d372528b73b17d3138ac91bc53aad6f',
  tokenId: 41
}
```
