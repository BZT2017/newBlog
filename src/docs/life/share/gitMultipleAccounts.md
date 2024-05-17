---
title: git多账号配置
date: 2022-07-19
---

## 场景
在公司可能会遇到多个git账号同时使用的问题，可能公司用gitlab账号提交公司代码，自己又要使用gitee或者其他账号提交自己的一些代码，这样就需要对git进行多账号配置了

## 解决方案
通过配置多个ssh秘钥对不同类型的账号进行管理

## 方法步骤
比如公司用gitlab账号，自己使用gitee账号
1. 清理全局账号配置

    ```bash
    git config --global --unset user.name 
    git config --global --unset user.email
    ```
2. 进入C盘的用户文件夹内的.ssh文件夹，删除其中的文件，如果没有.ssh文件夹就新建一个

3. 在.ssh内打开终端，执行以下命令(另一账号同此步骤)

    ```bash
    ssh-keygen -t rsa -C "你的邮箱地址"
    ```
    之后会提示要求输入生成的文件名，可以以下划线做区分，如id_rsa_gitlab，接着一路回车，等到执行完，专属于gitlab的公钥密钥对就生成完毕了

4. 在相应的网站上设置你的公钥并保存

5. 回到.ssh文件夹，新增config(无后缀)文件并配置两个账号

    ```
    # gitlab
    Host gitlab.com
    HostName gitlab.com
    User youName
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa_gitlab

    # gitee
    Host gitee.com
    HostName gitee.com
    User Tiger
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa_gitee
    ```

6. 执行下面命令,关联config文件并测试是否设置成功
    ```ssh
    ssh -T git@gitlab.com
    ssh -T git@github.com
    ```

7. 拉取项目代码并在目录中打开终端

8. 在相应的项目中配置你的local环境账号名与e-mail

    ```bash
    git config --local user.name "xxxx"
    git config --local user.email "xxxx"
    ```

:::tip
配置公司内网的gitlab时，需要将 **Host**、 **HostName** 配置成相应的ip

配置也需要换成 ssh -T git@xxxxxx

有端口的话配置文件需要添加 **PORT xx** (默认22)
:::