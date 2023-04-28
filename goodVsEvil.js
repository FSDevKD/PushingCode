/* 

Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

https://www.codewars.com/kata/52761ee4cffbc69732000738/train/javascript

*/

function goodVsEvil(good, evil) {
  const goodValues = [1, 2, 3, 3, 4, 10];
  const evilValues = [1, 2, 2, 2, 3, 5, 10];
  
  const goodTotal = good.split(' ').reduce((total, count, index) => total + count * goodValues[index], 0);
  const evilTotal = evil.split(' ').reduce((total, count, index) => total + count * evilValues[index], 0);
  
  if (goodTotal > evilTotal) {
    return "Battle Result: Good triumphs over Evil";
  } else if (evilTotal > goodTotal) {
    return "Battle Result: Evil eradicates all trace of Good";
  } else {
    return "Battle Result: No victor on this battle field";
  }
}
