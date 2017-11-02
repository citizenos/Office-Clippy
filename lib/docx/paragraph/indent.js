exports.indent = function (left) {
    'use strict';

    return {
        'w:ind': [{
            _attr: {
                'w:left': left
            }
        }]
    };
};