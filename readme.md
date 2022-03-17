#steps to debug node app

have to start node program/server using below command

node --inspect-brk 4-bug.js

4-bug.js -> is name of file that I want to run in debug mode
it will run program in debug mode n will print below msg in console
(may be this msg would change with time)
Debugger listening on ws://127.0.0.1:9229/a84d15b2-4d0e-469d-99e2-c24c64a55634
For help, see: https://nodejs.org/en/docs/inspector

go to chrome browser and hit below url
chrome://inspect
then we can observe our node process listed in target 
click on inspect link
then it will open our code in debugging mode in chrome with debugging options. Here we can start to debug our code 

https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27



