import { createClient } from '@sanity/client'
import imageUrlBuilder from "@sanity/image-url";


export const client = createClient({
    projectId: 'lygwefxu',
    dataset: 'production',
    apiVersion: 'v2021-10-21',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true,
})

// export default client

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    return builder.image(source);
};