// Code your solution in this file!
function distanceFromHqInBlocks (distance){
    return Math.abs(distance - 42)}
distanceFromHqInBlocks ()

//distance from hq in feet

function distanceFromHqInFeet (dist){
    return Math.abs(dist-42) * 264
}
distanceFromHqInFeet()

//distance travelled in feet

function distanceTravelledInFeet (start, destination){
    return Math.abs(destination-start) * 264
    }


function calculatesFarePrice (start, destination){
  const distance =  Math.abs(destination - start) * 264
  let fare
  if (distance <= 400){
    return fare = 0
  }
  else if (distance > 400 && distance < 2000){
    return fare = (distance - 400) * 0.02
  }
  else if (distance > 2000 && distance <= 2500){
    return fare = 25
  }
  else return 'cannot travel that far'
}
calculatesFarePrice()