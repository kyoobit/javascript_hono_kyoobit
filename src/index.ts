import { Hono } from 'hono'
import { html, raw } from 'hono/html'
const app = new Hono()

/* DISABLED as object storage is not used currently
app.get('/img/:key', async (c) => {
    const key = `img/${c.req.param("key")}`;
    const object = await c.env.R2_BUCKET.get(key);

    if (!object) return c.notFound();

    const data = await object.arrayBuffer();
    const contentType = object.httpMetadata?.contentType || '';

    return c.body(data, 200, {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
        'Cache-Control': 'max-age=31536000', // 1 year
        'Content-Type': contentType,
        'ETag': object.httpEtag,
    });
});
*/

app.get('/', (c) => {
    // https://hono.dev/docs/helpers/html
    return c.html(html`<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <link rel="canonical" href="https://www.kyoobit.net/" />
    <meta name="description" content="a basic unit in a quantum computer">
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <section style="display: flex; align-items: center; justify-content: center; font: 62.5% sans-serif;">
        <article style="margin: 18% 5%; min-width: 256px; max-width: 568px;">
            <h1 style="margin: 0 0 0.25rem 0; font-size: 2rem; font-weight: normal;">
                qubit | <strong>&#96;ky&#246;obit</strong>
            </h1>
            <p style="margin: 0;">
                <span style="color: grey; font-size: 1.1rem;">
                    Computing: (noun)
                </span>
                <span style="font-size: 1.15rem; text-align: justify;">
                    another term for a &quot;quantum bit&quot;, the basic unit of information in a quantum&nbsp;computer.
                </span>
            </p>
        </article>
    </section>
</body>
</html>`)
});

export default app