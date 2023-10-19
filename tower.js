let towerHanoi = function (n, source = 'A', helper = 'B', destination = 'C') {
    if (n == 1) {
        console.log(`Move 1st disk from ${source} to ${destination}`);
        return ;
    }
    towerHanoi(n - 1, source, destination, helper);
    console.log(`Move ${n}th disk from ${source} to ${destination}`);
    towerHanoi(n - 1, helper, source, destination);

}

console.log(towerHanoi(4, 'A', 'B', 'C'));