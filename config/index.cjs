/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx1bf8656f266fa61c',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '25bcc63e64034353f91a408fe7d6471d',

  PROVINCE: '北京',
  CITY: '朝阳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '猪猪包',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oDUvL6dKFZZpElOYmlYfGVVNHxw8',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'KjClVaAh3HDWIF0Zpf_mAm3sJ5Rv64YS8nwZNX2B_DI',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '06-22',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '猪猪包', year: '2000', date: '05-24',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '笨猪包', year: '2000', date: '06-22',
        },
        {
          type: '节日', name: '相识纪念日', year: '2019', date: '05-07',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2019-05-07' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-10-1' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'kaEf2d20FUBzLMtDFGehLgpD9Vph5aWWN6lvdAqysno',

  CALLBACK_USERS: [
    {
      name: '郑天欣',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oDUvL6Vifr93nyi8KwmNVoEVXVbM',
    }
  ],

}

module.exports = USER_CONFIG

