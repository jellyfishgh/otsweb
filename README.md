# otsweb
ots

```shell
npm run build
browserify ./lib/app.js -o ./public/dist/bundle.js
uglifyjs ./public/dist/bundle.js -c -o ./public/dist/bundle.min.js
```