import { createDirectus, staticToken, graphql } from '@directus/sdk';

export const directus = createDirectus(process.env.API_URL as string)
  .with(staticToken(process.env.ADMIN_TOKEN as string))
  .with(graphql());
