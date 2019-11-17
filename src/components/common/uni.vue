<template> 
   <div class="block">
    <el-cascader
    placeholder="试试搜索：软件学院"
    :options="options"
    filterable  v-model="msg" @change="setUser"></el-cascader>
</div>
</template>

<script>
  export default {
    data() {
      return {
          msg:"",
        options: [{
          value: '文学院',
          label: '文学院',
          children: [{
            value: '汉语国际教育',
            label: '汉语国际教育',
          }, {
            value: '汉语言文学',
            label: '汉语言文学',
          },
          {
            value: '戏剧影视文学',
            label: '戏剧影视文学',
          }]
        }, {
          value: '历史文化学院',
          label: '历史文化学院',
          children: [{
            value: '酒店管理',
            label: '酒店管理',
          }, {
            value: '历史学',
            label: '历史学',
          },
          {
            value: '考古学',
            label: '考古学',
          },{
            value: '旅游管理',
            label: '旅游管理',
          }]
          
        }, {
          value: '哲学社会学学院',
          label: '哲学社会学学院',
          children: [{
            value: '社会工作',
            label: '社会工作'
          }, {
            value: '社会学',
            label: '社会学'
          }, {
            value: '哲学',
            label: '哲学'
          }]
        },{
          value: '政治与公共管理学院',
          label: '政治与公共管理学院',
          children: [{
            value: '国际政治',
            label: '国际政治'
          }, {
            value: '行政管理',
            label: '行政管理'
          }, {
            value: '劳动与社会保障',
            label: '劳动与社会保障'
          }]
        },
        {
          value: '外国语学院',
          label: '外国语学院',
          children: [{
            value: '俄语',
            label: '俄语'
          }, {
            value: '法语',
            label: '法语'
          }, {
            value: '翻译',
            label: '翻译'
          },{
            value: '日语',
            label: '日语'
          },{
            value: '英语',
            label: '英语'
          }]
        },
        {
          value: '教育科学学院',
          label: '教育科学学院',
          children: [{
            value: '教育学',
            label: '教育学'
          }, {
            value: '学前教育',
            label: '学前教育'
          }, {
            value: '应用心理学',
            label: '应用心理学'
          }]
        },
        {
          value: '法学院',
          label: '法学院',
          children: [{
            value: '法学',
            label: '法学'
          }]
        },
        {
          value: '数学科学学院',
          label: '数学科学学院',
          children: [{
            value: '数学与应用数学',
            label: '数学与应用数学'
          }, {
            value: '统计学',
            label: '统计学'
          }, {
            value: '信息与计算科学',
            label: '信息与计算科学'
          }]
        },
        {
          value: '计算机与信息技术学院',
          label: '计算机与信息技术学院',
          children: [{
            value: '计算机科学与技术',
            label: '计算机科学与技术'
          }]
        },
        {
          value: '物理电子工程学院',
          label: '物理电子工程学院',
          children: [{
            value: '电子信息科学与技术',
            label: '电子信息科学与技术'
          }, {
            value: '光电信息科学与工程',
            label: '光电信息科学与工程'
          }, {
            value: '物理学',
            label: '物理学'
          }]
        },
        {
          value: '化学化工学院',
          label: '化学化工学院',
          children: [{
            value: '材料化学',
            label: '材料化学'
          }, {
            value: '化学',
            label: '化学'
          }, {
            value: '应用化学',
            label: '应用化学'
          }]
        },
        {
          value: '生命科学学院',
          label: '生命科学学院',
          children: [{
            value: '生物工程',
            label: '生物工程'
          }, {
            value: '生物科学',
            label: '生物科学'
          }, {
            value: '食品科学与工程',
            label: '食品科学与工程'
          }]
        },
        {
          value: '环境与资源学院',
          label: '环境与资源学院',
          children: [{
            value: '环境工程',
            label: '环境工程'
          }, {
            value: '环境科学',
            label: '环境科学'
          }, {
            value: '环境生态工程',
            label: '环境生态工程'
          },{
            value: '自然地理与资源环境',
            label: '自然地理与资源环境'
          }]
        },
        {
          value: '经济与管理学院',
          label: '经济与管理学院',
          children: [{
            value: '电子商务',
            label: '电子商务'
          }, {
            value: '工商管理',
            label: '工商管理'
          }, {
            value: '国际经济与贸易',
            label: '国际经济与贸易'
          },{
            value: '会计学',
            label: '会计学'
          },{
            value: '金融学',
            label: '金融学'
          },{
            value: '经济统计学',
            label: '经济统计学'
          },{
            value: '经济学',
            label: '经济学'
          },{
            value: '理科试验班（会计学）',
            label: '理科试验班（会计学）'
          },{
            value: '理科试验班（经济学）',
            label: '理科试验班（经济学）'
          },{
            value: '信息管理与信息系统',
            label: '信息管理与信息系统'
          }]
        },
        {
          value: '体育学院',
          label: '体育学院',
          children: [{
            value: '社会体育',
            label: '社会体育'
          }, {
            value: '体育教育',
            label: '体育教育'
          }, {
            value: '运动训练',
            label: '运动训练'
          }]
        },
        {
          value: '音乐学院',
          label: '音乐学院',
          children: [{
            value: '舞蹈编导',
            label: '舞蹈编导'
          }, {
            value: '音乐表演',
            label: '音乐表演'
          }, {
            value: '音乐学',
            label: '音乐学'
          }, {
            value: '作曲与作曲技术理论',
            label: '作曲与作曲技术理论'
          }]
        },
        {
          value: '美术学院',
          label: '美术学院',
          children: [{
            value: '雕塑（材料与技术）',
            label: '雕塑（材料与技术）'
          },
          {
            value: '雕塑（传统造像）',
            label: '雕塑（传统造像）'
          },{
            value: '公共艺术',
            label: '公共艺术'
          },{
            value: '环境设计（景观设计）',
            label: '环境设计（景观设计）'
          },{
            value: '环境设计（室内设计）',
            label: '环境设计（室内设计）'
          },{
            value: '绘画（版画）',
            label: '绘画（版画）'
          },{
            value: '绘画（国画）',
            label: '绘画（国画）'
          },{
            value: '绘画（实验艺术）',
            label: '绘画（实验艺术）'
          },{
            value: '视觉传达设计',
            label: '视觉传达设计'
          },{
            value: '数字媒体艺术',
            label: '数字媒体艺术'
          }]
        },
        {
          value: '继续教育学院',
          label: '继续教育学院',
          children: [{
            value: '其它',
            label: '其它'
          }]
        },
        {
          value: '国际教育交流学院',
          label: '国际教育交流学院',
          children: [{
            value: '其它',
            label: '其它'
          }]
        },
        {
          value: '初民学院',
          label: '初民学院',
          children: [{
            value: '汉语言文学',
            label: '汉语言文学'
          }, {
            value: '历史学',
            label: '历史学'
          }, {
            value: '哲学',
            label: '哲学'
          }]
        },
        {
          value: '电力工程系',
          label: '电力工程系',
          children: [{
            value: '电气工程及其自动化',
            label: '电气工程及其自动化'
          }, {
            value: '建筑电气与智能化',
            label: '建筑电气与智能化'
          }]
        },
        {
          value: '动力工程系',
          label: '动力工程系',
          children: [{
            value: '建筑环境与能源应用工程',
            label: '建筑环境与能源应用工程'
          }, {
            value: '能源与动力工程',
            label: '能源与动力工程'
          }]
        }, {
          value: '自动化系',
          label: '自动化系',
          children: [{
            value: '测控技术与仪器',
            label: '测控技术与仪器'
          }, {
            value: '机械电子工程',
            label: '机械电子工程'
          }, {
            value: '自动化',
            label: '自动化'
          }]
        }, {
          value: '土木工程系',
          label: '土木工程系',
          children: [{
            value: '建筑学',
            label: '建筑学'
          }, {
            value: '土木工程',
            label: '土木工程'
          }]
        }, {
          value: '电子信息工程系',
          label: '电子信息工程系',
          children: [{
            value: '电子信息工程建筑学',
            label: '电子信息工程'
          }]
        }, {
          value: '软件学院',
          label: '软件学院',
          children: [{
            value: '软件工程',
            label: '软件工程'
          }]
        }, {
          value: '环境工程系',
          label: '环境工程系',
          children: [{
            value: '工程管理',
            label: '工程管理'
          }, {
            value: '工程造价',
            label: '工程造价'
          }]
        }, {
          value: '马克思主义学院',
          label: '马克思主义学院',
          children: [{
            value: '其它',
            label: '其它'
          }]
        }, {
          value: '新闻学院',
          label: '新闻学院',
          children: [{
            value: '广告学',
            label: '广告学'
          }, {
            value: '新闻学',
            label: '新闻学'
          }]
        }, {
          value: '大数据学院',
          label: '大数据学院',
          children: [{
            value: '其它',
            label: '其它'
          }]
        }, {
          value: '现代教育技术学院',
          label: '现代教育技术学院',
          children: [{
            value: '其它',
            label: '其它'
          }]
        }]
      };
    },
    methods:{
        setUser(){
            this.$emit('transferUser',this.msg)
        }
    }
  };
</script>