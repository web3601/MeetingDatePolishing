# MeetingDatePolishing
会议室预约模块的日期补齐功能优化

#### 思路





#### 效果图
![](https://github.com/web3601/MeetingDatePolishing/blob/master/mp4/md1.gif)


### 思路

##### 找到月份和年的临界点(项目里面规定的是预约期限7天)

正常范围内直接填充,
当前月的天数减去当前点击的日期小于7这个临界则需要补齐天数


##### 其中不需要判断闰年

##### 只需要判断是否为12月,如果是则年份加1,月份变为1,其余不变

### 尤其注意一点,判断一月多少天,判断星期几的已独立封装