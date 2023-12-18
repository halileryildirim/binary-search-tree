const Node = require("./Node");

class Tree {
  constructor(array) {
    this.root = this.#buildTree(array);
  }

  #builderRecs(arr, start, end) {
    if (start > end) {
      return null;
    }
    const mid = Math.floor((start + end) / 2);
    const node = new Node(arr[mid]);
    node.left = this.#builderRecs(arr, start, mid - 1);
    node.right = this.#builderRecs(arr, mid + 1, end);
    return node;
  }

  #buildTree(arr) {
    const sorted = [...new Set(arr)].sort((a, b) => a - b);
    const end = sorted.length;
    const root = this.#builderRecs(sorted, 0, end - 1);
    return root;
  }

  insert(value, root = this.root) {
    if (root === null) {
      root = new Node(value);
      return root;
    }

    if (root.key > value) {
      root.left = this.insert(value, root.left);
    } else if (root.key < value) {
      root.right = this.insert(value, root.right);
    } else if (root.key === value) {
      root.key = value;
    }
    return root;
  }
}

module.exports = Tree;
