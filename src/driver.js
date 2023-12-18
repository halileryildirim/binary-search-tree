const Tree = require("./Tree");

const exampleArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.key}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

const tree = new Tree(exampleArray);
tree.insert(40);
tree.delete(8);
console.log(tree.find(324));
console.log(tree.levelOrder());
console.log(tree.inOrder()); // 1 3 4 5 7 9 23 40 67 324 6345
console.log(tree.preOrder()); // 9 4 1 3 5 7 67 23 40 324 6345
console.log(tree.postOrder()); // 3 1 7 5 4 40 23 6345 324 67 9
prettyPrint(tree.root);
