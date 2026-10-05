import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'sculptures',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Sculptures',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: '499ecee0-d098-5fd0-b896-0867f5949ae9',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: '4b67b99b-4bc9-5f80-b3eb-d2fe8c8f1154',
    dynasty: {
      item: 'd2379132-91f2-5a63-8508-ac615d5bf783',
      name: 'Umayyads',
    },
    timeline: {
      code: 'it',
      id: 'ita',
      country: 'Italy',
    },
    partner: {
      id: '89f613d2-8723-5be8-8e46-487f9dae46f4',
      name: 'Swiss National Museum',
      city: 'Zurich',
      country: 'Switzerland',
      objects: 2,
    },
  },
})
