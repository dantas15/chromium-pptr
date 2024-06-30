# chromium-pptr
Easily run chromium in any cloud

## Ideas

I've encoutered some issues when trying to deploy my [astro blog](https://dantas15.com) with vercel because Chromium can't be installed on the server when building.

In this repo I'll try to create an API that can run a chromium on the fly.

Basically that's what I need:
- [ ] I need to be able to build a docker image with all the necessary dependencies to run chromium
- [ ] I need to setup a websocket endpoint so I can connect the user to the chromium
