'use strict';
import Vue from 'vue';

Vue.prototype.MAN_CODE_200 = function () {
    const a = 200;
    return a;
};
Vue.prototype.MAN_CODE_201 = function () {
    const a = 201;
    return a;
};
//场馆状态
Vue.prototype.statusList = function (mark) {
    const a = ['使用中','未使用'];
    return a[mark-1];
};
//订单状态
Vue.prototype.orderStatus = function (mark) {
    const a = ['待支付','待审核','待发货','已发货','已完成','已超时','已取消','已结款','异常'];
    return a[mark-1];
};