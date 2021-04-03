/*
 * @Descripttion: 
 * @version: 
 * @Author: wsz
 * @Date: 2021-04-03 10:47:41
 * @LastEditors: wsz
 * @LastEditTime: 2021-04-03 10:55:25
 */

 //此文件用于配置常用路径的别名
module.exports = {
    configureWebpack: {
        resolve: {  //解决路径相关的一些问题
            alias: {
                // '@': 'src'     //vueCLI3  已经对此进行默认配置了
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}