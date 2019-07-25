'use strict';

module.exports = {
  createGroupRequest: {
    groupName: { type: 'string', required: true, min: 1, description: '组名' },
  },

  updateUserRequest: {
    group: { type: 'integer', required: true, min: 1, description: '组别' },
    email: { type: 'string', required: false, format: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, description: '邮箱' },
    phoneNumber: { type: 'string', required: false, format: /^1[34578]\d{9}$/, description: '电话' },
  },
};
