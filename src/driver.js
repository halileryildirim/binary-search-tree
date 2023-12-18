const Tree = require("./Tree");

const randomArray = (size) =>
  Array.from({ length: size }, () => Math.floor(Math.random() * 100));

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
const array = randomArray(30);
const tree = new Tree(array);

console.log(`Balanced: ${tree.isBalanced()}`);
console.log(`Level Order: ${tree.levelOrder()}`);
console.log(`Pre Order: ${tree.preOrder()}`);
console.log(`Post Order: ${tree.postOrder()}`);
console.log(`In Order: ${tree.inOrder()}`);

for (let i = 0; i < 10; i++) {
  tree.insert(Math.floor(Math.random() * 20));
}

console.log(`Balanced: ${tree.isBalanced()}`);
tree.reBalance();
console.log(`Balanced: ${tree.isBalanced()}`);
console.log(`Level Order: ${tree.levelOrder()}`);
console.log(`Pre Order: ${tree.preOrder()}`);
console.log(`Post Order: ${tree.postOrder()}`);
console.log(`In Order: ${tree.inOrder()}`);
