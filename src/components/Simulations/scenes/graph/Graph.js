export default class Graph {
  constructor() {
    this.adjList = new Map();
  }

  getNeighboursOf(vertex) {
    return this.adjList.get(vertex);
  }

  addVertex(vertex) {
    this.adjList.set(vertex, []);
  }

  hasEdge(src, dest) {
    return (
      this.adjList.has(src) &&
      this.adjList.has(dest) &&
      (this.adjList.get(src).includes(dest) ||
        this.adjList.get(dest).includes(src))
    );
  }

  addEdge(src, dest) {
    if (this.adjList.has(src) && this.adjList.has(dest)) {
      this.adjList.get(src).push(dest);
      this.adjList.get(dest).push(src);
    }
  }

  dropEdges(src) {
    this.adjList.set(src, []);
    this.adjList.forEach((val, key) => {
      if (val.includes(src)) {
        val.splice(val.indexOf(src), 1);
      }
    });
  }

  removeEdge(src, dest) {
    if (this.adjList.has(src) && this.adjList.has(dest)) {
      this.adjList.get(src).splice(this.adjList.get(src).indexOf(dest), 1);
      this.adjList.get(dest).splice(this.adjList.get(dest).indexOf(src), 1);
    }
  }
}
