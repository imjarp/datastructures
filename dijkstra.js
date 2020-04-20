class Dijkstra {

  constructor(graph, costs, parents) {
    this.graph = graphs
    this.costs = costs
    this.parents = parents
    this.processed = []
    this.node = undefined
  }


  run() {
    
    this.node = this.findLowestCost(this.costs)
    let cost = Infinity
    let neighs = undefined
    let newCost = undefined
    while(this.node != undefined){
      cost = this.costs[this.node];
      neighs = this.graph.get(this.node);
      for (const key of neighs.keys) {
        newCost = cost + this.neighs.get(key)
        if(this.costs.get(key) > newCost ){
          this.costs.set(key,newCost);
          this.parents.set(key,this.node)
        }
      }
      this.processed.push(this.node);
      this.node = this.findLowestCost(this.costs);
    }
  }

  findLowestCost(costs) {
    lowestCost = Infinity
    lowestCodeNode = undefined
    let cost = Infinity
    for (const key in costs.keys) {
      cost = costs.get(key)
      if (cost < lowestCost && this.processed.indexOf(key) === -1) {
        lowestCost = cost;
        lowestCodeNode = key
      }
    }
    return lowestCodeNode
  }

}

module.exports = {
  Dijkstra
}