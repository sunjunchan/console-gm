<template>
    <div class="service-information">
        <div class="infor">
            <span class="title">可用服务</span> 
            <Button type="primary" class="btn" @click="addTable">增加服务</Button>
            <Table class="c-table" :columns="columns1" :data="data1"></Table>
            <template >
                <Page class="top-page" @on-change="onChange" :total="total" show-elevator></Page>
            </template>
            <Drawer
                title="可用服务"
                v-model="value3"
                width="320"
                :mask-closable="false"
                :styles="styles"
                class="drawer"
            >
                <Table no-data-text="暂无可添加服务" border ref="selection" style="margin-bottom:24px" :columns="columns4" :data="data2">
                </Table>
                <div class="demo-drawer-footer" style="margin-top:24px">
                    <Button style="margin-right: 8px" @click="value3 = false">取消</Button>
                    <Button type="primary" @click="addSubmit()">提交</Button>
                </div>
            </Drawer> 
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
                    title: '服务',
                    key: 'service_name'
                },
                {
                    title: '状态',
                    key: 'status'
                },
                {
                    title: '授权次数',
                    key: 'auth_num'
                },
                {
                    title: '已用次数',
                    key: 'used_num'
                },
                {
                    title: '授权时间',
                    key: 'create_time'
                }
            ],
            data1: [],
            value3: false,
            styles: {
                height: 'calc(100% - 55px)',
                overflow: 'auto',
                paddingBottom: '53px',
                position: 'static'
            },
            data2: [
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
            filterList:[]
        }
    },
    created(){
        this.getData()
    },
    methods:{
        onChange(currentPage){
            let page = currentPage - 1
            let infor = {
                "page_index":page,
                "page_size":10
            }
             axios.post('auth_service/user_auth_list',infor).then(res=>{
                this.data1 = []
                this.filterList = []
                this.total = res.data.total_count
                res.data.auth_services.forEach((item,index)=>{
                    this.filterList.push(item.service_id.split('-')[0])
                    if(item.status === 0 ){
                        item.status = '正常'
                    }else if(item.status === 1 ){
                        item.status = '禁用'
                    }else{
                        item.status = '删除'
                    }
                    this.data1.push({...item})
                })
            })
        },
        getData(){
            let infor = {
                "page_index":0,
                "page_size":10
            }
            axios.post('auth_service/user_auth_list',infor).then(res=>{
                this.data1 = []
                this.filterList = []
                this.total = res.data.total_count
                res.data.auth_services.forEach((item,index)=>{
                    this.filterList.push(item.service_id.split('-')[0])
                    if(item.status === 0 ){
                        item.status = '正常'
                    }else if(item.status === 1 ){
                        item.status = '禁用'
                    }else{
                        item.status = '删除'
                    }
                    this.data1.push({...item})
                })
            })
        },
        addTable(){
            axios.get('auth_service/list_all').then(res=>{
                // console.log(res.data.auth_services,'服务')
                res.data.auth_services.forEach((item,index)=>{
                    this.filterList.forEach((it,ind)=>{           
                        if(it === item.id){
                            delete res.data.auth_services[index]
                        }
                    })
                })
                // console.log(res.data.auth_services,'ass')
                this.data2 = []
                res.data.auth_services.forEach((item,index)=>{
                    this.data2.push({...item})
                })
            })
            this.value3 = true
        },
        handleSelectAll (status) {
            this.$refs.selection.selectAll(status);
        },
        addSubmit(){
            this.value3 = false
            let system_ids = []
            this.$refs.selection.getSelection().forEach((item,index)=>{
                system_ids.push(
                    item.id
                ) 
            })
            let system_ids_s = system_ids.join('#')
            axios.post('auth_service/add',{"system_ids":system_ids_s}).then(res=>{
                if(res.message){
                    this.$Message.error('添加失败');
                }else{
                    this.$Message.success('添加成功')
                    this.getData()
                }
            })
        },
        add(){
            console.log(this.$refs.selection.getSelection() ,'row')
        }
    }
}
</script>
<style lang="less">
    .service-information{
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