<template>
    <div class="Home">
        <div class="info">
            <h2>xPanse Ventures</h2>
            <p>xPanse Ventures 是一家由 DAO 组织成立的加密实验室，我们对任何加密密码感兴趣，所以在不断探索Web3无限的可能并创造Crypto时代的新秩序。
            </p>
        </div>
        <div class="recent">
            <h2>最近的</h2>
            <div class="profile">

                
                <div class="project">
                    <img src="../images/7bc469c53565a43fceb655a73ef1413.png"  height="160">
                    <div class="context">
                        <p>EigenLayer 是一种建立在以太坊之上的协议，它引入了再质押概念，这是加密经济安全中的一种新原语。该原语允许在共识层上重新质押 $ETH。质押 $ETH 的用户可以选择加入 EigenLayer 智能合约以重新抵押他们的 $ETH 并将加密经济安全性扩展到网络上的其他应用程序。</p>
                        <p>
                            标签：<strong>基础设施</strong><strong>LSD</strong>
                        </p>
                        <p>
                            调研：<a :href="Ei"  target="_blank">{{Ei}}</a>
                        </p>
                    </div>
                </div>


                <div class="project">
                    <img src="../images/652823d95c70a13434b4fd9104c8a1a.png" height="160">
                    <div class="context">
                        <p>Gensyn是一个分布式计算网络，用于训练 AI 模型。该网络使用区块链来验证深度学习任务是否已正确执行，并通过命令触发支付。</p>
                        <p>
                            标签：<strong>基础设施</strong><strong>云计算</strong><strong>AI 人工智能</strong>
                        </p>
                        <p>
                            调研：<a href="https://mp.weixin.qq.com/s/2OLg8cqhrp5ddbVJTBwIkQ"  target="_blank">https://mp.weixin.qq.com/s/2OLg8cqhrp5ddbVJTBwIkQ</a>
                        </p>
                    </div>
                </div>

                <div class="project">
                    <img src="../images/acc34aa1649aa15e33e178ab650848e.png" height="160">
                    <div class="context">
                        <p>Delphinus Lab 提供基于 ZKWasm 虚拟机的去信任计算解决方案和应用 SDK。 ZKWASM（支持 Web Assembly 的 ZKSNARK 虚拟机）充当 WASM
                            运行时上运行的应用程序与链上智能合约之间的去信任层。其使命是构建一个zkWASM 云套件，使用汇总作为应用程序的方法，简化将更通用的web应用程序集成到web3环境中的过程。</p>
                        <p>
                            标签：<strong>基础设施</strong><strong>zk-Rollup</strong>
                        </p>
                        <p>
                            调研：<a :href="ProLink" target="_blank">{{ProLink}}</a>
                        </p>
                    </div>
                </div>
                <div class="project">
                    点击获取更多详细项目
                </div>

            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import '../assets/Home.less'


const ProLink = 'https://delphinuslab.com/'

const imageUrl = '652823d95c70a13434b4fd9104c8a1a.png'

const Ei = 'https://mp.weixin.qq.com/s/sQvfoLF6wdffGG0v8Fi6dQ'




</script>