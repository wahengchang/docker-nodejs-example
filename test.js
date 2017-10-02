

class ABC {
    funA() {
        console.log('print funA')
    }
    funB() {
        this.funA()
    }
}

const ins = new ABC()

ins.funB()