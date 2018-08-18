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

let child_click = (ev) => {
    let elem = ev.target.getAttribute('id')
    click.push(elem)
    
    if (click.length <= 3) {
        // if find match to win
        if (match.length > 0) {
            if (click.length >= 1 && click.length <= 2) {
                for(m of match) {
                    document.getElementById(m[1]).style.background = '#eee'
                    document.getElementById(m[2]).style.background = '#eee'
                }
            }
            match.filter((index) => {
                let ig = index.find((els, index) => {
                    return els === elem && index === 1
                })
                if (ig && typeof ig !== 'undefined') {
                    match2.push(index)
                    
                    if (click.length >= 3)
                        return;

                    for(m of match2) {
                        document.getElementById(m[2]).style.background = 'green'
                    }
                }
            })
        } else {
            // find match path to win
            win.filter((index) => {
                let ig = index.find((els, index) => {
                    return els === elem && index === 0
                })
                if (ig && typeof ig !== 'undefined') {
                    match.push(index)
                    for(m of match) {
                        document.getElementById(m[1]).style.background = 'green'
                        document.getElementById(m[2]).style.background = 'green'
                    }
                }
            })
        }
        ev.target.style.background = 'blue'
        checkWin(click);
    }
}

// check win user
let checkWin = (win_array) => {
    return win.find((el) => {
        if (arraysEqual(win_array, el)) {
            alert('you win')

            return
        }
    })
}

// check array equal {[user click], [match array]}
let arraysEqual = (a, b) => {
    if (a instanceof Array && b instanceof Array) {
        if (a.length !== b.length) 
            return false;
        for(var i=0; i<a.length; i++) 
            if (!arraysEqual(a[i], b[i]))
                return false;
        return true;
    } else {
        return a == b;
    }
}
