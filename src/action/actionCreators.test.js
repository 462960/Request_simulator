const actionCreators = require("./actionCreators")
// @ponicode
describe("actionCreators.addLoader", () => {
    test("0", () => {
        let callFunction = () => {
            actionCreators.addLoader("Edmond", 2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            actionCreators.addLoader("George", 5.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            actionCreators.addLoader("George", 0.0001)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            actionCreators.addLoader("George", 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            actionCreators.addLoader("Michael", 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            actionCreators.addLoader(undefined, Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
