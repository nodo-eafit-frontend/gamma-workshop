class FigureTS {
    protected color: string;
  
    constructor(color) {
      this.color = color;
    }
  
    getArea() {
      return 'Not Available 12345';
    }
  
    getInfo() {
      return 'Not Available';
    }
  }
  
  const figure2 = new FigureTS('red');
  
  console.log(figure2.getArea());