'use strict'

export default function dfs (at,visited,order,g){
    if (visited[at]) return; //controls if visited or not, returns if alredy seen
    visited[at]=true
    let neighbours = g.get(at)
    //goes to check every neighbour
    neighbours.forEach(element => {     
        return dfs(element,visited,order,g)        
    });
    order.unshift(at)
    return order
}
