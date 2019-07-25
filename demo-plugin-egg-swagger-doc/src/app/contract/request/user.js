'use strict';

module.exports = {
    registUserRequest: {
        loginname: { type: 'string', required: true, description: '登录名' },
        password: { type: 'string', required: true, description: '密码' },
        // sexy: { type: 'string', required: true, enum: ['male', 'female'], description: '用户性别' },
        // age: { type: 'integer', required: true, min: 1, description: '年龄' },
        // group: { type: 'integer', required: true, min: 1, description: '组别' },
        // isLeader: { type: 'boolean', required: true, description: '是否小组负责人' },
        // email: { type: 'string', required: false, example: '952766532@qq.com', format: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, description: '邮箱' },
        // phoneNumber: { type: 'string', required: false, example: '18801731528', format: /^1[34578]\d{9}$/, description: '电话' },
    },

    updateUserRequest: {
        group: { type: 'integer', required: true, min: 1, description: '组别' },
        isLeader: { type: 'boolean', required: true, description: '是否小组负责人' },
        email: { type: 'string', required: false, format: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, description: '邮箱' },
        phoneNumber: { type: 'string', required: false, format: /^1[34578]\d{9}$/, description: '电话' },
    },
};