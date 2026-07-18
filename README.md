# IN7RUDER

Boutique offensive-security practice for organizations in Switzerland.

## Canonical site

`https://in7ruder.com`

The hosting platform must use the apex domain as its primary domain and permanently redirect `https://www.in7ruder.com/*` to the equivalent apex URL. Do not deploy with the opposite redirect because the generated canonicals and sitemap intentionally use the apex domain.

## Localized routes

- English: `/en`
- German: `/de`
- Social Engineering Readiness: `/{lang}/services/social-engineering-readiness`
- Penetration Testing: `/{lang}/services/pentesting`

The root path redirects permanently to `/en`. Language selection is explicit; there is no IP or browser-language redirect.

## Development

```bash
npm run dev
npm run lint
npm run build
```

## Release order

`sprint-2-seo-i18n` is based on `sprint-1-foundation`. Merge or pull Sprint 1 first, then Sprint 2.
