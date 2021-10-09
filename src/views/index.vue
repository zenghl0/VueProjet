<template>
  <div class="home-page-wrap">
    <div class="page-title">北京交通大学信息检索</div>
    <div class="search-wrap">
      <el-input
        v-model="inputValue"
        placeholder="请输入"
        @change="_handleInputChange"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-radio v-model="radioValue" label="1" @change="_handleRadioChange">
        精准查询
      </el-radio>
      <el-radio v-model="radioValue" label="2" @change="_handleRadioChange">
        模糊查询
      </el-radio>
    </div>
    <div class="content-list-wrap">
      <div
        class="list-item"
        v-for="(item, index) in dataList"
        :key="index"
        @click="_handleItemClick(item, index)"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="footer-wrap" v-if="total">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="_handleCurrentChange"
        @prev-click="_handleCurrentChange"
        @next-click="_handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "", // 输入框绑定的值
      radioValue: "1", // 查询条件
      dataList: [], // 展示的数据
      curPage: 1, // 当前的页码
      total: 100, // 页码总数
    };
  },
  mounted() {
    this._getDataList();
  },
  methods: {
    /**
     * @description 拉取展示的数据
     */
    _getDataList() {
      // 模拟数据
      this.dataList = [
        {
          id: 1,
          title: "标题1",
        },
        {
          id: 2,
          title: "标题2",
        },
        {
          id: 3,
          title:
            "标题3是抠脚大汉福送来的开发建设了都快疯了收到回复是空的法律还是老地方是德弗里斯的费拉达斯理发师德弗里斯分身乏术了饭ksjhkj sdhfskdf克斯经典护肤开始的粉红色看到回复都开始疯狂时代妇科收到就回房间开始地方和可视电话福克斯地方11111111",
        },
        {
          id: 4,
          title: "标题4",
        },
        {
          id: 5,
          title: "标题是看见饭后漱口绝代风华是空的fzzz5",
        },
        {
          id: 6,
          title: "标题6",
        },
        {
          id: 7,
          title: "标题7",
        },
        {
          id: 8,
          title: "标题8sdjkfhjskdfhksdhfksdfh",
        },
        {
          id: 9,
          title: "标题9",
        },
        {
          id: 10,
          title: "标题6",
        },
        {
          id: 11,
          title: "标题7",
        },
        {
          id: 12,
          title: "标题8sdjkfhjskdfhksdhfksdfh",
        },
        {
          id: 13,
          title: "标题9",
        },
        {
          id: 14,
          title: "标题9",
        },
        {
          id: 15,
          title: "标题9",
        },
        {
          id: 16,
          title: "标题9",
        },
        {
          id: 17,
          title: "jshdfsdfskjdgfskdgfskdgfsdkgfskjdgfjskdgf",
        },
      ];
      // 查询参数
      let query = {};
      let url = "/api/getDateList";
      // 调用接口
      this.$axios
        .get(url, query)
        .then((res) => {
          console.log("接口返回的数据: ", res);
        })
        .catch((err) => {
          console.log("调用接口出错： ", err);
        });
    },
    /**
     * @description input输入框内容改变后，输入框失去焦点或用户按下回车时触发事件
     */
    _handleInputChange(value) {
      this.inputValue = value;
      // 改变了输入框内容后，重新拉取数据
      this._getDataList();
    },
    /**
     * @description 点击不同的查询条件发生的事件
     */
    _handleRadioChange(value) {
      this.radioValue = value;
      // 改变了查询条件后，重新拉取数据
      this._getDataList();
    },
    /**
     * @description 点击了列表的信息后，跳转到内容详情页
     */
    _handleItemClick(item, index) {
      this.$router.push({
        name: "DetailPage",
        params: {
          id: item.id || index,
        },
      });
    },
    /**
     * @description 点击上/下一页、页码事件
     */
    _handleCurrentChange(pageNum) {
      this.curPage = pageNum;
      // 改变了分页的参数之后，重新拉取数据
      this._getDataList();
    },
  },
};
</script>

<style lang="scss">
.home-page-wrap {
  padding: 20px;
  overflow-y: hidden;
  min-width: 1000px;
  .page-title {
    padding: 20px 0;
    font-size: 48px;
    font-weight: bold;
    padding-left: 31%;
  }
  .search-wrap {
    text-align: center;
    .el-input {
      width: 60%;
      margin-right: 35px;
    }
  }
  .content-list-wrap {
    min-height: 100px;
    max-height: 650px;
    margin-top: 20px;
    overflow: auto;
    .list-item {
      margin: 10px;
      padding: 0 7%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 18px;
      font-weight: bold;
      color: #409eff;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .footer-wrap {
    margin-top: 30px;
    padding-left: 7%;
  }
}
</style>
