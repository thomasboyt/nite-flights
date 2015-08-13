This is an attempt at letting you make a sort of digital scrapbook out of various social media postings and other media you have. Currently it just supports tweets. I made it so I could track all the concerts I've been to, so it's 100% geared for that at the moment, but in the future might be made more generic.

For an example site built with this tool, see [the source for loudplaces.disco.zone](https://github.com/thomasboyt/loudplaces.disco.zone).

Instead of traditional templates, nite-flights are built with React components, which are both rendered to static files and used to add interactivity to the client. When a user loads a nite-flights page, they initially get the static-rendered file, then React kicks in once loaded.
