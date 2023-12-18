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

  #minValue(root = this.root) {
    while (root.left != null) {
      root = root.left;
    }
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

  delete(value, root = this.root) {
    if (root === null) {
      return null;
    }
    if (root.key < value) {
      root.right = this.delete(value, root.right);
    } else if (root.key > value) {
      root.left = this.delete(value, root.left);
    } else {
      if (root.left === null) {
        root = root.right;
        return root;
      }
      if (root.right === null) {
        root = root.left;
        return root;
      }
      const minNode = this.#minValue(root.right);
      root.key = minNode.key;
      root.right = this.delete(root.key, root.right);
    }
    return root;
  }

  find(value, root = this.root) {
    if (root === null) {
      return null;
    }
    if (root.key < value) {
      root.right = this.find(value, root.right);
      return root.right;
    }
    if (root.key > value) {
      root.left = this.find(value, root.left);
      return root.left;
    }
    if (root.key === value) {
      return root;
    }
  }

  levelOrder(array = [], queue = [], root = this.root) {
    // Iteration way of levelOrder print
    if (root === null) {
      return null;
    }
    queue.push(root);
    while (queue.length > 0) {
      const current = queue[0];
      array.push(current.key);
      if (current.left != null) {
        queue.push(current.left);
      }
      if (current.right != null) {
        queue.push(current.right);
      }
      queue.shift();
    }
    return array;
  }

  inOrder(root = this.root) {
    if (root === null) return [];

    return [...this.inOrder(root.left), root.key, ...this.inOrder(root.right)];
  }
}

module.exports = Tree;
