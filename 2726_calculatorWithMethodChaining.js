/* 2726. Calculator with Method Chaining
 * Difficulty - Easy
 *
 * Design a Calculator class. The class should provide the 
 * mathematical operations of addition subtraction, 
 * multiplication, division, and exponentiation. 
 * 
 * It should also allow consecutive operations to be performed using method chaining. 
 * 
 * The Calculator class constructor should accept a number 
 * which serves as the initial value of result.
 * 
 * Your Calculator class should have the following methods:
 * 
 * add - This method adds the given number value to the result and returns the updated Calculator.
 * 
 * subtract - This method subtracts the given number value from the result
 * and returns the updated Calculator.
 * 
 * multiply - This method multiplies the result  by the given number value 
 * and returns the updated Calculator.
 * 
 * divide - This method divides the result by the given number value 
 * and returns the updated Calculator. If the passed value is 0, 
 * an error "Division by zero is not allowed" should be thrown.
 * 
 * power - This method raises the result to the power of the given number value 
 * and returns the updated Calculator.
 * 
 * getResult - This method returns the result.
 * 
 * Solutions within 10-5 of the actual result are considered correct.
 */


class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.result = value
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.result += value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.result -= value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.result *= value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed")
            return this
        } else {
            this.result /= value
            return this
        }
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result **= value
        return this
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.result
    }
}

// Testing

let calc1 = new Calculator(10)
let calc2 = new Calculator(2)

console.log(calc1.add(2).subtract(1).multiply(4).divide(2).getResult()) // Should be 22
console.log(calc1.subtract(-2).getResult()) // Should be 24
console.log(calc2.power(6).getResult()) // Should be 64
try {
    console.log(calc2.divide(0).getResult()) 
} catch(err) {
    console.log(err.message)
} // Should be "Division by zero is not allowed"
console.log(calc2.divide(-1).getResult()) // Should be -64