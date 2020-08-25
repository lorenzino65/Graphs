'use strict'
//import dfs from "../DFS/BasicForTopological.mjs"
export function topsort(algraph,dfs){
    let N = algraph.size   
    let seen = new Array(N).fill(false),
        visitedNodes=[],
        id = new Map()
    Array.from(algraph.keys()).forEach((element,i) => id.set(element,i))
    
    for (let key of algraph){
            visitedNodes =dfs(key,seen,visitedNodes,algraph,id)
    }
    return visitedNodes
}
// let g =new Map([
//     [0,[[1],[2]]],
//     [1,[[3]]],
//     [2,[[3],[5]]],
//     [3,[]],
//     [4,[[2]]],
//     [5,[[3]]]
// ])
// console.log(topsort(g))