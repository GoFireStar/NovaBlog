//.vuepress/config.js
// const getConfig = require ( "vuepress-bar" ) ;
// const { nav , sidebar } = getConfig ( ) ;

// console.log(sidebar )

module.exports = {
	lang: 'zh-CN',
    title: 'Nova博客',
    description: '专注全栈分享，涉及前后端应用开发。',
	base:"/",
	
	// 路由设置
	themeConfig: { 
		nav:[ // 添加导航栏
            { text: '首页', link: '/' },
			{text: '前端',
			    items:[
			        {text:'a',link: '/front/a'},
			        {text:'b',link: '/front/b'},
			    ]
			},
            { text: '后端', link: '/end/' },
            { text: '数据库', link: '/database/' },
			{ text: '项目', link: '/projects/' },
			{ text: '合作', link: '/contract/' },
            
        ],
		sidebar:{
			'/dev_manage/': [{
				title: 'items01',
				ollapsable: false, 
				children: [
							{ title: 'items01', path:'/dev_manage/'},
							{ title: 'items02', path:'/dev_manage/aaa'}
						]
				}],
		}
	},
	
	// 插件
	// plugins: ['autobar']
	// plugins: [
	// 	['@vuepress/pwa', {serviceWorker: true,updatePopup: true}], // PWA
	// 	["@vuepress/back-to-top"], 									// 返回顶部
	// 	["@vuepress/nprogress"],   									// 加载进度条
	// ],
	
	
}


// sidebar:[
//   { title: 'Contract', children: [ '', 'contract/' ] },
//   { title: 'Database', children: [ 'database/' ] },
//   { title: 'End', children: [ 'end/' ] },
//   {
//     title: 'Front',
//     children: [ 'front/', 'front/a', 'front/b', [Object] ]
//   },
//   { title: 'Projects', children: [ 'projects/' ] }
// ]