function inOrder(root) {
  function resolve(head, res = []) {
    if (head === null) {
      return res;
    }

    res.push(head.data, ...resolve(head.left), ...resolve(head.right));
    return res;
  }

  const result = resolve(root);
  console.log({ result });
}

inOrder({
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
