# make sure that the cli installs correctly
npm install -g dripverse

NODE_ENV=ci dripverse state test.dripverse
