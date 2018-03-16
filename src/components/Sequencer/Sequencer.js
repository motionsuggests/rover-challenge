class Sequencer {
    
    constructor() {
        this.sequence = null;
        this.currentStep = null;
    }
    
    start(sequence) {
        this.sequence = sequence;
        this.currentStep = 0;
    }

    next() {
        let nextStep = this.currentStep += 1;

        if (nextStep >= this.sequence.length ) {
             return 'Sequence Complete';
         }

        this.currentStep = nextStep;

        return this.currentStep;
    }

    get getStep(){
        return this.sequence[this.currentStep];
    }
    
  }

export { Sequencer as default}
