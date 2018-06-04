# 2018/03/13   v1.1.8
               static文件夹删除jquery.min.js、notice.js、.gitkeep等无用文件
# 2018/03/27   v1.1.9
               element-ui 版本从v2.0.4更新至v2.2.2
# 2018/03/27   v1.1.9
               删除公共组件TreeBar, el-tree可以满足需求无需封装
# 2018/03/30   v1.2.0
               apiUtils工具函数类加入，接口全局参数统一由config配置类加载
# 2018/04/13   v1.2.1
               加入ESLint模块规范代码
# 2018/04/18   v1.2.1
               加入eslint-loader模块、eslint-friendly-formatter模块配合webpack做代码检查
               加入babel-eslint模块，对Babel解析器的包装使其与 ESLint 兼容
# 2018/04/19   v1.2.1
               加入standard风格代码规范验证
               https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md
               加入eslint-plugin-vuefix自动修复vue代码规范错误
               加入命令 npm run lint 自动修复简单的代码规范问题
# 2018/06/04   v1.2.3
               修改services层解藕是图层与接口层
               加入window.Bus监听接口回调, 辅助完成页面数据绑定
               所有接口返回的数据自动绑定到视图层
