//
//  PAFFToast.h
//  Pods
//
//  Created by junming on 3/4/16.
//
//

#import <UIKit/UIKit.h>

@interface PAFFToast : UIView


/**
 * 显示带message信息的toast
 *
 * @param message    toast信息
 * @param duration   toast持续时间
 */
+(void)showToast:(NSString *)message duration:(float)duration;

/**
 * 显示带动画和带message信息的toast
 *
 * @param message        toast信息
 * @param imageArray     UIImage对象队列
 * @param imageDuration  每个UIImage动画的持续时间
 */
+(void)showAnimationToast:(NSString *)message imageArray:(NSArray *)imageArray imageDuration:(CGFloat)imageDuration;

/**
 * 显示带动画和带message信息的toast
 *
 * @param message        toast信息
 * @param imageArray     UIImage对象队列
 * @param imageDuration  每个UIImage动画的持续时间
 * @param duration       toast持续时间
 */
+ (void)showAnimationToast:(NSString *)message imageArray:(NSArray *)imageArray imageDuration:(CGFloat)imageDuration duration:(NSTimeInterval)duration;



/**
 * 隐藏toast
 *
 * @param animated    是否执行动画
 */
+(void)hideAnimated:(BOOL)animated;

/**
 * 隐藏toast
 *
 * @param animated    是否执行动画
 * @param delay       隐藏时间
 */
+ (void)hideAnimated:(BOOL)animated afterDelay:(NSTimeInterval)delay;

@end