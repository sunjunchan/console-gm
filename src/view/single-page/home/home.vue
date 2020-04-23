<template>
  <div class="home">
    <Row style="background: #fff; margin-bottom:24px;padding: 24px;">
        <Col span="12">
          <div class="title">当月累计</div>
          <div class="title-list" v-for="(val,i) in curmonth_biz" :key="i">
            <span v-for="(item,key,ind) in val" :key="ind">
              {{key}} : {{item}}
            </span>
				  </div>
        </Col>
        <Col span="12">
          <div class="title">历史累计</div>
          <div class="title-list" v-for="(val,i) in total_biz" :key="i">
            <span v-for="(item,key,ind) in val" :key="ind">
              {{key}} : {{item}}
            </span>
				  </div>
        </Col>
    </Row>
    <Row class="content">
      <Col span="20">
        <div id="MyChart" class="chart-container"></div>
      </Col>
      <Col span="2">
        <div class="content-right">
          <p @click="changeType('line')">折线图切换</p>
          <p @click="changeType('bar')">柱状图切换</p>
          <p @click="changeType('stack')">堆积</p>
          <p @click="changeType()">平铺</p>
          <p @click="changeType('reduction')">还原</p>
        </div>
      </Col>
    </Row>
    <Row class="select-btn">
      <!-- <Button>时</Button>
      <Button>天</Button> -->

      <span @click="getData(1)">时</span>
      <span @click="getData(2)">天</span>
      <span @click="getData(3)">月</span>
      <span @click="getData(4)">年</span>
    </Row>
  </div>
</template>

<script>
import Echarts from 'echarts'
import axios from '@/api/request'
// import InforCard from '_c/info-card'
// import CountTo from '_c/count-to'
// import { ChartPie, ChartBar } from '_c/charts'
// import Example from './example.vue'
export default {
  name: 'home',
  components: {
    // InforCard,
    // CountTo,
    // ChartPie,
    // ChartBar,
    // Example
  },
  data () {
    return {
      user: JSON.parse(localStorage.getItem('user')),
      typeNum: 1,
      curmonth_biz:[],
      total_biz:[],
      types:[
        {type:'bar',boundaryGap:true},
        {type:'line',boundaryGap:false}],
      stack:'合计',
      type:{type:'line',boundaryGap:false},
      echarts_x:[], //x轴
      echarts_data:[], //y数据
      list_all:[], //ylist项
      series:[],//echars x数据
    }
  },
  created(){
    // this.getData()
  },
  mounted () {
    this.getData(4)
    // this.getTyleNum(4)
  },
  methods:{
    getData(num){ //获取当月累计 历史累计
      axios.get('auth_service/list_all').then(res=>{
          this.list_all = res.data.auth_services.map((item,index)=>{
            return item.name
          })
          this.echarts_data = []
          res.data.auth_services.forEach((item,index)=>{
            this.echarts_data[index] = []
          })
          console.log(this.echarts_data,'data',this.list_all)
          this.getTyleNum(num)//生成ecahrs y轴
          this.getChart()//生成ecart
      })
      axios.post('home/curmonth_biz',{}).then(res=>{    //当月累计
        if(res.message){
          this.$Message.error(res.message);
        }else{
          this.curmonth_biz = [...res.data]
        }
      })
      axios.post('home/total_biz').then(res=>{    //历史累计
        this.total_biz = [...res.data]
      })
    },
    echartx(num){//生成eacharx轴
      let myDate = new Date()
      let year = myDate.getFullYear() //当前年
      let month = myDate.getMonth() //当前月
      let day = new Date(year,month,0) 
      let daycount = day.getDate() //当前月天数
      this.echarts_x = []
      if(num === 4){
        for(let i = 0;i<5;i++){
          this.echarts_x.push(year+i-4)
        }
      }else if(num === 3){
        for(let i = 0;i<12;i++){
          this.echarts_x.push(i+1)
        }
      }else if(num === 2){
        for(let i = 0;i<daycount-1;i++){
          this.echarts_x.push(i+1)
        }
      }else{
        for(let i = 0;i<24;i++){
          this.echarts_x.push(i+1)
        }
      }
    },
    getTyleNum(num){//生成ecahrs y轴
      this.echartx(num)//生成eacharx轴
      if(num){
        this.typeNum = num
      }
      let type = {
        "type":this.typeNum
      }
      axios.post('home/section_biz',type).then(res=>{    
        let myDate = new Date()
        let year = myDate.getFullYear()
        let month = myDate.getMonth()
        let day = new Date(year,month,0)
        let daycount = day.getDate()
        let type = ''
        if(num === 4){
          type = 'year'
          for(let i = 0;i<5;i++){
            this.list_all.forEach((item,index)=>{
              this.echarts_data[index].push(0)
            })
          }
        }else if(num === 3){
          type = 'month'
          for(let i = 0;i<12;i++){
            this.list_all.forEach((item,index)=>{
              this.echarts_data[index].push(0)
            })
          }
        }else if(num === 2){
          type = 'day'
          for(let i = 0;i<daycount-1;i++){
            this.list_all.forEach((item,index)=>{
              this.echarts_data[index].push(0)
            })
          }
        }else{
          type = 'hour'
          for(let i = 0;i<24;i++){
            this.list_all.forEach((item,index)=>{
              this.echarts_data[index].push(0)
            })
          }
        }
        this.list_all.forEach((allItem,allIndex)=>{
          this.echarts_x.forEach((item,index)=> {
            res.data[allItem].forEach((it,ind)=>{
            if(item == it[type]){
                this.echarts_data[allIndex][index] = it.count
              }
            })
          })
        })
        this.series = []
        this.list_all.forEach((item,index)=>{
          this.series.push({
            name: item,
            type: this.type.type,
            stack: this.stack,
            areaStyle: {},
            barWidth : 30,
            data: this.echarts_data[index]
          })
        })
        console.log(this.series,'series')
        this.getChart()
      })
    },
    changeType(type){//改变echart状态
      console.log('type')
      if(type==='line'){
        this.type = {...this.types[1]}
      }else if(type === 'bar'){
        this.type = {...this.types[0]}
      }else if(type === 'stack'){
        this.stack = '合计'
      }else if(type === 'reduction'){
        this.type = {...this.types[1]}
        this.stack = '合计'
      }else{
        this.stack = ''
      }
      this.getData(this.typeNum)
    },
    getChart(){
      let myChart1 = Echarts.init(document.getElementById('MyChart'))
      myChart1.setOption({
        title: {
        text: '平台访问概况'
      },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross',
              label: {
                  backgroundColor: '#6a7985'
              }
          }
      },
      legend: {
          data: this.list_all
      },
      toolbox: {
          feature: {
              saveAsImage: {}
          }
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: [
          {
              type: 'category',
              boundaryGap: this.type.boundaryGap,
              data: this.echarts_x,
              axisPointer: {
                  type: 'shadow'
              }
          }
      ],
      yAxis: [
          {
              type: 'value'
          }
      ],
      series: this.series
      })
    }
  }
}
</script>

<style lang="less">
.home{
  .content{
    height: 440px;
    padding: 20px;
    background: #fff;
    .chart-container{
      height: 400px;
      width: 900px;
      background: #fff;
    }
    .content-right{
      p{
        cursor: pointer;
      }
    }
  }
  .title{
    font-size: 20px
  }
  .title-list{
    font-size: 16px;
    margin-left:50px;
  }
  .count-style{
    font-size: 50px;
  }
  .select-btn{
    width: 100%;
    height: 50px;
    background: #fff;
    span{
      margin-left: 24px;
      fot-size: 28px;
      border: 1px solid #efefef;
      padding: 5px 20px 5px;
      background: #f6f6f6;
      cursor: pointer;
    }
  }
}
</style>
