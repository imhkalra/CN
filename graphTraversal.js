// Preorder, in which each vertex is added to the “visited” list and added to the output list BEFORE getting added to the stack
// Postorder, in which each vertex is added to the “visited” list and added to the output list AFTER it is popped off the stack
// Reverse Post-Order (also known as Topological Sort), which returns an output list that is exactly the reverse of the post-order list

const testGraph = require('./testGraph.js');

const depthFirstTraversal = (start, visitedVertices = [start]) => {
  console.log(start.data);

  start.edges.forEach((edge) => {
    const neighbor = edge.end;

    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      depthFirstTraversal(neighbor, visitedVertices);
    }
  });
};

depthFirstTraversal(testGraph.vertices[0]);



const testGraph = require('./testGraph.js');
const Queue = require('./Queue.js');

const breadthFirstTraversal = (start) => {
  const visitedVertices = [start];

  start.edges.forEach((edge) => {
    const neighbor = edge.end;

    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
    }
  })
};

breadthFirstTraversal(testGraph.vertices[0]);

