'use strict';

module.exports = {
  user: {
    id: { type: 'string', description: 'id 唯一键' },
    userName: { type: 'string', description: '用户姓名' },
    sexy: { type: 'string', description: '用户性别' },
    age: { type: 'integer', description: '年龄' },
    group: { type: 'integer', description: '组别' },
    isLeader: { type: 'boolean', description: '是否小组负责人' },
    email: { type: 'string', description: '邮箱' },
    phoneNumber: { type: 'string', description: '电话' },
  },
  group: {
    id: { type: 'string', description: 'id 唯一键' },
    groupName: { type: 'string', description: '组名' },
  },
};
