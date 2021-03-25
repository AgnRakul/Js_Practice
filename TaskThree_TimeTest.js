function time(x,y)
{
  let HourMintines = [x,y]
  let hours = Number(HourMintines[0]);
  let minutes = Number(HourMintines[1]);

  if(minutes > 0 && minutes < 59) 
  { 
    minutes = Number(minutes) + 25;
  }

  if(minutes > 59) 
  {
    hours = hours + 1;
    minutes = minutes - 60;
  }

  if (hours >= 23) 
  {
    hours = hours - 24;
  }

  if(hours == 0) 
  {
    hours = hours + 1;
  }

  console.log(hours,minutes);

}
time('13','20');