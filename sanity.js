import { createClient } from "@sanity/client";

export const client = createClient({
    projectId:'31ql7cwb',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-04-20'
})


// export async function getFeatured() {
//     const featured = await client.fetch(`
//     *[_type == 'featured']{
//         ...,
//         restaurants[]->{
//           ...,
//           dishes[]->
//         }
//       }
//     `)
//     return featured
// }

