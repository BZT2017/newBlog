---
title: webpack
date: 2022-07-06
---
![wepback简易流程图](https://cdn.jsdelivr.net/gh/BZT2017/oss-img/202207071835850.png)

## 为什么要使用webpack
上古时代，通过script标签引入的方法会导致以下几个问题

- 作用域问题

  **IIFE方案** 可以解决作用域问题，但是该方案会存在大量无用代码，文件体积过大，导致构建速度与加载效率问题，所以不得不对代码进行拆分

- 代码拆分问题

  **nodejs** 基于 **commonjs** 的方案可以解决代码拆分问题，但是无法在浏览器运行

- 如何让浏览器支持模块

  **browesrify** 与 **requirejs** 的方案可以使类似commonjs运行在浏览器内，但是使用起来对比commonjs不够简洁

  **esmodule** 是es提出的规范，专门用来做模块管理，但这种方案对浏览器的支持不够完整

 
## 竞品 
 - **parcel**

   如果你想构建简单的应用并让他快速的运行起来

 - **rollup**

   如果你想构建一个类库并集成很少的第三方库

   
 - **vite**

   本地构建速度极快，开发编译速度快，热更新体验丝滑


## webPack配置

```javascript
// webpack.config.js文件
const path= require('path')
module.exports = {
  // 入口文件
  entey: '.src/index.js',
  // 输出配置
  output:{
    filename: 'script/bundle.js',
    // 输出文件路径
    path: path.resolve(__dirname,'./dist'),
    // 清理dist文件
    clean: true

  },
  mode: {
    ...
  }
  // 非必须定义
  // 开发环境调试工具，用来使本地IDE内的代码与打包后浏览器内的源代码保持一致
  devtool: 'inline-source-map',
  // 插件配置
  plugins:[
    ...
  ]
}

```
:::tip
**path.resolve()**：用于 **将相对路径转为绝对路径**

- 它可以接受多个参数，依次表示所要进入的路径，直到将最后一个参数转为绝对路径。

- 如果根据参数无法得到绝对路径，就以当前所在路径作为基准。

- 除了根目录，该方法的返回值都不带尾部的斜杠。

**__dirname**：获得**当前执行文件**所在目录的**完整目录名**
:::

## webpack常用插件
帮助webpack在编译过程中处理某些特定任务的工具，如打包优化、资源管理等等
- Community
  社区的插件

- Webpack
  内置插件
  :::warning
  **TerserPlugin** 是webpack内置的插件，用来清除debug与console，并实现js代码压缩
  
  但是配置CSS压缩插件 **CssMinimizerPlugin** 后会导致该插件失效，需要手动安装 terser-webpack-plugin ,引入后配置到optimization
  :::

- Webpack Contrib
  第三方插件



## webpack-dev-server
用来实行代码热更新的工具

:::warning
不会输出任何物理文件，只是把webpack输出的dist文件放入了内存
:::

- 配置
  ```javascript
  // webpack.config.js文件
  module.exports = {
    ...
    devServer:{
      // 将启动的服务器地址指向本地的dist目录下
      static: './dist'
    }
  }

  ```

## 资源模块
项目中使用**esmodule**引入方法（import xxx from './xxxx.js'）

配置资源的输出路径
```javascript
// webpack.config.js文件
module.exports = {
  ...
  output:{
    ...
    // 资源模块输出文件路径&文件名
    // [contenthash] 表示使用文件内容自动生成文件名
    // [ext] 表示使用文件自己的扩展名
    assetModuleFilename: '<路径>/[contenthash].[ext]'
  },
}

```
:::warning
 **output** 内设置的资源输出规则优先级小于在 **rule --> generator** 内设置的优先级
:::


### asset/resource
表示该资源导出类型为**url**的格式,可加载字体文件

  ```javascript {11-14}
  // webpack.config.js文件
  module.exports = {
    ...
    mode:{
      rule: [
        ...
        {
          // 正则匹配
          test: /\.png$/,
          type: 'asset/resource',
          // 设置输出资源的规则，优先级大于output
          generator: {
            filename: '<路径>/[contenthash].[ext]'
          }
        },
        {
          // 还可以加载字体
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: 'asset/resource'
        }
      ]
    }
  }
  ```
  输入结果为：
  ```html
  <img src="http://xxxxxxxxxxxx.png">
  ```

### asset/inline
表示该资源导出类型为**base64**格式

```javascript
// webpack.config.js文件
module.exports = {
  ...
  mode:{
    rule: [
      ...
      {
        test: /\.svg$/,
        type: 'asset/inline'
      }
    ]
  }
}

```
输入结果为：
```html
<img src="data:image/svg+xml;base64,xxxxxxxxxxx">
```

### asset/source
表示该资源导出类型为**源代码**

```javascript
// webpack.config.js文件
module.exports = {
  ...
  mode:{
    rule: [
      ...
      {
        test: /\.text$/,
        type: 'asset/source'
      }
    ]
  }
}

```

引入text文件并将它写入div内

输入结果为：
```html
<div>xxxxxxxxxxxx</div>
```


### asset
通用资源类型

:::tip
文件**大于8K**将使用**resource**策略，**小于8K**使用**inline**策略

可以通过 **parser.dataUrlCondition.maxSize** 配置该临界值
:::
```javascript {9-14}
// webpack.config.js文件
module.exports = {
  ...
  mode:{
    rule: [
      ...
      {
        test: /\.text$/,
        type: 'asset',
        // 设置临界值
        parser:{
          dataUrlCondition:{
            maxSize: 4 * 1024 // 4M
          }
        }
      }
    ]
  }
}

```


## loaders
为了解析某些文件，例如 **css、xml、cxv**等文件

:::tip
webpack开箱自带的解析器只可以解析**js、json**这样的文件

xml、cxv文件不需要引入可直接配置
:::
1. 安装相应的loader
2. 引入loader
3. 配置loader

    使用方法：
    ```javascript
    // webpack.config.js文件
    module.exports = {
      ...
      mode:{
        rule: [
          ...
          {
            test: /\.text$/,
            // use表示解析.text文件时，在打包前先用raw-loader转化
            use: 'raw-loader'
          }
        ]
      }
    }
    ```

### 加载样式
  
使用前需要先安装less-loader、css-loader、style-loader

```javascript
// webpack.config.js文件
module.exports = {
  ...
  mode:{
    rule: [
      ...
      {
        test: /\.(css|less)$/,
        use: ['style-loader','css-loader','less-loader']
      }
    ]
  }
}
```
:::warning
use为数组时有加载顺序，顺序为**从后往前**,即先加载less-loader,再加载css-loader，最后加载style-loader，调用方式为链式调用

第一个loader会将转化后的结果传递给下一个loader，最后返回一个js供webpack解析
:::

### 抽离 & 压缩css
- 抽离css

  1. 安装 mini-css-extract-plugin
  2. 引入该插件

  该插件会将工程内多个css文件合并为一个css文件，并插入 **< head >** 标签内
  :::warning
  插入head标签的效果得益于 **html-webpack-plugin**
  :::
  

  ```javascript {10-12,19}
  // webpack.config.js文件
  module.exports = {
    ...
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'app.html',
        inject: 'body'
      }),
      new MiniCssExtractPlugin({
        filename: '<路径>/[contenthash].css'
      })
    ],
    mode:{
      rule: [
        ...
        {
          test: /\.(css|less)$/,
          use: [MiniCssExtractPlugin.loader，'style-loader','css-loader','less-loader']
        }
      ]
    }
  }
  ```
- 压缩css

  1. 安装 css-minimizer-webpack-plugin
  2. 引入该插件
  3. 在 (**optimization**) 优化属性内配置
  ```javascript {4-8}
  // webpack.config.js文件
  module.exports = {
    ...
    optimization: {
      minimizer: [
        new CssMinimizerPlugin()
      ]
    }
  }
  ```
  :::warning
  压缩代码时注意，应只在生产环境设置代码压缩，即 mode: 'production'
  :::

### 自定义json模块parser

解析 **yaml、toml、json5** 类型的文件

1. 安装 yaml、toml、json5
2. require 进 webpack.config.js文件
3. 配置解析器

  ```javascript {11-13}
  // webpack.config.js文件
  module.exports = {
    ...
    mode:{
      rule: [
        ...
        {
          // toml、json5与此方法一致
          test: /\.yaml$/,
          type: 'json',
          parser:{
            parse: yaml.parse
          }
        }
      ]
    }
  }
  ```

## babel-loader

- 简介

  babel-loader是用来保证 **ES6** 代码能运行在不同浏览器内的js解析器

- 核心插件

  - babel-loader：在webpack里应用babel解析ES6的桥梁

  - @babel/core： babel核心模块

  - @babel/runtime：babel运行时需要

  - @babel、plugin-transform-runtime: 
  
    该插件会在regeneratorRuntime的地方自动require导包，编译时需要

  - @babel/preset-env：babel预设的一组babel插件集合

  :::tip
  **regeneratorRuntime** 是webpack打包生成的全局辅助函数，由babel生成，用于兼容async/await语法
  :::

- 使用
  1. 安装 babel-loader、@babel/core、@babel/preset-env
  2. 配置loader
    ```javascript {7-22}
    // webpack.config.js文件
    module.exports = {
      ...
      mode:{
        rule: [
          ...
          {
            test: /\.js$/,
            // 设置此loader忽略的文件夹
            exclude: /node_modules/,
            use:{
              loader: 'babel-lodaer',
              options:{
                // 配置预设插件
                presets:['@babel/preset-env']，
                // 配置babel-lodaer的插件
                plugins: [
                  ['@babel/plugin-transform-runtime']
                ]
              }
            }
          }
        ]
      }
    }
    ```


## 代码分离

优点：可以用于获取更小的 **bundle**（打包分离出来的文件），以及控制资源加载的优先级

代码引入有两种：
1. 动态引入：import函数引入
2. 静态引入：

### 入口起点
配置entry
 ```javascript {7-17}
// webpack.config.js文件
module.exports = {
  ...
  entry：{
    index_1: './xxxx/xxxx.js',
    index_2: './xxxx/xxxx.js',
  },
  output:{
    // [name] 可以拿到entry里面的key的值，在此处为index_1和index_2
    filename:'[name].bundle.js',
    path: path.resolve(__dirname,'./dist'),
    clean:true,
    assetModuleFilename: 'imges/[contenthash][ext]'
  }
}
```
打包结果：
```html
<body>
<script defer src="index_1.bundle.js"></script><script defer src="index_2.bundle.js"></script>
</body>
```


:::warning
该方法会将多个入口文件所引用的通用代码库重复打包，须结合 **防止重复** 方案运用

例如：index_1中引入了lodash，index_2中也引入lodash，webpack会将两者引入的lodash分别打包到相应的bundle内,而我们期望这个公用库只需要打包一次
:::

### 防止重复
通过定义 **dependOn（入口依赖）** 属性和 **shared** 属性，wepback可以将两者公共的库抽取出来，形成名为shared的 **chunk**（数据块）
:::tip
定义的shared最终会以script标签形式追加到body标签里

注意点请看注释

项目中可以使用插件帮助我们自动分离重复的库
:::
 ```javascript {5-14}
// webpack.config.js文件
module.exports = {
  ...
  entry：{
    index_1: {
      import: './xxxx/xxxx.js',
      dependOn: 'shared'
    },
    index_2: {
      import: './xxxx/xxxx.js',
      dependOn: 'shared'
    },
    // 注意：最终打包出来的bundle名由key定义
    shared: 'lodash'
  },
  output:{
    // [name] 可以拿到entry里面的key的值，在此处为index_1和index_2
    filename:'[name].bundle.js',
    path: path.resolve(__dirname,'./dist'),
    clean:true,
    assetModuleFilename: 'imges/[contenthash][ext]'
  }
}
```
:::tip
也可以使用wepback内置的 **split-chunks-Plugin** 插件抽离出重复的库

抽离出的bundle文件名以 **vendors-node_modules_** 开头
:::
 ```javascript {10-12}
// webpack.config.js文件
module.exports = {
  ...
  entry：{
    index_1: './xxxx/xxxx.js',
    index_2: './xxxx/xxxx.js',
  },
  optimization: {
    ...
    splitChunks:{
      chunks: 'all'
    }
  }
}
```

### 动态引入

使用 **import** 函数实现, wepback会识别import异步引入的库，并将它打包为**vendors-node_modules_** 开头的bundle文件

魔法注释：
- 懒加载

  懒加载用到的bundle**只有在用户使用的时候**才会向服务器发送请求，页面初始化时不会请求，这样可以节省带宽

  ```javascript {2}
  // 需要使用懒加载的文件
  ...
  // import内部的注释叫魔术注释，webpack会将该模块打包为名为math的bundle
  util: ()=>{ return import(/* webpackChunkName: 'math' */'./<util>.js') }
  ```

- 预获取/预加载

  使用魔法注释
    - /* webpackPrefetch: true */：实行**预获取**模式，在首页内容加载完毕后加载
      :::warning
      预加载在初始化时请求一次，在使用时也会请求一次
      
      下载是发生在父级chunk加载完成之后

      会在head标签内新增link标签
      :::
      ```html {3}
      <head>
        ...
        <link rel="prefetch" as="script" href="http://xxxxx/xxx.bundle.js">
      </head>
      ```

    - /* webpackPreload: true */：实行**预加载**模式，与懒加载行为一致
      :::warning
      异步chunk会和父级chunk**并行加载**,不当地使用wepbackPreload会损害性能

      会在head标签内新增link标签
      :::
      ```html {3}
      <head>
        ...
        <link rel="preload" as="script" href="http://xxxxx/xxx.bundle.js">
      </head>
      ```

## 优化缓存
### 解决chunk文件缓存问题
因为每次打包**相同的bundle文件名会被浏览器缓存**，在文件被更改时不会获取最新内容，所以需要配置可替换模板字符串来解决此问题

```javascript {7-8}
// webpack.config.js文件
module.exports = {
  ...
  // 输出配置
  output:{
    ...
    // 设置可替换模板字符串[contenthash]，根据文件内容生成的hash值
    filename: '[name].[contenthash].js',
  },
}

```

### 缓存第三方库
由于第三方库很少被开发者修改，则可以利用浏览器缓存来减少请求

```javascript {9-16}
// webpack.config.js文件
module.exports = {
  ...
  // 输出配置
  optimization: {
    ...
    spiltChunks:{
      // 设置缓存组
      cacheGroups:{
        vendor:{
          // 一般第三方库安装在node_modules文件夹
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
}

```

## 生产环境与开发环境配置
webpack切换打包环境通过 **mode** 属性配置，有两个值

- **production**：表示生产环境
- **development**：表示开发环境

```javascript {9-16}
// webpack.config.js文件
module.exports = {
  ...
  // 环境配置 production | development
  mode: 'production',
}

```
在实际的开发环境中，不可能手动修改mode的值来切换打包模式，于是需要将module.exports出去的对象转换成函数，通过 **env** 获取当前打包的环境

```javascript
// webpack.config.js文件
...
// 此处的env对应着npm执行命令 --env 后的值
module.exports = (env)=> {
  // 将配置对象return出去
  return {
    ...
    // 
    mode: env.production ? 'production' : 'development',
  }
}
```

在终端打包时携带 --env production
```bash
npx webpack --env production 
```
:::tip
--env 后的值还支持键值对，例如 --env goal=local

可以通过 env.goal 获取
:::

### 配置拆分
通过改变env环境变量虽然可以实现打包类型的修改，但是无法针对环境做定制化配置，于是需要做环境配置拆分

1. 在根目录新建config文件夹，并新建 **webpack.config.prod.js** 、**webpack.config.prod.js** 与 **webpack.config.common.js** 文件

2. 编写相应的配置，如
  - prod: 添加代码压缩、去除source-map、添加文件缓存、添加公共路径

    ```javascript
    // webpack.config.prod.js文件
    ...
    module.exports = {
      output:{
        // 添加文件缓存[contenthash]
        filename: 'script/[name].[contenthash].js',
        publicPath: 'http://localhost:8080/'
      },
      mode: 'production',
      optimization:{
        minimizer:[
          new CssMinimizerPlugin(),
          new TerserPlugin()
        ]
      },
      // 提示用户包的体积过大,生产环境关闭提示
      performance:{
        hints: false
      }
    }
    ```

  - dev: 去除代码压缩、添加source-map、添加启动服务配置（devServer）、去除文件缓存（[contenthash]）、去除publicPath

    ```javascript
    // webpack.config.dev.js文件
    ...
    module.exports = {
      ...
      output:{
        // 删除文件缓存[contenthash]
        filename: 'script/[name].js',
      },
      mode: 'development',
      // 添加source-map
      devtool: 'inline-source-map',
      // 添加启动服务配置
      devServer:{
        static: './dist',
        compress: true,
      }

    }
    ```

  - common：公共的配置

    ```javascript
    // webpack.config.common.js文件
    module.exports = {
      entry:{
        // all
        ...
      },
      output:{
        // 输出文件路径为../dist，因为现在的执行环境在 scr/config 文件内
        path: path.resolve(__dirname,'../dist'),
        clean: true,
        assetModuleFilename: 'images/[contenthash][ext]',
      },
      plugins: [
        // all
        ...
      ],
      module: [
        // all
        ...
      ],
      spiltChunks: {
        // all
        ...
      }
    }
    ```

### 配置文件合并
**webpack-merge** 插件可以帮助我们合并这三个配置文件
1. 安装 **webpack-merge** 插件
2. 在config文件夹下新建 **webpack.config.js** 用它来充当配置的入口文件
3. 配置 webpack.config.js
        
    ```javascript
    // webpack.config.js文件
    const { merge } = require('webpack-merge')

    const commonConfig  = require('./webpack.config.common')
    const productionConfig  = require('./webpack.config.prod')
    const developmentConfig  = require('./webpack.config.dev')
    module.exports = (env)=>{
      switch(true) {
        case env.development:
          return merge(commonConfig, developmentConfig)
        
        case env.production:
          return merge(commonConfig, productionConfig)

        defult:
          return new Error('No matching configuration was found')
      }
    }
    ```

### npm脚本配置

```json {5-6}
// package.json文件
{
  "script": {
    ...
    "build:prod":"webpack -c ./config/webpack.config.js --env production",
    "build:dev":"webpack -c ./config/webpack.config.js --env development",
  }
}
```

## 高级篇
### sourceMap

| 模式     | 解释      |
|:-------- |:--------- |
| eval（默认） | 每个module会封装到eval里包裹起来执行，并且会在末尾追加注释 //@sourceURL. |
| source-map | 会生成一个map文件，在bundle末尾追加注释 //# sourceMappingURL=<main.js.map> |
| hidden-source-map | 和source-map一样，但不会在bundle末尾追加注释 |
| inline-source-map | 不会打包出map文件，bundle会生成一个DataURL格式的注释 |
| eval-source-map | 不会打包出map文件，每个module会通过eval()来执行，并生成DataURL形式的SourceMap |
| cheap-source-map | 生成的map文件只有行数映射，没有记录代码的列数，不包含loader的sourceMap（如bable的sourceMap） |
| cheap-module-source-map（推荐） | 生成的map文件只有行数映射，没有记录代码的列数，包含loader，且也简化列数信息 |

:::warning
一般调试代码，只需要行数映射，添加列数映射会增加map文件大小，拖慢编译速度
:::

// main.js.map 文件
mappings：<行映射>;<列映射>

### devServer
```javascript
module.exports = {
  ...
  devServer:{
    static: path.resolve(__dirname, './dist'),
    // 设置服务端代码压缩，减少传输数据与时间
    compress: true,
    // 设置端口
    port: 3000,
    // 配置响应头
    headers: {
      ...
      'X-Access-Token': 'xxxxx'
    },
    // 设置代理
    proxy:{
      ...
      // 将带有api的url替换为xxx
      '/api': 'xxxxxx'
    },
    // 设置https & http2，本地开启https主要用于测试浏览器环境，默认无需配置
    // 注意： 由于默认配置使用的是自签名证书，浏览器会认为不安全，但我们仍然可以访问
    https: true,
    // 
    histtoryApiFallback:{
      // 可以根据不同访问路径配置替代页面，配合路由使用
      rewrites:[
        ...
        {from: /./, to: '404.html' }
      ]
    },
    // 开发服务器主机,配置后同局域网的开发者可以通过你的ip地址访问你的服务器
    host:'0.0.0.0',
  }
}
```
此属性值表示浏览器对其传输进行了压缩处理：
![compress效果](https://cdn.jsdelivr.net/gh/BZT2017/oss-img/202207111339173.png

### 模块热替换与热加载（HMR）

热替换：
```javascript
module.exports = {
  ...
  devServer:{
    ...
    // 默认开启
    hot： true
  }
}
```

热加载：
```javascript
module.exports = {
  ...
  devServer:{
    ...
    // 默认开启
    liveReload: true
  }
}
```