'use strict';

const {Record} = require('immutable');

var InitialState = Record({
    home: new(Record({
        isFetching: false,
        error: null,
        items:[],
    })),
});
export default InitialState;