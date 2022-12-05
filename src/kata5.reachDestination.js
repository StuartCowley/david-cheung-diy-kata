const reachDestination = (distance, speed) => {
  let dist = (Math.round((distance / speed) / 0.5) * 0.5);
  return `I should be there in ${dist} hours.`;
};

module.exports = reachDestination;
