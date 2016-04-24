//
//  PAFFToast.h
//  Pods
//
//  Created by junming on 3/4/16.
//
//

#import <UIKit/UIKit.h>
#import "RCTBridgeModule.h"

@interface PAFFToast : UIView<RCTBridgeModule>

/**
 * 显示带message信息的toast
 *
 * @param message    toast信息
 * @param duration   toast持续时间
 */
+ (void)showToast:(NSString *)message
        duration:(float)duration;

@end