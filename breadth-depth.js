const { Queue } = require('./queue.js')

class BreadthSearch {
  constructor(graph) {
    this.queue = new Queue();
    this.graph = graph
    this.childs = []
    this.searched = []
    this.mapReverse = new Map();
    this.parent = undefined
  }

  getPathOrNull(name) {
    let person = undefined
    this.parent = name;
    this.childs = this.graph.get(name)
    for (const item of this.childs) {
      this.queue.enqueue(item)
      this.mapReverse.set(item,name)
    }
    
    
    while (!this.queue.isEmpty()) {
      
      person = this.queue.dequeue()
      this.parent = person;

      if (this.searched.indexOf(person) > -1) {
        continue;
      }
      if (this.isThePersonWeNeed(person)) {
        return {
          person: person,
          path: this.createReversePath(name,person)
        }

      } else {
        this.searched.push(person);
        let neighs = this.graph.get(person);
        for (const item of neighs) {
          this.queue.enqueue(item)
          this.mapReverse.set(item,this.parent)
        }
      }

    }
    return {
      person: undefined,
      path: undefined
    }
  }

  isThePersonWeNeed(person) {
    return person[person.length - 1] === 'm'
  }

  createReversePath(name,child){
    let myParent = undefined
    let path = child
    while(myParent != name){
      myParent = this.mapReverse.get(child);
      path = myParent.concat(`->${path}`)
      child = myParent
    }
    return path;
  }

}

module.exports = {
  BreadthSearch
}