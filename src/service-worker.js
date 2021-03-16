import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';
import { precacheAndRoute } from 'workbox-precaching';

registerRoute(({ request }) => request.mode === 'navigate', new NetworkFirst({
  cacheName: 'page'
}))

// eslint-disable-next-line no-restricted-globals
precacheAndRoute(self.__WB_MANIFEST, {
  ignoreURLParametersMatching: [/.*/]
})
