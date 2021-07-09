//the Fizz-Buzz problem without using modulo function

for(i=1;i<=100;i++)
{
  p=i/15
  q=i/5 
  r=i/3 
  
  if(Number.isInteger(p))
  {
    console.log("FizzBuzz")
  }
  else if(Number.isInteger(q))
  {
    console.log("Buzz")
  }
  else if(Number.isInteger(r))
  {
    console.log("Fizz")
  }
  else console.log(i)
}
