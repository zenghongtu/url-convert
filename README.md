# url-convert

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**0 dependencies.**
Convert any URL on links, images, scripts, etc to absolute URLs in an HTML source.

## Install

```shell
npm install url-convert
```

```shell
yarn add url-convert
```

## Usage

```javascript
import urlConvert from "url-convert";

const htmlString = `<div>
    <a href="/a"></a>
    <img src="/img" alt="" />
    <script src="/script"></script>
    <link rel="stylesheet" href="./link" />
  </div>
  `;
const baseUrl = "https://zenghongtu.com";

urlConvert({ htmlString, baseUrl });
/*`<div>
    <a href="https://zenghongtu.com/a"></a>
    <img src="https://zenghongtu.com/img" alt="">
    <script src="https://zenghongtu.com/script"></script>
    <link rel="stylesheet" href="https://zenghongtu.com/link">
  </div>
  `;
*/
```

```javascript
import urlConvert from "url-convert";

const htmlString = `<div>
    <a href="/a"></a>
    <img src="/img" alt="" />
    <script src="/script"></script>
    <link rel="stylesheet" href="./link" />
  </div>
  `;
const baseUrl = "https://zenghongtu.com";
const handler = src => {
  return src + "?raw=true";
};

urlConvert({ htmlString, baseUrl, handler });
/*<div>
    <a href="https://zenghongtu.com/a?raw=true"></a>
    <img src="https://zenghongtu.com/img?raw=true" alt="">
    <script src="https://zenghongtu.com/script?raw=true"></script>
    <link rel="stylesheet" href="https://zenghongtu.com/link?raw=true">
  </div>
*/
```

## TODO

- [ ] typings
- [ ] HTML convert

## License

MIT © [zenghongtu](https://github.com/zenghongtu)
