//
//  PAFFToast.h
//  Pods
//
//  Created by junming on 3/4/16.
//
//

#import <UIKit/UIKit.h>
#import "RCTBridgeModule.h"

@interface PAFFCustomLoading : UIView<RCTBridgeModule>

#pragma mark - default
/**
 *  设置默认的图片动画
 *
 *  @param animationImages animationImages
 */
+ (void)setAnimationImages:(NSArray *)animationImages;

/**
 * 显示带message信息的loading
 *
 * @param message    loading信息
 */
+ (void)show:(NSString *)message;

/**
 *  文本动画和带message信息的loading
 *
 *  @param message  loading信息
 *  @param success  结束的标志
 */
+ (void)end:(NSString *)message
    success:(BOOL)success;

/**
 * 隐藏loading
 *
 */
+(void)dismiss;

#pragma mark - custom
/**
 * 显示带动画和带message信息的toast
 *
 * @param message        toast信息
 * @param imageArray     UIImage对象队列
 * @param imageDuration  每个UIImage动画的持续时间
 */
+(void)showLoading:(NSString *)message
        imageArray:(NSArray *)imageArray
     imageDuration:(CGFloat)imageDuration;


/**
 * 显示带动画和带message信息的toast
 *
 * @param message        toast信息
 * @param imageArray     UIImage对象队列
 * @param imageDuration  每个UIImage动画的持续时间
 * @param duration       toast持续时间
 */
+ (void)showLoading:(NSString *)message
         imageArray:(NSArray *)imageArray
      imageDuration:(CGFloat)imageDuration
           duration:(NSTimeInterval)duration;



/**
 *  文本动画和带message信息的toast
 *
 *  @param message  toast信息
 *  @param image    end的图片
 *  @param duration toast持续时间
 */
+ (void)endLoading:(NSString *)message
             image:(UIImage *)image
          duration:(NSTimeInterval)duration;

/**
 *  隐藏loading
 *
 *  @param animated 是否动画
 */
+ (void)hideAnimated:(BOOL)animated;

/**
 *  隐藏loading
 *
 *  @param animated 是否动画
 *  @param delay    延迟多久执行
 */
+ (void)hideAnimated:(BOOL)animated
          afterDelay:(NSTimeInterval)delay;

@end