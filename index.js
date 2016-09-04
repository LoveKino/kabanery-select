'use strict';

let {
    map
} = require('bolzano');

let {
    n, view
} = require('kabanery');

/**
 * {
 *
 *      options: [[name, description]],
 *
 *      selected
 * }
 */

module.exports = view((data) => {
    data.selected = data.selected || data.options[0][0];

    let onchange = data.onchange;

    return n('select', {
        onchange: (e) => {
            data.selected = e.target.value;
            onchange && onchange(data.selected);
        }
    }, map(data.options, ([name, description]) => {
        let selectStr = '';
        if (data.selected === name) {
            selectStr = 'selected="selected"';
        }

        if (description === undefined) {
            description = name;
        }

        return n(`option value=${name} ${selectStr}`, description);
    }));
});
