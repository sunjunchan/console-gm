<template>
    <div class="service-information">
        <div class="infor">
            <Form :model="formData">
                <Row>
                    <Col span="12">
                        <FormItem label="业务类型">
                             <!-- @on-change="getDataList()" -->
                            <Select style="width: 150px;" v-model="formData.system_id" placeholder="请选择">
                                <Option v-for="(item,index) in list_all" :value="item.value" :key='index'>{{item.name}}</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="用户名">
                            <Input style="width: 150px;" placeholder="请输入用户名" v-model="formData.username"/>
                        </FormItem>
                    </Col>
                    <Button type="primary" class="btn" @click="getDataList()">查询</Button>
                </Row>
            </Form>
            <!-- <span class="title">可用应用</span>  -->

            <Table class="c-table" :columns="columns1" :data="data1"></Table>
            <template >
                <Page class="top-page" @on-change="onChange" :total="total" show-elevator></Page>
            </template>
        </div>
    </div>
</template>
<script>
import axios from '@/api/request'
export default {
    data(){
        return{
            user: JSON.parse(localStorage.getItem('user')),
            total: 0,
            columns1: [
                {
                    title: '用户名',
                    key: 'username'
                },
                {
                    title: '创建时间',
                    key: 'create_time'
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params)
                                    }
                                }
                            }, '停用')
                        ]);
                    }
                }
            ],
            btn:['停用','启动'],
            data1: [
            ],
            formData: {
                    system_id: '',
                    username:''
                },
            value3: false,
            styles: {
                height: 'calc(100% - 55px)',
                overflow: 'auto',
                paddingBottom: '53px',
                position: 'static'
            },
            list_all:[]
        }
    },
    created(){
        this.getData()
    },
    mounted(){
        
    },
    methods:{
        seleBtn(){},
        onChange(currentPage){
            let page = currentPage - 1
            console.log(111)
            let infor = {
                "page_index":page,
                "page_size":10,
                "system_id":this.formData.system_id,
                "username":this.formData.username
            }
            axios.post('enduser/list',infor).then(res=>{
                this.data1 = []
                if(res.data.users){
                    this.total = res.data.total_count
                    res.data.users.forEach((item,index)=>{
                        this.data1.push({...item})
                    })
                }
                
            })
        },
        getDataList(){
            console.log(111)
            let infor = {
                "page_index":0,
                "page_size":10,
                "system_id":this.formData.system_id,
                "username":this.formData.username
            }
            axios.post('enduser/list',infor).then(res=>{
                this.data1 = []
                if(res.data.users){
                    this.total = res.data.total_count
                    res.data.users.forEach((item,index)=>{
                        this.data1.push({...item})
                    })
                }
                
            })
        },
        getData(){
            axios.get('auth_service/list_all').then(res=>{
                console.log(res.data.auth_services)
                this.list_all = []
                res.data.auth_services.forEach((item,index)=>{
                    this.list_all.push({
                        value: item.id,
                        name: item.name
                    })

                })
            })
        },
        addTable(){
            console.log('弹框')
            this.value3 = true
        },
        handleSelectAll (status) {
            this.$refs.selection.selectAll(status);
        },
        addSubmit(){
            this.value3 = false
            this.data1.push({
                ...this.formData
            })
        },
        show (index) {
            this.$Modal.info({
                title: 'User Info',
                content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
            })
        },
        remove (params) {
        //    console.log(params.row.username,params)
           let delUser = {}
           delUser = {
               "system_id":this.formData.system_id,
               "user_name":params.row.username
           }
           axios.post('enduser/del',delUser).then((res)=>{
            if(res.message){
              this.$Message.error('停用失败');
            }else{
                this.$Message.success('成功停用')
                this.data1.splice(params.index,1)
            }
           })
        }
    }
}
</script>
<style lang="less">
    .service-information{
        .ivu-table-cell{
            font-size: 18px;
        }
        .ivu-form-item-label{
            font-size: 18px;
        }
        .ivu-select-placeholder{
            font-size: 18px;
        }
        // position: relative;
        .top-page{
            margin: 24px 0 0;
        }
        .c-table{
            margin-top:24px;
        }
        .infor{
            width: 100%;
            background: #fff;
            padding: 24px;
            border-radius: 5px;
            box-shadow: 2px -2px 4px 4px rgba(150, 150, 150, .1);
            position: relative;
            .btn{
                position: absolute;
                right: 24px;
            }
            .title{
                font-size: 30px;
            }
            .infor-text{
                padding: 24px 0 0 24px;
                font-size: 18px;
            }
            .infor-span{
                color:blue;
                position:absolute;
                right: 500px;
            }
            .infor-span2{
                color:blue;
                margin-left: 50px;
            }
        }
    }
</style>