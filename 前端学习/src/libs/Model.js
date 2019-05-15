
class Model {

  data = {
    todos: [
      {
        id: 1,
        title: 'NCAA上演0.6秒罚球绝杀',
        content: "可是到了分季度看哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈红红火火恍恍惚惚红红火火恍恍惚惚呵呵呵3",
        createTime:'2019-5-12 22:57:42'
      },
      {
        id: 2,
        title: 'valar morghulis',
        content: 'Valar Dohaeris',
        createTime:'2019-5-12 22:57:43'
      }
    ],

    activeTodoId: 1

  }
  subscribeFns = []

  /**
   * 
   * @param {(d: DATA) => DATA} updateFn 
   */
  update(updateFn) {
    this.data = updateFn(this.data)
    this.notify()
  }

  notify() {
    this.subscribeFns.forEach(fn => {
      fn(this.data)
    })
  }

  /**
   * 
   * @param {(d: DATA) => void} subscribeFn 
   */
  subscribe(subscribeFn) {
    this.subscribeFns.push(subscribeFn)
    subscribeFn(this.data)
    return () => this.subscribeFns.filter(fn => fn != subscribeFn)
  }
}

export default Model