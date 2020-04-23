<template>
    <div class="service-information">
        <div class="infor">
            <span class="title">可用应用</span> 
            <Button type="primary" class="btn" @click="addTable">添加应用</Button>
            <Table class="c-table" :columns="columns1" :data="data1"></Table>
            <template >
                <Page class="top-page" @on-change="onChange" :total="total" show-elevator></Page>
            </template>
            <Drawer
                title="应用"
                v-model="value3"
                :width="drawerWidth"
                :mask-closable="false"
                :styles="styles"
            >
                <div style="float:right">
                    <Form :model="formData" style="width: 200px;">
                        <Row :gutter="32">
                            <Col span="24">
                                <FormItem label="应用名称" label-position="top">
                                    <Input v-model="formData.app_name" placeholder="请输入应用名称" />
                                </FormItem>
                            </Col>
                        </Row>
                        <Row :gutter="32">
                            <Col span="12">
                                <FormItem label="应用类型" label-position="top">
                                    <Select v-model="formData.app_type" placeholder="请选择">
                                        <Option value="android">android</Option>
                                        <Option value="web">web</Option>
                                        <Option value="ios">ios</Option>
                                    </Select>
                                </FormItem>
                            </Col>
                        </Row>
                        <FormItem label="应用标识" label-position="top">
                            <Icon v-show="iconShow" @click="showlist()" type="ios-help-circle" style="font-size:18px;margin-bottom:2px;cursor:pointer;"/>
                            <Input type="textarea" v-model="formData.facet_id" :rows="4" placeholder="请输入应用标识" />
                        </FormItem>
                    </Form>
                    <div class="demo-drawer-footer" style="margin-top:24px">
                        <Button style="margin-right: 8px" @click="closeSubmit()">取消</Button>
                        <Button type="primary" @click="addSubmit()">提交</Button>
                    </div> 
                </div>
                <div v-show="drawers" style="width:700px;float:right;">
                    <page/>
                </div>          
            </Drawer> 
        </div>
    </div>
</template>
<script>
import page from "./component/index"
import axios from '@/api/request'
export default {
    components:{
        page
    },
    data(){
        return{
            user: JSON.parse(localStorage.getItem('user')),
            total:0,
            iconShow:true,
            drawers:false,
            drawerWidth:"280",
            change: false,
            columns1: [
                {
                    title: '应用名称',
                    key: 'app_name'
                },
                {
                    title: '应用类型',
                    key: 'app_type'
                },
                {
                    title: '应用标识',
                    key: 'facet_id',
                    width: 200,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('span', {
                                style: {
                                    display: 'inline-block',
                                    width: '100%',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                },
                                domProps: {
                                    title: params.row.facet_id
                                }
                            }, params.row.facet_id)
                        ])
                    },
                },
                {
                    title: '授权时间',
                    key: 'create_time'
                },{
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
                                        this.changeSubmit(params)
                                    }
                                }
                            },'编辑')
                        ]);
                    }
                }
            ],
            data1: [
            ],
            formData: {
                    app_name: '',
                    app_type: '',
                    facet_id: ''
                },
            value3: false,
            styles: {
                height: 'calc(100% - 55px)',
                overflow: 'auto',
                paddingBottom: '53px',
                position: 'static'
            },
            data2: [
                {
                    name: 'FIDC注册',
                    state: 0,
                    num: '1',
                    endnum: 2,
                    time: '2016-10-03'
                },
                {
                    name: 'FIDC注册1'
                },
                {
                    name: 'FIDC注册2'
                },
                {
                    name: 'FIDC注册3'
                },
            ],
            columns4: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center',
                    change:(select)=>{
                        console.log(select)
                    }
                },
                {
                    title: '服务',
                    key: 'name'
                }
            ],
        }
    },
    created(){
        this.getData()
    },
    methods:{
        showlist(){
            this.drawers = !this.drawers
            if(this.drawerWidth === "280"){
                this.drawerWidth = "1000"
            }else{
                this.drawerWidth = "280"
            }
        },
        onChange(currentPage){
            let page = currentPage - 1
            let infor = {
                "page_index":page,
                "page_size":10
            }
            axios.post('app/list',infor).then(res=>{
               this.data1= []
                res.data.apps.forEach((item,index)=>{
                    this.data1.push({...item})
                })
            })
        },
        getData(){
            let infor = {
                "page_index":0,
                "page_size":10
            }
            axios.post('app/list',infor).then(res=>{
                this.total = res.data.total_count
                this.data1= []
                res.data.apps.forEach((item,index)=>{
                    this.data1.push({...item})
                })
            })
        },
        addTable(){
            console.log('弹框')
            this.value3 = true
            this.iconShow = true
        },
        handleSelectAll (status) {
            this.$refs.selection.selectAll(status);
        },
        closeSubmit(){
            this.formData= {
                app_name: '',
                app_type: '',
                facet_id: ''
            },
            this.value3 = false
            this.change = false
            this.iconShow = false
        },
        addSubmit(){
            if(this.change){
                this.formData.app_id = this.formData.id
                axios.post('app/update',this.formData).then(res=>{
                    if(res.message){
                        this.$Message.error('修改失败');
                    }else{
                        let index = this.formData._index
                        this.data1.splice(index,1,{...this.formData})
                        this.$Message.success('修改成功')
                    }
                    this.closeSubmit()
                })
            }else{
                axios.post('app/add',this.formData).then(res=>{
                    if(res.message){
                        this.$Message.error(res.message)
                    }else{
                        this.$Message.success('添加成功')
                        this.data1.push({
                            ...this.formData
                        })
                        this.closeSubmit()
                    }
                })
            }
        },
        changeSubmit(params){
            console.log('params',params)
            this.value3 = true
            this.change = true
            this.formData = {...params.row}
        }
    }
}
</script>
<style lang="less">
    .service-information{
        .drawer{
            display: flex;
            flex-direction: row;
            .drawer-left{
                border: 1px solid red;
                width: 100px;
                height: 100px;
            }
        }
        .ivu-table-cell{
            font-size: 18px;
        }
        .top-page{
            margin-top: 24px;
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