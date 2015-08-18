import {writeFileSync} from 'fs';

import renderPage from './renderPage';


export default async function renderList(entries) {
  const shortEntries = entries.map((entry) => {
    return {
      title: entry.title,
      location: entry.location,
      date: entry.date,
      slug: entry.slug,
      hasContent: entry.hasContent
    };
  });

  const data = {
    entries: shortEntries,
    hydratedEntries: {},
    hydratedList: true
  };

  await renderPage({
    data: data,
    url: '/',
    path: '_site/index.html'
  });

  const entryJson = JSON.stringify(shortEntries);
  writeFileSync('_site/entries.json', entryJson, {encoding: 'utf8'});
}
