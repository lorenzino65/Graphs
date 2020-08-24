'use strict'

let n=18, //number of nodes    
    g= new Map(), //adjacency list
    count =0, //number of connected component
    components = new Map(), //id of belonging
    visited= new Array(n).fill(false); //size n, array of True or False

g.set(0,[4,8,13,14])
g.set(1,[5])
g.set(2,[9,15])
g.set(3,[9])
g.set(4,[0,8])
g.set(5,[1,16,17])
g.set(6,[7,11])
g.set(7,[6,11])
g.set(8,[0,4,14])
g.set(9,[2,3,15])
g.set(10,[15])
g.set(11,[6,7])
g.set(12,[])
g.set(13,[0,14])
g.set(14,[0,8,13])
g.set(15,[2,9,10])
g.set(16,[5])
g.set(17,[5])
console.log(g)
function findComponent (){
    for(let i =0; i<n;i++){
        if (!visited[i]){
            count++
            dfs(i)
        }
    }
}

function dfs (at){
    visited[at]=true
    components.set(at,count)
    let neighbours = g.get(at)
    //goes to check every neighbour
    neighbours.forEach(element => {
        if (!element || visited[element])  return;
        return dfs(element)        
    });
}

findComponent()
console.log(count,components)

