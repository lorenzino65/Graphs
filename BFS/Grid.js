 'use strict'
// let list = new Map([[0,[1,2]],
//         [1,[0,3]],
//         [2,[0,3,4]],
//         [3,[1,2,5]],
//         [4,[2,5]],
//         [5,[3,4]]])
// function listToMatrix(list){
//     let matrix=[]
//     for(let entry of list.entries()){
//         matrix[entry[0]] = new Array(list.size).fill(0)
//         for (let y of entry[1]){
//             matrix[entry[0]][y]=1
//         }
//     }
//     return matrix
// }

let baselevel ='S..#...\n.#...#.\n.#.....\n..##...\n#.#E.#.'
let levelChars={'#':false,'.':true,'S':'start','E':'end'}
class Level {
    constructor(plan) {
        let rows = plan.trim().split("\n").map(l => [...l]);
        this.R = rows.length;
        this.C = rows[0].length;
        this.startActors = {};
    
        this.rows = rows.map((row, y) => {
            return row.map((ch, x) => {
                let type = levelChars[ch];
                if (typeof type == "boolean") return type;
                this.startActors[type]= {'r':y,'c':x}
                return type;
            });
        });
    }
}




function solve(level){
    let lv = new Level(baselevel)
    let rq=[],
        cq=[] //q for rows and column
    let move_count =0,
        nodes_left_in_layer=1,
        nodes_in_next_layer=0,
        reached_end = false,
        visited=[]
    for (let i =0; i<lv.R;i++){
        visited.push(new Array(lv.C).fill(false))
    } 
    
    let dr =[-1,+1,0,0]
    let dc =[0,0,+1,-1]
    let sr = lv.startActors.start.r,
        sc = lv.startActors.start.c

    rq.push(sr)
    cq.push(sc)
     
    visited[sr][sc] = true
    while (rq.length>0){
        let r = rq.shift(),
            c = cq.shift()
        if (lv.rows[r][c]=='end') {
            reached_end = true
            break
        }
        let explore_neighbours =  (r,c)=>{
            for (let i =0; i<4;i++){
                let rr = r + dr[i],
                    cc = c + dc[i]
                if (rr< 0 || cc<0) {
                    
                    continue //if OoB
                }
                if (rr>=lv.R || cc>= lv.C) {
                    
                    continue //if OoB
                }
                if (visited[rr][cc]) {
                    
                    continue //if seen
                }
                if (!lv.rows[rr][cc]) {
                     
                    continue //checks if it's a rock
                }
                
                rq.push(rr)
                cq.push(cc)
                visited[rr][cc]=true
                nodes_in_next_layer++
            }
        }
        explore_neighbours(r,c)
        nodes_left_in_layer--
        if (nodes_left_in_layer== 0){
            nodes_left_in_layer= nodes_in_next_layer
            nodes_in_next_layer=0
            move_count++
        }
    }
    if (reached_end) return move_count
    return -1
}


console.log(solve(baselevel))