//
//  PAFFFABButton.h
//  Pods
//
//  Created by arnold on 16/4/4.
//
//

#import "PAFFButton.h"

@interface PAFFFABButton : PAFFButton

/**
 *  悬浮按钮
 *
 *  @param type  类型
 *  @param frame 位置大小
 *
 *  @return 悬浮按钮
 */
- (instancetype)initWithType:(PAFFButtonType)type
                       frame:(CGRect)frame;
@end
