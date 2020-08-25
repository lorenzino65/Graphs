'use strict'

// let n, //number of nodes    
//     g, //adjacency list
//     visited=[false,...false]; //size n, array of True or False


function dfs (at,n,order,g){
    if (visited[at]) return; //controls if visited or not, returns if alredy seen
    visited[at]=true
    order.push(at)
    let neighbours = g[at]
    //goes to check every neighbour
    neighbours.forEach(element => {     
        return dfs(element,n,order,g)        
    });
    return order
}




