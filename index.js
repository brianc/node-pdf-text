var _ = require('lodash')
var Parser = require('pdf2json')

//clear the pdf logger
require('util')._logN = function() { }

//given a path to a pdf
//turn it into a json structure
module.exports = function(path, cb) {
  var parser = new Parser()
  parser.on('pdfParser_dataReady', function(result) {

    //attach some handy methods to the result object

    var data = result.data

    //get text on a particular page
    result.data.Pages.forEach(function(page) {
      page.getText = function() {
        return _(page.Texts).map('R').flatten().map('T').map(decodeURIComponent).value()
      }
    })

    //get text from a page by page number (0 indexed)
    result.getTextOnPage = function(number) {
      return data.Pages[number].getText()
    }

    //get all text in document
    result.getText = function() {
      return _(data.Pages).map(function(p) { return p.getText() }).flatten().value()
    }

    parser.destroy()
    return cb(null, result.getText(), result)
  })

  parser.on('pdfParser_dataError', function(err) {
    parser.destroy()
    cb(err)
  })
  parser.loadPDF(path)
}
