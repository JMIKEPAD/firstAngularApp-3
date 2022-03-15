export class Task {
  id:string;
  name: string;
  comment?: string;

  tag?: string[];

  creationDate: Date;
  dueDate?: Date;
  doneDate?: Date;

  priority: number;
  repeat?: number;

  constructor(id: string ,name: string, priority: number = 0, creationDate?: number, doneDate?:number){
    this.name = name;
    this.priority = Task.getFirstNumber(priority);
    if (creationDate) {
      this.creationDate = new Date (creationDate);
    } else{
      this.creationDate = new Date();
    }
    this.id = id;
    if (doneDate) {
      this.doneDate=new Date (doneDate);
    }
    
    //name.split(" ")[0] + Task.generateRandom();
  }
  static getFirstNumber(fullNumber: number): number{
    const firstDigitStr = String(fullNumber)[fullNumber.toString().length-1];
    return Number(firstDigitStr);
  }
  // static generateRandom(): number{
  //   return Math.floor(Math.random() * 1000000);
  // }
}
