import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import Banner from './banner'
//@ts-ignore
import Loading from '@components/loading'
//@ts-ignore
import { AtSearchBar } from 'taro-ui'

class Home extends Component {
    state = {
        value: '',
        loading: true,
        homeInfo:[]
    }
  
    onChange(value) {
        this.setState({
            value: value
        })
    }
    render() {
        if (this.state.loading) {
            return <Loading />
        }
        return (
            <View>
                <AtSearchBar value={this.state.value} onChange={this.onChange.bind(this)} />

                <ScrollView scrollY className='home__wrap'>
                    <View>
                        <Banner list={this.state.homeInfo} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Home