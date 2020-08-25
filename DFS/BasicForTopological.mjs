'use strict'

export default function dfs (at,visited,order,g,id){
    if (visited[at]) return; //controls if visited or not, returns if alredy seen
    visited[at]=true
    let neighbours = g.get(id.get(at))
    //goes to check every neighbour
    neighbours.forEach(element => {     
        return dfs(element[0],visited,order,g,id)        
    });
    order.unshift(at)
    return order
}
