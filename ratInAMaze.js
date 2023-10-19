let maze = [
    [1, 1, 0],
    [0, 1, 1],
    [1, 0, 1]
]

let path = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

function solveMaze(maze, i, j, path) {
    let n = maze.length;
    if (i < 0 || i >= n || j < 0 || j >= n || maze[i][j] == 0 || path[i][j] == 1 ) {
        return false;
    }
    path[i][j] = 1;
    if (i == n - 1 && j == n - 1) {
        console.log(path)
        return true;
    }
    if (solveMaze(maze, i - 1, j, path)) return true;
    else if (solveMaze(maze, i, j + 1, path)) return true;
    else if (solveMaze(maze, i + 1, j, path)) return true;
    else if (solveMaze(maze, i, j - 1, path)) return true;
    return false;
}


console.log(solveMaze(maze, 0, 0, path));


