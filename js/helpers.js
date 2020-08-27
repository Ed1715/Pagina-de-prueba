// Genera un numero al azar.io
let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
  }
  
  // Teorema pitagoras
  let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
  }
  
  // If statement
  let getDistanceHint = distance => {
    if (distance < 30) {
      return "Ya casi!";
    } else if (distance < 40) {
      return "Muy cerca";
    } else if (distance < 60) {
      return "Casi";
    } else if (distance < 100) {
      return "Cerca";
    } else if (distance < 180) {
      return "Lejos";
    } else if (distance < 360) {
      return "Muy Lejos";
    } else {
      return "En china";
    }
  }