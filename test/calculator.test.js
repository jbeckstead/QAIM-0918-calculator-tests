import assert from 'assert'
import Calculator from '../src'

describe('Calculator', () => {

  it('add two positive numbers together', () => {
    // Arrange
    const x = 1
    const y = 1

    // Act
    const result = Calculator.add(x, y)

    // Assert
    assert.equal(result, 2)
  })


  // Testing for over exposure from the src/index.js file.
  // The js file doens't export the add function by default, and we must make it export in the export default
  // Use this test when you have developers that over expose things, "Protect the privates"
  // it(`does not expose the add function without the default`, () => {
  //   assert.fail(add(1, 2))
  // })
});