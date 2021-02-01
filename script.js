class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear();
    }
    clear() {
this.currentOperand = ''
this.previousOperand = ''
    }
    
    delete() {
    
    }
    nextNumber(next) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== ''){
            
        }
         
        this.previousOperand = this.currentOperand
        this.currentOperand = this.previousOperand
        this.currentOperand = ''
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        let computation
        computation = prev + current
        this.currentOperand = computation
    }
    
    appendNumber (number) {

        if(number === '.' && this.currentOperand.includes('.')) return
this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    compute(){
        let score
        score = this.previousOperand + this.currentOperand
        score = this.currentOperand
        let computation
        let final
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        final = (prev + current) / current
        computation = "(" + prev +" + " + current +")" + "/" + current + "=" + final
        
        
        this.currentOperand = computation
        
      
        
    }

    update() {
this.currentOperandTextElement.innerText = this.currentOperand
this.previousOperandTextElement.innerText = this.previousOperand
    }
}



const numberButtons = document.querySelectorAll('[data-number]')
const nextButton = document.querySelectorAll('[data-next]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.update()
    })
})

  
nextButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.nextNumber(button.innerText)
        
        calculator.compute()
        calculator.update()
        clicks = new Boolean(false)
    })
})
  
equalsButton.addEventListener('click', button => {
    calculator.compute()
        calculator.update()
        
}
)

 
  
 
 