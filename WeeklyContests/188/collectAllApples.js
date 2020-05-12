/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
    let tree = new Tree(n);
    let visited = {}, nE = 0;
    edges.forEach(edge => tree.addEdge(edge[0], edge[1]));
    let visit = (node) => {
        visited[node] = true;
        let neigh = tree.getNeighbors(node);
        let countUpper = false;
        neigh.forEach(n => {
            if (visited[n] === undefined && visit(n)) {
                countUpper = true;
            }
        });
        if (countUpper || hasApple[node]) {
            nE++;
            return true;
        }
        return false;
    }
    visit(0);
    return nE === 0 ? 0 : (nE-1)*2;
};
class Tree {
    constructor (n) {
        this.edges = [];
    }

    addEdge (i, j) {
        if (this.edges[i] === undefined) this.edges[i] = [];
        if (this.edges[j] === undefined) this.edges[j] = [];
        this.edges[i].push(j);
        this.edges[j].push(i);
    }

    getNeighbors (i) {
        return this.edges[i];
    }
}