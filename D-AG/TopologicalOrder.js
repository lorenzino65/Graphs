'use strict'
import {dfs} from "DFS/Basic.js"
function topsort(algraph){
    let N = algraph.size   
    let seen = new Array(N).fill(false),
        ordering = new Array(N).fill(0)
    
    for (let at = 0; at<N;at++){
        if (seen[at]=false){
            let visitedNodes = []
            dfs(at,V,visitedNodes,graph)
            for (let nodeId of visitedNodes){
                ordering.unshift(nodeId)
            }
        }
    }
    return ordering
}