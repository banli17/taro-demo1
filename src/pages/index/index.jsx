import {Component} from 'react'
import {View, Text} from '@tarojs/components'
import {AtButton, AtInput} from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'

export default class Index extends Component {

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }


  load = () => {

  }

  clickcut = () => {

  }
  onImageload = () => {
    console.log(this.cropper)
    this.cropper.imgReset()
  }

  setCropper = node => {
    this.cropper = node
  }

  render() {
    return (
      <View className='index'>
        {/* bug1: 这里输入的字符不止5个，没有被控制 */}
        <AtInput type='text' maxlength={5}></AtInput>

        {/* bug2: onImageload 里面调用不到 imgReset方法 */}
        {/* 在 app.config.js 里配置了 usingComponents*/}
        <image-cropper
          ref={this.setCropper}
          width={180}
          height={180}
          imgSrc='https://taro-ui.jd.com/img/logo-taro.png'
          onLoad={this.load}
          max_scale={5}
          onImageload={this.onImageload}
          onTapcut={this.clickcut}
        ></image-cropper>
      </View>
    )
  }
}
