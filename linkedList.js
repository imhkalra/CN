class TreeNode{
    constructor(data, next = null) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    printTree(root) {
        if (root == null) return;
        if (root !== null) {
            process.stdout.write(root.data + ' : ');
            if (root.left != null) process.stdout.write('L' + root.left.data + " " );
            if (root.right != null) process.stdout.write('R' + root.right.data + " ");
        }
        console.log('');

        this.printTree(root.left, 'L');
        this.printTree(root.right, 'R');
    }

    takeTreeInput() {
        prompt('add data');
    }
}


let root = new TreeNode(1);
let left = new TreeNode(2);
let right = new TreeNode(3);
let leftRight = new TreeNode(5);
let rightLeft = new TreeNode(4);

root.left = left;
root.right = right;
left.right = leftRight;
right.left = rightLeft;

root.printTree(root);

root.takeTreeInput();


