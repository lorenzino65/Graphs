'use strict'
import {topsort} from './TopologicalOrder.mjs'
import dfs from "../DFS/BasicForTopological.mjs"
let g = new Map([
    ['A',[['B',3],['C',6]]],
    ['B',[['C',4],['D',4],['E',11]]],
    ['C',[['D',8],['G',11]]],
    ['D',[['E',-4],['F',5],['G',2]]],
    ['E',[['H',9]]],
    ['F',[['H',1]]],
    ['G',[['H',2]]],
    ['H',[]],
])
function SSP(g,start){
    let order = topsort(g,dfs,'A')
    let distance = new Map().set(start,0)
    let filter = false
    order.filter(s=>{
        if (s==start) filter = true;
        return filter
    }).forEach(position => {
        g.get(position).forEach(([name,weight])=>{
            let newdist = distance.get(position) + weight
            if (!distance.has(name)) distance.set(name,newdist)
            else distance.set(name,Math.min(newdist,distance.get(name)))
        })
    });
    return distance
}

console.log(SSP(g,'A'))
