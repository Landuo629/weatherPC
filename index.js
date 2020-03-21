/*
  请求地址:http://wthrcdn.etouch.cn/weather_mini
  请求方法:get
  请求参数:city(城市名)
  响应内容:天气信息

  1. 点击回车
  2. 查询数据
  3. 渲染数据
  */

const app = new Vue({
    el: '#app',
    data: {
        city: '',
        weatherList: [],
        hotCity: ['杭州','南京','澳门','香港']
    },
    methods: {
        serarchWeather() {
            // console.log('天气查询');
            // console.log(this.city);
            // 保存this
            const that = this
            axios
            .get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city)
            .then(res => {
                // console.log(res)
                console.log(res.data.data.forecast)
                that.weatherList = res.data.data.forecast
            })
            .catch(err => {

            })
        },
        clickSearch(city) {
            this.city = city;
            this.serarchWeather();
        }
    }
})

