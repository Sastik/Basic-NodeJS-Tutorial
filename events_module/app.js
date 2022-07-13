// 1. Resistering for the event to be fired only  one limit using once
// 2. creat an =event  emmitter instant and resister a couple of call backs
// 3. resistering for the event with callback parameters. 


const EventEmitter = require('events');

const event = new EventEmitter();

event.on("sayMyName", () => {
    console.log('"your name is Rahul');
});
// event.on("sayMyName", () => {
//     console.log('"your name is Chandan');
// });
// event.on("sayMyName", () => {
//     console.log('"your name is Nabendu');
// });
// In this way we  can multiple event work  by only single evenet name call.
event.emit('sayMyName');



event.on('checkPage', (sc,mgs)=>{
  console.log(`status code is $(sc) and the page is ${msg}`);
})
event.emit('checkPage', 200,ok);
