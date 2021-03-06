/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/video',
  component: Layout,
  // redirect: '/table/complex-table',
  name: 'Video',
  meta: {
    title: '视频',
    icon: 'el-icon-video-camera'
  },
  children: [
    {
      path: 'live',
      component: () => import('@/views/video/live/index'),
      name: 'live',
      meta: { title: '直播', icon: 'el-icon-video-camera-solid' }
    },
    {
      path: 'demand',
      component: () => import('@/views/video/demand/index'),
      name: 'demand',
      meta: { title: '点播', icon: 'el-icon-video-play' }
    }
  ]
}
export default tableRouter
