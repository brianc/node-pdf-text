var ok = require('okay')
var pdfText = require('../')
var assert = require('assert')

var checkResult = function() {
  it('returns array of text', function() {
    assert(require('util').isArray(this.text))
  })

  it('returns the pdf document', false, function() {
    assert(this.result)
    assert.equal(this.text.length, self.result.getText().length)
  })

  it('returns correct text', function() {
    assert.equal(this.text.indexOf('Form W-4 (2013)'), 0)
    assert(this.text.indexOf('Additional amount, if any, you want withheld from each paycheck'))
    assert(this.text.indexOf('See the instructions for your income tax return.'))
  })

  it('returns correct results per page', false, function() {
    assert.equal(this.result.getTextOnPage(0).indexOf('Additional amount, if any, you want withheld from each paycheck'), -1)
    assert(this.result.getTextOnPage(1).indexOf('See the instructions for your income tax return.'))
  })
}

describe('pdf-text', function() {
  before(function(done) {
    self = this
    pdfText(__dirname + '/w4.pdf', ok(done, function(text, res) {
      self.text = text
      done()
    }))
  })
  checkResult.call(this)
})

var fs = require('fs')
describe('pdf-text from buffer', function() {
  before(function(done) {
    var self = this
    var buffer = fs.readFileSync(__dirname + '/w4.pdf')
    pdfText(buffer, ok(done, function(text) {
      self.text = text
      done()
    }))
  })
  checkResult.call(this)
})
