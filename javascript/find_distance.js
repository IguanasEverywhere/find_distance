function findDistance(graph, vertexA, vertexB) {
  let queue = graph[vertexA];
  let count = 1;

  let visited = [vertexA];

  while (queue.length > 0) {
    if (queue.includes(vertexB)) {
      return count;
    } else {

      count++;

      let nextItems = [];
      let prevLength = queue.length;

      for (let item of queue) {
        for (let v of graph[item]) {
          if (v === vertexB) {
            return count;
          }
          if (!visited.includes(v)) {
            nextItems.push(v);
            visited.push(v);
          }
        }
      }

      queue = queue.concat(nextItems);

      for (let i = 0; i < prevLength; i++) {
        queue.shift();
      }
    }
  }
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  const graphSmall = {
    jan: ["john", "jambaby"],
    john: ["carl"],
    jambaby: [],
    carl: ["jambaby"],
    dave: []
  };

  const graphMed = {
    jan: ["cranberry", "jamboree"],
    john: ["jambaby"],
    jambaby: ["jan", "cranberry"],
    carl: [],
    dave: ["john", "carl"],
    cranberry: [],
    hamtaro: ["jambaby", "dave"],
    jamboree: ["carl", "john"]
  };

  console.log("Expecting: 4");
  console.log(findDistance(graphMed, "jan", "jan"));

  console.log("");
}

module.exports = findDistance;

// Please add your pseudocode to this file
// And a written explanation of your solution
