/**
* 作者 ：食草狂魔
*
* 日期 ：2018/3/27
*
* 描述 ：用户列表页
*/
<template>
  <el-main>
    <MTable :options="tableOptions" ref="myTable"></MTable>
  </el-main>
</template>
<script>
// js文件小驼峰
import userListService from 'services/user/userListService'

// Vue组件大驼峰
import MTable from '@/components/table/Table.vue'

export default {
  name: 'userList',
  components: {
    MTable
  },
  data () {
    return {
      // 数据
      userlist: [],
      // 表格配置
      tableOptions: {
        handleSelectionChange (rows) {
        },
        toolbar: []
      }
    }
  },
  created () {
    userListService().listener('events', ({ type, data, code }) => {
      if (type === 'getUserList') {
        // 接口返回之后，利用事件代理自定义处理逻辑
        debugger
      }
    })
  },
  mounted () {
    let vm = this
    let pageNo = 1
    let pageSize = 10
    let total = 400

    // 获取数据
    userListService().getUserList({
      keyword: '',
      pageNo,
      pageSize,
      total
    })
    vm.initTable(pageNo, pageSize, total)
  },
  methods: {
    initTable (pageNo, pageSize, total) {
      let vm = this

      // 查询
      let searchFun = () => {
        let keyword = vm.$refs.myTable.getRefs('keyword').$refs.input.value
        // 获取数据
        userListService().getUserList({
          keyword,
          pageNo: vm.tableOptions.pageInfo.currentPage = 1,
          pageSize: vm.tableOptions.pageInfo.pageSize,
          total
        })
      }

      // 改变pageSize事件
      let handleSizeChangeFun = (val) => {
        // 获取数据
        userListService().getUserList({
          keyword: '',
          pageNo: vm.tableOptions.pageInfo.currentPage,
          pageSize: vm.tableOptions.pageInfo.pageSize = val,
          total
        })
      }

      // 改变currentPage事件
      let handleCurrentChangeFun = (val) => {
        // 获取数据
        userListService().getUserList({
          keyword: '',
          pageNo: vm.tableOptions.pageInfo.currentPage = val,
          pageSize: vm.tableOptions.pageInfo.pageSize,
          total
        })
      }

      // 选中行事件
      let handleSelectionChangeFun = (rows) => {
        alert(`您选中了${rows.length}行`)
      }

      // 提示框接口
      // let queryStringFun = async (queryString, cb) => {
      //   let { data } = await testAPIs.test({ queryString: queryString })
      //   // ...此处二次组织cb回调函数的数据结构
      //   let datalist = userListService().getQueryStringData(data.result)
      //   cb(datalist)
      // }

      // 提示框选择事件
      let handleSelectFun = () => {
        alert('handleSelect')
      }

      vm.tableOptions = userListService({
        dataList: vm.userlist,
        pageNo: pageNo,
        pageSize: pageSize,
        total: total
      }).getTableOptions({
        searchFun: searchFun,
        handleSizeChangeFun: handleSizeChangeFun,
        handleCurrentChangeFun: handleCurrentChangeFun,
        handleSelectionChangeFun: handleSelectionChangeFun,
        handleSelectFun
      })
    }
  }
}
</script>
<style lang="less" scoped>
</style>
