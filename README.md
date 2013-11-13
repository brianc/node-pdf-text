# pdf-text

Extract text from a pdf into an array of text 'chunks'.  Useful for doing fuzzy parsing on structured pdf text.

Uses Mozilla's [pdf.js](http://mozilla.github.io/pdf.js/) via [pdf2json](https://github.com/modesty/pdf2json).

## install

```sh
$ npm install pdf-text
```

## use

```js
var pdfText = require('pdf-text')

var pathToPdf = __dirname + "/info.pdf"

pdfText(pathToPdf, function(err, chunks) {
  //chunks is an array of strings 
  //loosely corresponding to text objects within the pdf
  
  //for a more concrete example, view the test file in this repo
})

```

## api

#### pdfText(string pathToPdfFile, function callback(error, string[], object pdf2json result))

Callback receives `string[]` which is what I usually want.

Also receives the parsed pdf data structure from [pdf2json](https://github.com/modesty/pdf2json) if you want to get crazy, but it's a pretty dense and not user-friendly piece of JSON extracted from the belly of [pdf.js](http://mozilla.github.io/pdf.js/).

## license

The MIT License (MIT)

Copyright (c) 2013 Brian M. Carlson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

