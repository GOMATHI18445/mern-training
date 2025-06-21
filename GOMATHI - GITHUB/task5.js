function printOneToFive() {
  let current = 1;
  function tick() {
    console.log(current);
    if (current < 5) setTimeout(tick, 1000);
    current++;
  }
  tick();
}
printOneToFive();