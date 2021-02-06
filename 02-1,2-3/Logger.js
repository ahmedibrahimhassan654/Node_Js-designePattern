class Logger {

    constructor() {
        this.logs = [];
    }

    get count() {
        return this.logs.length;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestamp} - ${message}`);
    }

}

// class Singlton{
//     constructor(){
//         if(!Singlton.instace){
//             Singlton.instace=new Logger()
//         }
//     }
//     getInstance(){
//         return Singlton.instace
//     }
// }

module.exports = new Logger();
