class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Solution:
    def display(self, head):
        current = head
        while current:
            print(current.data, end=' ')
            current = current.next

    def insert(self, head, data):
        # Complete this method
        node = Node(data)
        if head:
            current = head
            while current.next:
                current = current.next
            current.next = node
            return head
        else:
            return node

mylist = Solution()
# T = int(input())
head = None
for i in range(3):
    # data = int(input())
    head = mylist.insert(head, i)
mylist.display(head)
