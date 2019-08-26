// 这部分用来测试tree-shaking是否生效

export default () => {
  // 如果在打包的代码中查询到此条内容，说明tree-shaking失败
  console.log('tree-shaking fail')
}
