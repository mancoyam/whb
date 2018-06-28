const ApiRootUrl = 'http://test.service.59iwh.com/user/v1/';

module.exports = {
  AuthLoginByWeixin: ApiRootUrl + 'login', //微信登录
  Tokenrefresh: ApiRootUrl + 'token/refresh',//刷新令牌
  Profile: ApiRootUrl + 'profile',//当前登录用户资料
  Password: ApiRootUrl + 'profile/password',//修改本人登录密码
  Bookmarkshops: ApiRootUrl + '/bookmarks/shops',//店铺收藏列表
  Bookmarkgoods: ApiRootUrl + '/bookmarks/goods',//商品收藏列表
  Bookmark: ApiRootUrl + '/bookmarks',//添加/取消收藏
  Searchshops: ApiRootUrl + 'searchshops',//搜索店铺
};