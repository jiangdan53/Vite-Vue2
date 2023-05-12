import { defineConfig } from "vite"; //动态的配置函数
import {createVuePlugin } from 'vite-plugin-vue2'; //解析模块插件
import {resolve} from 'path'; // 解析路径的node内置模块

export default ()=>
    defineConfig({
        plugins:[createVuePlugin()],
        server:{
            open:true,
            port:8080,
            proxy:{
            }
        },
        resolve:{
                    alias:{
                        '@':resolve(__dirname,'src')
                    }
                }
    })
