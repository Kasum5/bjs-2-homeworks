class AlarmClock{
  constructor(alarmCollection,timerId){
    this.alarmCollection = [];
    this.timerId;
  };

addClock(time,callback,id){
  if(id == undefined){
    throw new Error('Параметр id не передан');
  };

  if (this.timerId !== id) {
    this.timerId = id;
  } else {
      console.error('Будильник с таким id уже сушествует');  
      return;
  } ;

  let a = {
    time,
    callback,
    id
  };
  this.alarmCollection.push(a);
  return this.alarmCollection;
};

removeClock(id){
  for(let i = 0; i < this.alarmCollection.length; i++){
    if(this.alarmCollection[i].id === id){
      return delete this.alarmCollection[i]; 
    };
    return false;
  };
};

getCurrentFormattedTime(){
  let date = new Date().toLocaleTimeString().slice(0,4);
  return date;
};

start(){
  let date1 = this.getCurrentFormattedTime;

  function checkClock(clock) {
    if(date1() === clock.time) {
      clock.fn();
    };
    if(this.timerId === null) {
      this.timerId = setInterval(() => {this.alarmCollection.forEach(item => checkClock(item))}, 1000)}; 
  };
  return checkClock('09:00',() => console.log('Пора вставать'),1);
}

stop(){
  if(this.timerId == id){
    clearInterval(this.timerId);
    this.timerId = null;
  };
  
};

printAlarms(){
  let number = 0;
  this.alarmCollection.forEach((element) => {
    number++
  });
  console.log (`Печать всех будильников в количестве: ${number}`);
  for(let i = 0; i < this.alarmCollection.length; i++){
    console.log (`Будильник №${this.alarmCollection[i].id} заведен на ${this.alarmCollection[i].time}`);
  };
};

clearAlarms(){
  //console.log(clearInterval(id));
  let removal = this.alarmCollection.splice();
  return removal;
};
}