
// npm install [-g] fis3-hook-commonjs
fis.hook('commonjs');

fis.match('/comp/**/*.js', {
    // 设置了isMod后，
    // 会用commonJs的语法来解析依赖
    // 输出的js会用define来进行包裹
    // isMod为true的文件，useMap也被设为true
    isMod: true, // 设置 comp 下都是一些组件，组件建议都是匿名方式 define
    release: '/static/$0'
});

fis.match('::package', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'commonJs',
        useInlineMap: true // 资源映射表内嵌
    })
})

// fis3 release prod 产品发布，进行合并
fis.media('prod')
    .match('*.js', {
        packTo: '/static/aio.js'
    });
