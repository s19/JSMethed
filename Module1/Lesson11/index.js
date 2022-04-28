'use strict';

{
  const typesConsole = 'Console Types';

  //    Timer
  console.timer('StartTimer');

  console.error(typesConsole);
  console.debug(typesConsole);
  console.warn(typesConsole);
  console.info(typesConsole);
  console.trace(typesConsole);

  //    Timer
  console.timerEnd('EndTimer');
}

{
  //    Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
}
