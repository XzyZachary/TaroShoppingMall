import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'


interface ListItem {
  rank: number;
  img: string
}

const list: Array<ListItem> = [
  {rank: 0, img: 'https://yanxuan.nosdn.127.net/15527231275329866.png'},
  {rank: 1, img: 'https://yanxuan.nosdn.127.net/15570245921423991.png'},
  {rank: 2, img: 'https://yanxuan.nosdn.127.net/15527233138389871.png'},
]

interface DefaultProps {
  list: Array<ListItem>;
}

export default class SwiperBanner extends Component<DefaultProps> {
  state = {
    list: [...list]
  }

  render() {
    const { list } = this.props
    return (
      <View className='home-banner'>
        <Swiper
          className='home-banner__swiper'
          circular
          autoplay
          indicatorDots
          indicatorActiveColor='rgb(178, 42, 49)'
        // TODO 目前 H5、RN 暂不支持 previousMargin、nextMargin
        // previousMargin
        // nextMargin
        >
          {list.map(item => (
            <SwiperItem key={item.rank} className='home-banner__swiper-item'>
              <Image className='home-banner__swiper-item-img' src={item.img} />
            </SwiperItem>
          ))}
        </Swiper>
      </View>
    )
  }
}
