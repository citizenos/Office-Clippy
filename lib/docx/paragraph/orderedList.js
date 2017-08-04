/*jslint nomen: true */
/*globals exports */
//http://stackoverflow.com/questions/24894787/docx-cant-seem-to-get-a-bulleted-list-to-render - need numbering.xml otherwise its default (1,2,3)

exports.number = function () {
    'use strict';

    return {
        'w:pStyle': [{
            _attr: {
                'w:val': 'ListParagraph'
            }
        }]
    }
};

exports.numberLiProperties = function (level) {
    'use strict';

    if (!level) level = '0';
    return {
        'w:numPr': [{
            'w:ilvl': [{
                _attr: {
                    'w:val': level.toString()
                }
            }]
        },           
        {
            'w:numId': [{
                _attr: {
                    'w:val': '8'
                }
            }]
        }]
    };
};

exports.numerLiIndent = function () {
    'use strict';
    return {
        'w:rPr':[{
            'w:sz': [{
                _attr: {
                    'w:val': '16'
                }
            }]
        }] 
    };
};