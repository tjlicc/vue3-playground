# Vue3特性展示

本项目用于展示vue3下的一些特性，后续可以作为其他项目的代码参考

## 推荐的IDE配置

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## 本地预览部署效果

运行`npm run serve`之前一定要运行`npm run build`，以保证项目根目录下存在`dist`目录，否则无法看到预期的效果。此外，运行`npm run serve`之前最好还要在`vite.config.ts`中配置了`preview`，否则在一些系统上可能会无法看到预期的效果（mac上5000端口可能被系统进程占用，如果不配`preview`，vite不会自动更换端口号，导致最终页面无法访问）
