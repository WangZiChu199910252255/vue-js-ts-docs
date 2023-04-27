export default {
    themeConfig: {
        siteTitle: "关于vue改造ts项目",
        nav: [
            // { text: "指南", link: "/guild/installation" },
            // { text: "组件", link: "/components/button/" },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/qddidi/easyest" },
        ],
        sidebar: [
            {
                text: '关于ts',
                items: [
                    { text: '为什么要用ts', link: '/01' },
                    { text: '使用ts之前我们需要先准备什么', link: '/02' },
                ]
            }, {
                text: '在vue3中如何使用ts',
                items: [
                    { text: '如何在vue3中使用ts', link: '/03' },
                    { text: '用js写vue3和用ts写的区别', link: '/04' }
                ]
            },{
                text: '如何把一个js写的vue3项目改造成ts',
                items: [
                    { text: '对工具函数和库的修改', link: '/05' },
                    { text: '对vue文件的修改', link: '/06' },
                ]
            },{
                text: 'ts进阶',
                items: [
                    { text: '了解工具类型', link: '/07' },
                    { text: '复杂类型的处理', link: '/08' },
                    { text: 'ts体操入门', link: '/09' },
                ]
            }
        ]
    },
};
