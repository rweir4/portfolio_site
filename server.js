const express = require('express');
const path = require('path'); // Node's built-in path module
const fs = require('fs');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');
const app = express();
const port = 3000;

// Live reload: watch the built output (dist/) and index.html. Run `npm run
// watch` in another terminal so edits to src/ recompile into dist/, which then
// triggers a browser reload. `delay` guards against reloading mid-write.
const liveReloadServer = livereload.createServer({ delay: 100 });
liveReloadServer.watch([path.join(__dirname, 'dist'), path.join(__dirname, 'index.html')]);

// Inject the livereload client snippet into served HTML. Must come before the
// routes/static that serve index.html.
app.use(connectLivereload());

// Serve index.html via res.send so connect-livereload can inject its script
// (it can't rewrite streamed sendFile/static responses). Must be registered
// before express.static, which would otherwise serve index.html untouched.
const indexHtml = path.join(__dirname, 'index.html');
app.get(['/', '/index.html'], (req, res) => {
    fs.readFile(indexHtml, 'utf8', (err, html) => {
        if (err) return res.status(500).send(err.message);
        res.type('html').send(html);
    });
});

// Serve the remaining static files (dist/, images/, etc.)
app.use(express.static('.'));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
    console.log('Live reload enabled — run `npm run watch` in another terminal to auto-rebuild.');
});
