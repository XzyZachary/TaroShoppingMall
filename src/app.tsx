import '@tarojs/async-await'
import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import dva from './dva'
import models from './models/index'
// import Index from './pages/index/index'
import '@assets/iconfont.css'
// import { setGlobalData } from './utils'
import 'taro-ui/dist/style/index.scss'
import './app.scss'
import Home from './pages/home/home';

const dvaApp = dva.createApp({
  initialState: {},
  models: models
})
const store = dvaApp.getStore()

// const backgroundAudioManager = Taro.getBackgroundAudioManager()

class App extends Component {

  config: Config = {
    pages: [
      'pages/home/home'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'FDMall',
      navigationBarTextStyle: 'black',
      enablePullDownRefresh: true
    }
  }

  componentDidMount() {
  }

  componentDidShow() { }

  componentDidHide() { }

  componentCatchError() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
