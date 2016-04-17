//
//  PAFFUIKitMacor.h
//  Pods
//
//  Created by junming on 2/26/16.
//
//

#import <Foundation/Foundation.h>

#import "PAFFCommonThemeMarco.h"

#ifndef PAFFUIKitMacor_h
#define PAFFUIKitMacor_h


#define PAFFUIKit_Color(r,g,b)           [UIColor colorWithRed:r/255.0 green:g/255.0 blue:b/255.0 alpha:1.0]
#define PAFFUIKit_Color_Alpha(r,g,b,a)   [UIColor colorWithRed:r/255.0 green:g/255.0 blue:b/255.0 alpha:a]
#define PAFFUIKit_Color_Hex_Alpha(h,a)   PAFFUIKit_Color_Alpha(((h>>16)&0xFF), ((h>>8)&0xFF), (h&0xFF), a)
#define PAFFUIKit_Color_Hex(h)           PAFFUIKit_Color_Hex_Alpha(h, 1.0)

#define PAFFUIKit_SubGrey PA_COLOR_FOR_KEY(@"999999")
#define PAFFUIKit_DisGrey PA_COLOR_FOR_KEY(@"dddddd")
#define PAFFUIKit_Blue PA_COLOR_FOR_KEY(@"3399ff")
#define PAFFUIKit_Red PA_COLOR_FOR_KEY(@"#cc0000")
#define PAFFUIKit_Black PA_COLOR_FOR_KEY(@"333333")

#define PAFFUIKit_Input_H2 PA_SYS_FONT_FOR_SIZE(16)
#define PAFFUIKit_Input_T1 PA_SYS_FONT_FOR_SIZE(13)

#define PAFFUIKit_Input_T2 PA_SYS_FONT_FOR_SIZE(11)

#endif
