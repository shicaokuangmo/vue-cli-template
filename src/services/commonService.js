/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2018/3/27
 *
 * 描述 ：通用业务逻辑处理类
 */
class CommonService {
  constructor (data) {
    this.data = data
    this.bus = window.Bus
  }
  _getModel (viewModel, data) {
    // 私有函数 - 组织视图模型与数据的映射关系
    let model = {}
    model[viewModel] = data
    return model
  }
  listener (eventName, callback) {
    this.bus.$on(eventName, callback)
  }
  getQueryStringData (datalist) {
    datalist.map(item => {
      item['value'] = item.categoryName
    })
    return datalist
  }
}

export default CommonService
