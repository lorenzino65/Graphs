'use strict'

let n=18, //number of nodes
    g// adjacency list

function bfs(s,e){
    let prev = solve(s)  //bfs at the start

    return reconstructPath(s,e,prev)  //return the shortest path from s to e
}

function solve(s){
    let q = []; //datastructure
    q.push(s)

    let visited = new Array(n).fill(false)
    visited[s]=true

    let prev = new Array(n).fill(null) //or map   it takes the history of the previous block
    while(!_.isEmpty(q)){
        node = q.shift()
        let neighbours = g.get(node)

        neighbours.forEach(next => {
            if (!visited[next]){
                q.push(next)
                visited[next]=true
                prev[next]=node
            }    
        });
    }
    return prev
}

function reconstructPath(s,e,prev){

    let path=[]
    for(let at =e; at !=null; at = prev[at]){
        path.push(at)
    }
    path.reverse()

    if (path[0]==s) return path
    return []

}