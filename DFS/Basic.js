'use strict'

let n, //number of nodes    
    g, //adjacency list
    visited=[false,...false]; //size n, array of True or False


function dfs (at){
    if (visited[at]) return; //controls if visited or not, returns if alredy seen
    visited[at]=true
    let neighbours = g[at]
    //goes to check every neighbour
    neighbours.forEach(element => {     
        return dfs(element)        
    });
}

let start = 0
dfs(start)