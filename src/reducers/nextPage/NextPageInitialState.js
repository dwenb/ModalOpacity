'use strict';

const {Record} = require('immutable');

var InitialState = Record({
    info: new(Record({
        isFetching: false,
        error: null,
        name: '张三',       //给个默认值
        age: '18',
    })),
});
export default InitialState;