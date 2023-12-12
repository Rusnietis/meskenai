console.log('Say hi to Objects!');


    
        randomColor() {
            const randomIndex = Math.floor(Math.random() * this.constructor.colors.length);
            return this.constructor.colors[randomIndex];
        }
