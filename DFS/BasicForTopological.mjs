'use strict'

export default function dfs (key,visited,order,g,id){
    let at = id.get(key[0])
    if (visited[at]) return order; //controls if visited or not, returns if alredy seen
    visited[at]=true
    let neighbours = g.get(key[0])
    //goes to check every neighbour
    
    neighbours.forEach(element => {     
        return dfs(element,visited,order,g,id)        
    });
    
    order.unshift(key[0])
    return order
}
