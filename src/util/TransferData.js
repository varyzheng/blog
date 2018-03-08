class TransferData {
  transListToTree (data) {
    let list = []
    for (let i = 0; i < data.length; i++) {
      let node = data[i]
      if (node.parentId === 0) {
        this.addChildren(data, node)
        list.push(node)
      }
    }
    return list
  }
  addChildren (data, node) {
    if (!node.children) {
      node.children = []
    }
    for (let i = 0; i < data.length; i++) {
      let temp = data[i]
      if (temp.parentId === node.id) {
        this.addChildren(data, temp)
        node.children.push(temp)
      }
    }
  }
}
export default new TransferData()
