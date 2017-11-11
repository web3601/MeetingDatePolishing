# MeetingDatePolishing
会议室预约模块的日期补齐功能优化
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script src="js/jq.min.js"></script>
    <script language="javascript" type="text/javascript" charset="UTF-8" src="js/arrAndDatePrototype.js"></script>
    <script language="javascript" type="text/javascript" src="js/date/WdatePicker.js"></script>
    <style>
        html, body {
            width: 100%;
            height: 100%;
        }

        table {
            display: inline-block;
            width: 860px;
            height: 300px;
            border: 1px solid #abcdef;
            border-collapse: collapse;
        }

        table thead {
            height: 20%
        }

        table tbody {
            height: 80%
        }

        th, td {
            border: 1px solid #abcdef;
            width: 120px;
            height: 15px
        }
    </style>
</head>
<body>
<!--<div></div>-->
<!--<div></div>-->
<!--<span class="time"></span>-->


<div id="div1"></div>
<div>
    今年是<span class="y"></span>年<br/>

    <span class="m"></span>月<br/>

    <span class="d"></span>日<br/>
    <span class="w"></span><br/>

    <p><span class="md"></span></p>
</div>
<table>
    <thead>
    <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
    </tr>
    <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
    </tr>
    </thead>
</table>

<p></p>
<script>
    $('.y').html(_D().Y());
    $('.m').html(_D().M());
    $('.d').html(_D().D());
    $('.md').html(_D().M_D());
    $('.w').html(_D().W());
    WdatePicker({
        eCont: 'div1', onpicked: function (dp) {
//            console.log('你选择的日期是:' + dp.cal.getDateStr());
            var clickDate = dp.cal.getDateStr();
//            console.log('当前一共是: ' + _D(clickDate).MNUM() + ' 天');
//            console.log('当前星期是: ' + _D(clickDate).W());
            $('.y').html(_D(clickDate).Y());
            $('.m').html(_D(clickDate).M());
            $('.d').html(_D(clickDate).D());
            $('.md').html(_D(clickDate).M_D());
            $('.w').html(_D(clickDate).W());
            pushNormal(clickDate)

        }
    });
    function pushNormal(a) {
        if (!a) {
            var m = _D().YMD();
        } else {
            m = a.replace(/\-/g, '/');
        }
        var eMonthNum = _D(m).MNUM();//当前月多少天
        var eY = Number((m.split('/'))[0]);//当前是哪年
        var eM = Number((m.split('/'))[1]);//当前是几月
        var eD = Number((m.split('/'))[2]);//当前是几号
        var surplusDayNum = eMonthNum - eD;
        var md = [];
        if (surplusDayNum < 7) {
            var minLen = 7 - surplusDayNum;
            for (var i = 0, midArr1 = []; i < (surplusDayNum + 1); i++) {
                midArr1[i] = eY + '/' + eM + '/' + (eD++);
            }
            for (var c = 0, midArr2 = []; c < (minLen + 1); c++) {
                midArr2[c] = ((eM + 1 > 12) ? ((eY + 1) + '/' + 1) : (eY) + '/' + (eM + 1)) + '/' + (c + 1);
            }
            md = midArr1.concat(midArr2);
        } else {
            for (var r = 0; r < surplusDayNum; r++) {
                md[r] = eY + '/' + eM + '/' + (eD++);
            }
        }

        var thArr1 = $('table thead tr:first-child th');
        var thArr2 = $('table thead tr:nth-child(2) th');
        var thLen = thArr1.length;
        for (var z = 0; z < thLen; z++) {
            $(thArr1[z]).html(md[z]);
            $(thArr2[z]).html(_D(md[z]).W())
        }
    }
    pushNormal()
</script>
</body>
</html>