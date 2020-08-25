'use strict'
import dfs from "../DFS/BasicForTopological.mjs"
export function topsort(algraph){
    let N = algraph.size   
    let seen = new Array(N).fill(false),
        visitedNodes=[],
        id = new Map()
    Array.from(g.keys()).forEach((element,i) => id.set(i,element))
    
    for (let at = 0; at<N;at++){
        if (seen[at]==false){ 
            visitedNodes =dfs(at,seen,visitedNodes,algraph,id)
        }
    }
    return visitedNodes
}
let g =new Map([
    [0,[[1],[2]]],
    [1,[[3]]],
    [2,[[3],[5]]],
    [3,[]],
    [4,[[2]]],
    [5,[[3]]]
])
console.log(topsort(g))