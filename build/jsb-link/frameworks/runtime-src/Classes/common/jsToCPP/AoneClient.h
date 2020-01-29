//
//  AoneClient.h
//  hello_world-mobile
//
//  Created by wusonglin on 2019/8/9.
//

#ifndef AoneClient_hpp
#define AoneClient_hpp

#include <stdio.h>
#include <string>
#include <map>

using namespace std;

typedef void(*AONESDK_CB)(int result, map<string, string> dataMap);
typedef void(*AONESDK_CB_AD)(int result);
class AoneClient
{
public:
    AoneClient();
    ~AoneClient();
    
    void initAsync(AONESDK_CB cb);
    
    void initAsync_AD(AONESDK_CB_AD cb);
private:
    AONESDK_CB _initCb;
    AONESDK_CB_AD _initCb_AD;
};

#endif /* AoneClient_hpp */
