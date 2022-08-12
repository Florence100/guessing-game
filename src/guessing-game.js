class GuessingGame {    
    constructor() {}

    //этот метод принимает минимальное и максимальное значение диапазона чисел для угадывания
    setRange(min, max) {
        this.min = min
        this.max = max 
    }
    
    midNumber;

    //этот метод возвращает кандидата решения (вы делаете предположение на основе диапазона и предыдущих предположений)
    guess(min=this.min, max=this.max) {
        let midNumber = Math.floor((min + max + 1)/2);
        return midNumber;
    }

    //этот метод вызывается, если предыдущий вызов предположения () вернул число, которое больше, чем ответ
    lower() {        
        let max = this.guess();
        let min = this.min
        this.setRange(min, max)
        this.guess(min=this.min, max=this.max)
    }

    //этот метод вызывается, если предыдущий вызов функции предположения() вернул число, которое меньше, чем ответ
    greater() {
        let min = this.guess();
        let max = this.max;
        this.setRange(min, max)
        this.guess(min=this.min, max=this.max)
    }
}


module.exports = GuessingGame;


        





