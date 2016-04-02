//
//  PAFFSecurityKeyboardProtocol.h
//  FFProject
//
//  Created by luochenxun on 16/3/7.
//  Copyright © 2016年 pingan. All rights reserved.
//

#ifndef PAFFSecurityKeyboardProtocol_h
#define PAFFSecurityKeyboardProtocol_h

@protocol PAFFSecurityKeyboardEncryptDelegate  <NSObject>

- (NSString *)encode:(NSString *)text;
- (NSString *)decode:(NSString *)text;

@end

#endif /* PAFFSecurityKeyboardProtocol_h */
