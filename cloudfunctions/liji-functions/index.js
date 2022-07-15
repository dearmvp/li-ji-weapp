const getUserInfo = require('./getUserInfo/index');
const getAllData = require('./getAllData/index');
const deleteAllData = require('./deleteAllData/index');
const lookupGiftFriend = require('./lookupGiftFriend/index');
const lookupBookGift = require('./lookupBookGift/index');

const userHandler = require('./services/user');
const bookHandler = require('./services/book');

// 云函数入口函数
exports.main = async (event, context) => {
    switch (event.type) {
        case 'userOpenid':
            return await userHandler.userOpenid(event, context);
        case 'getBookPage':
            return await bookHandler.page(event, context);

        case 'getUserInfo':
            return await getUserInfo.main(event, context);
        case 'getAllData':
            return await getAllData.main(event, context);
        case 'deleteAllData':
            return await deleteAllData.main(event, context);
        case 'lookupGiftFriend':
            return await lookupGiftFriend.main(event, context);
        case 'lookupBookGift':
            return await lookupBookGift.main(event, context);
    }
};