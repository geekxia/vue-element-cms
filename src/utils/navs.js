const Home = ()=>import('@/views/home/Home.vue')
const Overview = ()=>import('@/views/home/Overview.vue')
const Analyze = ()=>import('@/views/home/Analyze.vue')

const Good = ()=>import('@/views/good/Good.vue')
const AddGood = ()=>import('@/views/good/AddGood.vue')
const Editor = ()=>import('@/views/good/Editor.vue')
const QfAd = ()=>import('@/views/ad/QfAd.vue')
const Chat = ()=>import('@/views/chat/Chat.vue')

export default [
  {
    id: 1,
    path: '/home',
    comm: Home,
    title: '首页管理',
    icon: 'el-icon-location',
    children: [
      { id:11, path: '/home/overview', title: '概况', icon: 'el-icon-document', comm:Overview},
      { id:12, path: '/home/analyze', title: '统计', icon: 'el-icon-setting', comm:Analyze}
    ]
  },
  {
    id: 2,
    path:'/good',
    comm: Good,
    title: '商品管理',
    icon: 'el-icon-menu',
    children: [
      { id:21, path: '/good/add', title:'新增', icon: 'el-icon-table-lamp', comm:AddGood },
      { id:22, path: '/good/editor', title:'文章', icon: 'el-icon-table-lamp', comm:Editor }

    ]
  },
  {
    id: 3,
    path: '/ad',
    comm: QfAd,
    title: '广告中心',
    icon: 'el-icon-location'
  },
  {
    id: 4,
    path: '/chat',
    comm: Chat,
    title: '聊天室',
    icon: 'el-icon-location'
  }
]
