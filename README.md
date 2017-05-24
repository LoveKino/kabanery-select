# kabanery-select

[中文文档](./README_zh.md)   [document](./README.md)

select widget for kabanery
- [install](#install)
- [usage](#usage)
  * [API quick run](#api-quick-run)
- [develop](#develop)
  * [file structure](#file-structure)
  * [run tests](#run-tests)
- [license](#license)

## install

`npm i kabanery-select --save` or `npm i kabanery-select --save-dev`

Install on global, using `npm i kabanery-select -g`



## usage








### API quick run



```js
let Select = require('kabanery-select')
let {mount} = require('kabanery');

let view = Select({
  options: [['a', 'option a'], ['b', 'option b']],
  selected: 'a',
  onchange: (selectItem) => {
  }
});

mount(view, document.body);

console.log(document.body.innerHTML);
```

```
output

    <script src="./asset/app.js"></script><option value="a" selected="selected">option a</option><option value="b">option b</option>

```


## develop

### file structure

```
.    
│──LICENSE    
│──README.md    
│──README_zh.md    
│──index.js    
└──package.json     
```


### run tests

`npm test`

## license

MIT License

Copyright (c) 2016 chenjunyu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
