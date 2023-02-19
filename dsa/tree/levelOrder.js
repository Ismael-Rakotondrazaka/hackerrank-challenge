function levelOrder(root) {
  function resolve(head) {
    let result = [];

    if (head === null) {
      return result;
    }

    const toVisit = [head];

    while (toVisit.length > 0) {
      const curr = toVisit.shift();
      result.push(curr.data);

      if (curr.left) {
        toVisit.push(curr.left);
      }

      if (curr.right) {
        toVisit.push(curr.right);
      }
    }

    return result;
  }

  const res = resolve(root);

  console.log({ res });
  return res;
}

levelOrder({
  data: 1,
  left: null,
  right: {
    data: 2,
    left: null,
    right: {
      data: 5,
      left: {
        data: 3,
        left: null,
        right: {
          data: 4,
          left: null,
          right: null,
        },
      },
      right: {
        data: 6,
        left: null,
        right: null,
      },
    },
  },
});
