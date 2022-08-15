const giftOutService = require('../../alicloud/services/giftOut')

Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        visible: false,
        _id: '',
        friendId: '',
        title: '',
        date: '',
        money: ''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        show(data) {
            console.log(data)
            this.setData({
                visible: true
            })
        },
        onCancel() {
            this.setData({
                visible: false
            })
        },
      async  onSave() {
            if (this.data._id) {
                const res = await giftOutService.updataGiftOut(this.data)
                if (res.success) {
                    wx.showToast({
                        title: '修改成功',
                    })
                    setTimeout(() => {
                        this.setData({
                            visible: false
                        })
                    }, 500);
                }
            } else {
                const res = await giftOutService.addGiftOut(this.data)
                if (res.success) {
                    wx.showToast({
                        title: '添加成功',
                    })
                    setTimeout(() => {
                        this.setData({
                            visible: false
                        })
                    }, 500);
                }
            }
        },
        // 选择联系人
        onSelectFriends() {
            let that = this
            wx.navigateTo({
                url: '/pages/friendSelect/index',
                events: {
                    // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
                    acceptDataFromFriendPage: function (data) {
                        that.setData({
                            friendName: data.name,
                            friendId: data._id,
                        })
                    }
                }
            })
        },
    }
})