# otsweb
ots

## 手动执行

```shell
npm run build
browserify ./lib/app.js -o ./public/dist/bundle.js
uglifyjs ./public/dist/bundle.js -c -o ./public/dist/bundle.min.js
npm start
```
## webpack

尝试使用 webpack

## gulp

还没有测试通过，需要再改写 gulpfile.js