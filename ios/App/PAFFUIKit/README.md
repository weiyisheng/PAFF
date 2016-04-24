## 导入
1.PAFFUIKit以copy方式导入项目 <br>
2.pod 添加：<br>
pod 'Masonry’<br>
pod 'MBProgressHUD', '~> 0.9.2'
3.注意需要RN的接口需要项目集成react native的环境

## RN 接口

### 1.NumberInputModule 

显示

```objc
RCT_EXPORT_METHOD(show:(NSDictionary *) options
              completeCallback:(RCTResponseSenderBlock)completeCallback
			  cancelCallback:(RCTResponseSenderBlock)cancelCallback)
```

取消

```objc
RCT_EXPORT_METHOD(cancel)
```

更新消息

```objc
RCT_EXPORT_METHOD(updateMessage:(NSString *) message type:(int) type)
```

更新

```objc
RCT_EXPORT_METHOD(updateCallback:(RCTResponseSenderBlock) completeCallback 
cancelCallback:(RCTResponseSenderBlock) cancelCallback)
```

### 2.SecurityPasswordRNModule

显示：

```objc
RCT_EXPORT_METHOD(show
                  :(NSString *)type title
                  :(NSString *)title message
                  :(NSString *)message alert
                  :(NSString *)alert callback
                  :(RCTResponseSenderBlock)callback)
```

取消:

```objc
RCT_EXPORT_METHOD(cancel)
```
 
## PAFFPopoverView （module:PAFFTips）

显示tips

```objc
RCT_EXPORT_METHOD(show:(NSInteger)tag 
message:(NSString *)message)
```

## PAFFCircleProgress (Native封装)
 
## PAFFToast   (module:PAFFRCTToast)

```objc
/**
 *  显示带message信息的toast
 *
 * @param message                 toast信息
 * @param duration                持续时长
 */
RCT_EXPORT_METHOD(show:(NSString *)message
              duration:(CGFloat)duration)
```

## PAFFLoading  (module:PAFFRCTLoading)
展现loading (RN调用)

```objc
/**
 * 显示带message信息的loading
 *
 * @param message                 loading信息
 */
RCT_EXPORT_METHOD(show:(NSString *)message)
```

结束loading动画(RN调用)

```objc
/**
 * 结束带message信息的loading
 *
 * @param message                 toast结束信息
 * @param success                 成功失败
 */
RCT_EXPORT_METHOD(end:(NSString *)message
              success:(BOOL)success)
```                  

隐藏loading (RN调用)

```objc
RCT_EXPORT_METHOD(dismiss)
```