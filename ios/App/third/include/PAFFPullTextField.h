//
//  PAFFPullTextField.h
//  Pods
//
//  Created by 陈美锦 on 16/3/10.
//
//

#import "PAFFTextField.h"

@class PAFFTextView;
typedef void (^PAFFPullTextFieldSelectBlock)(void);



@interface PAFFPullTextField : PAFFTextField

@property (nonatomic, copy) PAFFPullTextFieldSelectBlock selectBlock;

@end
