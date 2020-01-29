//
//  AoneClient.cpp
//  hello_world-mobile
//
//  Created by wusonglin on 2019/8/9.
//

#include "AoneClient.h"
#include "AdsManager.h"
AoneClient::AoneClient()
{
    printf("--- <%s : %d>\n", __func__, __LINE__);
}

AoneClient::~AoneClient()
{
    printf("--- <%s : %d>\n", __func__, __LINE__);
}

void AoneClient::initAsync(AONESDK_CB cb)
{
    _initCb = cb;
    assert(_initCb);
    printf("--- <%s : %d>\n", __func__, __LINE__);
    // 模拟初始化操作
    map<std::string, std::string> dataMap;
    dataMap.insert(pair<string, string>("name", "chenxi"));
    dataMap.insert(pair<string, string>("sex", "man"));
    dataMap.insert(pair<string, string>("skill", "Object-C"));
    dataMap.insert(pair<string, string>("type", "facebook"));
    int code = 1;
    
    _initCb(code, dataMap);
}
void AoneClient::initAsync_AD(AONESDK_CB_AD cb)
{
    _initCb_AD = cb;

    AdsManager::getInstance()->onAdsLoaded = [this] (int type){
        printf("cpp hui diao ");
        _initCb_AD(type);
        
        
    };
    
}
