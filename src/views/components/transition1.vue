<template>
  <div class="app-container">

    <el-button v-on:click="shuffle3">Shuffle</el-button>
    <el-button v-on:click="add3">Add</el-button>
    <el-button v-on:click="remove3">Remove</el-button>
    <div
      class="cl-table el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition"
      style="width: 100%;">
      <div class="hidden-columns">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="el-table__header-wrapper">
        <table cellspacing="0" cellpadding="0" border="0" class="el-table__header">
          <thead>
          <tr>
            <th colspan="1" rowspan="1" class="el-table_1_column_7 is-leaf">
              <div class="cell">日期<span @click="sort_" class="caret-wrapper"><i class="sort-caret ascending sort"
                                                                                :class="{'sort-t':sortType==1,'sort-b':sortType==2}"
                                                                                style="margin-top: 3px"></i></span>
              </div>
            </th>
            <th colspan="1" rowspan="1" class="el-table_1_column_8 descending is-leaf">
              <div class="cell">姓名<span class="caret-wrapper"><i class="sort-caret ascending"></i><i
                class="sort-caret descending"></i></span></div>
            </th>
            <th colspan="1" rowspan="1" class="el-table_1_column_9 is-leaf">
              <div class="cell">地址</div>
            </th>
          </tr>
          </thead>
        </table>
      </div>
      <div class="el-table__body-wrapper">
        <table cellspacing="0" cellpadding="0" border="0" class="el-table__body">
          <tbody>
          <transition-group name="list-complete" tag="ul">
            <li  class="list-complete-item" v-for="item in items" v-bind:key="item">
              <tr class="el-table__row">
                <td class="el-table_1_column_7">
                  <div class="cell">{{item}}</div>
                </td>
                <td class="el-table_1_column_8">
                  <div class="cell">{{item}}</div>
                </td>
                <td class="el-table_1_column_9">
                  <div class="cell">{{item}}</div>
                </td>
              </tr>
            </li>
          </transition-group>

          <!----></tbody>
        </table><!----></div><!----><!----><!----><!---->
    </div>
  </div>
</template>

<script>
  import 'static/lodash.min';
  export default {
    data() {
      return {
        s:5,
        show: true,
        show1: true,
        show2: true,
        show3: true,
        sort: true,
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNum: 10,
        tableData: [{
          date: '1',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '3',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '4',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        sortType: 0,
      }
    },

    methods: {
      sort_() {
        if (this.sortType === 0) {
          this.sortType += 1;
        } else if (this.sortType === 1) {
          this.sortType += 1;
        } else {
          this.sortType -= 1;
        }
        this.tableData = this.tableData.sort(this.compare("date"));


        this.tableData = _.shuffle(this.tableData);
        console.log(this.tableData);
      },
      compare(prop) {
        return function (obj1, obj2) {
          var val1 = obj1[prop];
          var val2 = obj2[prop];
          if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
            val1 = Number(val1);
            val2 = Number(val2);
          }
          if (val1 < val2) {
            return -1;
          } else if (val1 > val2) {
            return 1;
          } else {
            return 0;
          }
        }
      },
      randomIndex3: function () {
        return Math.floor(Math.random() * this.items.length)
      },
      add3: function () {
        this.items.splice(this.randomIndex3(), 0, this.nextNum++)
      },
      remove3: function () {
        this.items.splice(this.randomIndex3(), 1)
      },
      shuffle3: function () {
        this.items = _.shuffle(this.items)
      }
    }
  }

</script>

<style>
  /*排序*/
  .sort-t {
    transition: all .5s;
    transform: rotatex(0deg);
  }

  .sort-b {
    transition: all .5s;
    transform: rotateX(180deg);
  }

  .cl-table table,
  .cl-table thead {
    width: 100%;
  }

  .cl-table tr {
    display: flex;
    width: 100%;
  }
  .cl-table td:first-child,
  .cl-table th:first-child {
    flex: 2;
  }
  .cl-table td:nth-child(2),
  .cl-table th:nth-child(2){
    flex: 2;
  }
  .cl-table td:nth-child(3),
  .cl-table th:nth-child(3){
    flex: 3;
  }
  .cl-table td div,
  .cl-table th div{
    margin-top: 8px;
  }
  .flip-list-move {
    transition: transform 1s;
  }
  .cl-table ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .list-complete-item {
    transition: all 1s;
  }
  .list-complete-enter, .list-complete-leave-to
    /* .list-complete-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-complete-leave-active {
    position: absolute;
  }
</style>
