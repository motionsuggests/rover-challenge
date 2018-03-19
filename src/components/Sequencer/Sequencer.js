class Sequencer {
    
    constructor() {
        this.sequence = null;
        this.currentStep = null;
    }
    
    start(sequence) {
        this.sequence = sequence;
        this.currentStep = 0;
    }

    stop() {
        this.sequence = null;
        this.currentStep = null;
    }

    next() {
        let nextStep = this.currentStep += 1;

        this.currentStep = nextStep;

        return this.currentStep;
    }

    get getStep(){
        return this.sequence[this.currentStep];
    }
    
  }

export { Sequencer as default}
