const app = getApp();

const db = app.mpserverless.db
const userInfo = app.userInfo;

// TODO 待验证 这样是不是好点？
const {
  db
} = require('../index');

/**
 * 获取用户数据范围
 *
 * @return data {Array.<string>} 用户id集合。
 * @author chadwuo
 */
exports.getUserDataScope = async () => {
  // 没有加入家庭，就返回自己的id
  if (!userInfo.familyId) {
    return [userInfo._id]
  }

  // 获取家庭信息
  const {
    result: familyInfos
  } = await db.collection('family_member').find({
    familyId: userInfo.familyId,
    status: 1
  })

  let dataScope = familyInfos.map(i => {
    return i.userId
  })

  return dataScope
}