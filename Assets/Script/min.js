/*****************
*
*    Author: Mohammad Rahmani
*    Author URL: http://mohammadrahmani.com
*
*/

let doz = document.getElementById('doz')
var els = '<div class="child" onclick="child_click(event)"></div>'

// row data
let row = []
let row_id = []

// column data
let column = []
let column_id = []

// click to win
let click = []

// path to win
let win = [
    ["r1", "c12", "c13"],
    ["r1", "c13", "c12"],
    ["r1", "r2", "r3"],
    ["r1", "c22", "c33"],
    ["r1", "c33", "c22"],
    ["r1", "r3", "r2"],

    ["c12", "c22", "c32"],
    ["c12", "r1", "c13"],
    ["c12", "c13", "r1"],
    ["c12", "c32", "c22"],

    [ "c13", "c23", "c33" ],
    [ "c13", "c22", "r3" ],
    [ "c13", "r3", "c22" ],
    [ "c13", "c12", "r1" ],
    [ "c13", "r1", "c12" ],
    [ "c13", "c33", "c23" ],

    [ "r2", "c22", "c23" ],
    [ "r2", "r3", "r1" ],
    [ "r2", "r1", "r3" ],
    [ "r2", "c23", "c22" ],

    [ "c22", "c33", "r1" ],
    [ "c22", "r1", "c33" ],
    [ "c22", "c13", "r3" ],
    [ "c22", "r3", "c13" ],
    [ "c22", "r2", "c23" ],
    [ "c22", "c23", "r2" ],
    [ "c22", "c12", "c32" ],
    [ "c22", "c32", "c12" ],

    [ "c23", "c22", "r2" ],
    [ "c23", "c13", "c33" ],
    [ "c23", "c33", "c13" ],
    [ "c23", "r2", "c22" ],

    ["r3", "c32", "c33"],
    ["r3", "c33", "c32"],
    ["r3", "r2", "r1"],
    ["r3", "r1", "r2"],
    ["r3", "c22", "c13"],
    ["r3", "c13", "c22"],

    ["c32", "c22", "c12"],
    ["c32", "c12", "c22"],
    ["c32", "r3", "c33"],
    ["c32", "c33", "r3"],

    [ "c33", "c23", "c13" ],
    [ "c33", "c13", "c23" ],
    [ "c33", "c32", "r3" ],
    [ "c33", "r3", "c32" ],
    [ "c33", "c22", "r1" ],
    [ "c33", "r1", "c22" ],
]

// match click to win
let match = []
let match2 = []

// append child to parent
for(let i=1;i<=3;i++) {
    var el = document.createElement('div')
        el.className = 'child'
        el.setAttribute('id', "r"+i)
        el.setAttribute('onclick', 'child_click(event)')
        row.push(i)
        row_id.push("r"+i)
    doz.appendChild(el)
    for(let c=2;c<=3;c++) {
        var el = document.createElement('div')
            el.className = 'child'
            el.setAttribute('id', "c"+i+""+c)
            el.setAttribute('onclick', 'child_click(event)')
            column.push(c)
            column_id.push("c"+i+""+c)
        doz.appendChild(el)
    }
}

let child_click = (event) => {

}
