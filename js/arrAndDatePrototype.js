/**
 * Created by dnv on 2017/11/11 011.
 */
Array.prototype.delCopy = function () {
    var len = this.length;
    for (var a = 0, n = []; a < len; a++) {
        if (n.indexOf(this[a]) == -1) {
            n.push(this[a])
        }
    }
    return n;
};
Array.prototype._sort = function () {
    return this.sort(function (a, b) {
        return a - b
    });
};
Array.prototype.sort_ = function () {
    return this.sort(function (a, b) {
        return b - a
    });
};
//var arr = [1, 2, 1, 2, 3, 4, 4, 43, 100, -1, -100, 0];
//    console.log(arr);
//    console.log(arr.delCopy());
//    console.log(arr.delCopy()._sort());
//    console.log(arr.delCopy().sort_());
Date.prototype.Y = function () {
    return this.getFullYear();
};
Date.prototype.M = function () {
    return (this.getMonth() + 1) < 10 ? '0' + (this.getMonth() + 1) : this.getMonth() + 1;
};
Date.prototype.D = function () {
    return this.getDate() < 10 ? ('0' + this.getDate()) : this.getDate();
};
Date.prototype.YM = function () {
    return this.Y() + '/' + this.M();
};
Date.prototype.MD = function () {
    return (this.getMonth() + 1) + '/' + this.getDate();
};
Date.prototype.M_D = function () {
    return (this.getMonth() + 1) + '月' + this.getDate();
};
Date.prototype.YMD = function () {
    return this.Y() + '/' + this.M() + '/' + this.D();
};
Date.prototype.W = function () {
    var NUM = this.getDay();
    var weekarr = ['日', '一', '二', '三', '四', '五', '六'];
    return ' 星期' + weekarr[NUM];
};
Date.prototype.YMD24Week = function () {
    return this.toLocaleString('chinses', {hour12: false}) + ' ' + this.W();
};
Date.prototype.YMD24 = function () {
    return this.toLocaleString('chinses', {hour12: false});
};
Date.prototype.MNUM = function () {
    var _str = this.YM();
    return new Date(_str.split('/')[0], _str.split('/')[1], 0).getDate()
};
function _D(i) {
    var _now;
    if (!i) {
        _now = new Date();
    } else {
        _now = new Date(i);
    }
    return _now;
}
//var now = new Date();
//    console.log(now.Y());
//    console.log(now.M());
//    console.log(now.D());
//    console.log(now.MD());
//    console.log(now.YMD());
//    console.log(now.W());
//    console.log(now.YMD24());
//    console.log(now.YMD24Week());


String.prototype.tongJi = function () {
//        var str='abbcccccccddddfffff';
    var midStr = this.split('');
//        console.log(midStr);
    var len = midStr.length;
    for (var a = 0, num = 0, n = {}, res = ''; a < len; a++) {
        if (!n[midStr[a]]) {
            n[midStr[a]] = 1
        } else {
            n[midStr[a]]++;
        }
        if (num < n[midStr[a]]) {
            res = midStr[a];
            num = n[midStr[a]];
        }
    }
    return n, res;
}

var str = 'abbcccccccddddfffff';
var midStr = str.split('');
//        console.log(midStr);
var len = midStr.length;
for (var a = 0, num = 0, n = {}, res = ''; a < len; a++) {
    if (!n[midStr[a]]) {
        n[midStr[a]] = 1
    } else {
        n[midStr[a]]++;
    }
    if (num < n[midStr[a]]) {
        res = midStr[a];
        num = n[midStr[a]];
    }
}
//console.log(n);
//console.log('出现最多的字母是: '+res+ ' 出现了 '+num+' 次');
