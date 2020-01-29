//
//  jsToCPP.cpp
//  hello_world-mobile
//
//  Created by wusonglin on 2019/8/9.
//

#include "jsToCPP.h"
#include "AoneClient.h"
#include "AdsManager.h"
#include "STSystemFunction.h"
#include "cocos2d.h"
#include "platform/CCApplication.h"
#include "base/CCScheduler.h"
#include "RuntimePermissionManager.h"
#include "FileUtility.h"
using namespace cocos2d;
jsToCPP* jsToCPP::getInstance()
{
    static jsToCPP _instance;
    
    return &_instance;
}

void jsToCPP::static_func()
{
    printf("--- <%s : %d>\n", __func__, __LINE__);
}

void jsToCPP::setArray(string str)
{
    printf("--- <%s : %d> array add = %s\n", __func__, __LINE__, str.c_str());
    _mArray.push_back(str);
}
vector<string> jsToCPP::getArray()
{
    return _mArray;
}
//展示banner
void jsToCPP::showBanner()
{
    AdsManager::getInstance()->showAds(ADS_TYPE::kTypeBannerAds);
}

//
void jsToCPP::hideBanner()
{

    AdsManager::getInstance()->removeAds(ADS_TYPE::kTypeBannerAds);
}

//展示全屏
bool jsToCPP::showInterstitial()
{
    return AdsManager::getInstance()->showAds(ADS_TYPE::kTypeInterstitialAds);
}
bool jsToCPP::showCross()
{
    return AdsManager::getInstance()->showAds(ADS_TYPE::kTypeCrosspromoAds);
    
}
void jsToCPP::preLoadAllAds()
{
    
    AdsManager::getInstance()->preloadAllAds();
}
void jsToCPP::preLoadAds(int type)
{
    AdsManager::getInstance()->preloadAds(ADS_TYPE(type));
}
//reward
bool jsToCPP::showReward()
{
    return AdsManager::getInstance()->showAds(ADS_TYPE::kTypeRewardedAds);
}
void jsToCPP::setMap(map<string, string> param)
{
    map<string, string>::iterator iter;
    for(iter = param.begin(); iter != param.end(); iter++) {
        printf("--- <%s : %d> key = %s\n", __func__, __LINE__, iter -> first.c_str());
        printf("--- <%s : %d> valut = %s\n", __func__, __LINE__, iter -> second.c_str());
        _mMap.insert(pair<string, string>(iter -> first, iter -> second));
    }
}
map<string, string> jsToCPP::getMap()
{
    return _mMap;
   
}

void jsToCPP::initAdsLoadAsync(const function<void(int type)>& cb)
{
    //AdsManager::getInstance()->onAdsLoaded = cb;
}
void jsToCPP::initOnAdsLoaded(const function<void(int)>& cb)
{
   _onAdsLoadedCb = cb;
   AdsManager::getInstance()->onAdsLoaded = [this] (int type){
       //回调函数，添加到coco主线程，解决android崩溃问题
       Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
           if(_onAdsLoadedCb)
               _onAdsLoadedCb(type);
       });
   };
}
void jsToCPP::initOnAdsClicked(const function<void(int)>& cb)
{
    _onAdsClickedCb = cb;
//    assert(_onAdsClickedCb);
    AdsManager::getInstance()->onAdsClicked= [this] (int type){
        Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
            if(_onAdsClickedCb)
                _onAdsClickedCb(type);
        });
    };
}
void jsToCPP::initOnAdsExpanded(const function<void(int)>& cb)
{
    _onAdsExpandedCb = cb;
//    assert(_onAdsExpandedCb);
    AdsManager::getInstance()->onAdsExpanded= [this] (int type){
        Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
            if(_onAdsExpandedCb)
                _onAdsExpandedCb(type);
        });
    };
}
void jsToCPP::initOnAdsCollapsed(const function<void(int)>& cb)
{
    _onAdsCollapsedCb = cb;
//    assert(_onAdsCollapsedCb);
    AdsManager::getInstance()->onAdsCollapsed= [this] (int type){
        Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
            if(_onAdsCollapsedCb)
                _onAdsCollapsedCb(type);
            
        });
    };
}
void jsToCPP::initOnAdsLoadFailed(const function<void(std::string, int)>& cb)
{
    _onAdsLoadFailed = cb;
//    assert(_onAdsLoadFailed);
    AdsManager::getInstance()->onAdsLoadFailed= [this] (std::string name, int type){
        Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
            if(_onAdsLoadFailed)
                _onAdsLoadFailed(name, type);
            
        });
    };
    
}
void jsToCPP::initOnAdsRewarded(const function<void(std::string, int, bool)>& cb)
{
    _onAdsRewardedCb = cb;
//    assert(_onAdsRewardedCb);
    AdsManager::getInstance()->onAdsRewarded= [this] (std::string name, int type, bool isSuccess){
        Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
            if(_onAdsRewardedCb)
                _onAdsRewardedCb(name, type, isSuccess);
        });
    };
    
}


void _initCallback(int code, std::map<string, string> dataMap)
{
    jsToCPP* obj = jsToCPP::getInstance();
    
    string mapStr = obj -> mapToString(dataMap);
    
    obj -> _initCb(code, mapStr);
}

void jsToCPP::initAsync(const function<void(int, string)>& cb)
{
    _initCb = cb;
    
    AoneClient *client = new AoneClient();
    
    client -> initAsync(_initCallback);
}

template<typename TypeOne, typename TypeTwo>
string jsToCPP::mapToString(map<TypeOne, TypeTwo>& m)
{
    if(m.empty()) return "";
    string str = "{";
    typename map<TypeOne, TypeTwo>::iterator it;
    for (it = m.begin(); it != m.end(); it++)
    {
        str += "\"" + getString(it -> first) + "\":\"" + getString(it -> second) + "\"";
        str += ",";
    }
    // delete the last ","
    str = str.substr(0, str.length()-1);
    str += "}";
    return str;
}

// =====   Private Method

string jsToCPP::getString(const int32_t& a)
{
    char c[1024] = {0};
    snprintf(c, sizeof(c), "%d", a);
    return c;
}

string jsToCPP::getString(const int64_t& a)
{
    char c[1024] = {0};
    snprintf(c, sizeof(c), "%lld", a);
    return c;
}

string jsToCPP::getString(const string& s)
{
    return s;
}
void jsToCPP::sendEmail(string subject, string body)
{
    STSystemFunction _cfsys;
    _cfsys.sendEmail(subject.data(), body.data());
}

void jsToCPP::sendEmailAndFilePic(string subject, string message, string fileName)
{
    STSystemFunction _cfsys;
    _cfsys.sendEmailAndFilePic(subject.data(), message.data(), fileName.data());
    
}
void jsToCPP::popAlertDialog(string message)
{
    STSystemFunction _cfsys;
    _cfsys.popAlertDialog(message.data());
    
    
}
bool jsToCPP::checkNetworkAvailable()
{
    STSystemFunction _cfsys;
    
    return _cfsys.checkNetworkAvailable();
}

/**
 *  @brief  check current device is tablet(android)/ipad(ios).
 *
 *  @return true:is tablet(android)/ipad(ios)
 */
bool jsToCPP::isTablet()
{
    STSystemFunction _cfsys;
    
    return _cfsys.isTablet();
    
}

int jsToCPP::listAssetFiles(const std::string& path)
{
    STSystemFunction _cfsys;
    
    return _cfsys.listAssetFiles(path);
    
}

void jsToCPP::showMoreGame()
{
    STSystemFunction _cfsys;
    
    _cfsys.showMoreGame();
    
}

void jsToCPP::cacheMoreGame()
{
    STSystemFunction _cfsys;
    
    _cfsys.cacheMoreGame();
    
}
/**
 *  @brief show privacy page
 */
void jsToCPP::showPrivacy()
{
    
    STSystemFunction _cfsys;
    
    _cfsys.showPrivacy();
}

std::string jsToCPP::getSDCardPath()
{
    STSystemFunction _cfsys;
    
    
    return _cfsys.getSDCardPath();
}

/**
 *  @brief only valid for android OS.
 *
 *  @param message
 */
void jsToCPP::makeToast(string message)
{
    STSystemFunction _cfsys;
    
    
    _cfsys.makeToast(message.data());
    
}

void jsToCPP::refreshDCIM(const std::string& sFileDir)
{
    STSystemFunction _cfsys;
    
    
    _cfsys.refreshDCIM(sFileDir);
    
}

void jsToCPP::rateUs()
{
    STSystemFunction _cfsys;
    
    
    _cfsys.rateUs();
}
void jsToCPP::openUrl(const std::string& path)
{
    STSystemFunction _cfsys;
    
    
    _cfsys.openUrl(path);
    
}
//void rating();
//void go2MarketDetail(std::string packagename);
//void contactUs();
//float densityScale();
//void openUrl(const std::string&);

void jsToCPP::doRuntimePermission(const std::string& sFileDir, const int requestCode, const function<void(bool)>& cb)
{
    _saveImageCb = cb;
    //用一个成员变量保存
    m_sFilePath.clear();
    m_sFilePath.push_back(sFileDir);
    RuntimePermissionManager::getInstance()->onPermissionGrantedResult = [&](int requestCode,bool bgranted){
        if(bgranted){
            //保存到相册
            if(requestCode == 1){
                if(m_sFilePath.size() > 0){
                    string path = m_sFilePath.at(0);
                    //重新生成一个Image对象
                    Image* img = new Image();
                    img->initWithImageFile(path);
                    //回到主线程
                    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
                        STSystemFunction _cfsys;
                        _cfsys.saveToAlbum(img, [=](bool isSuccess){
                            
                            Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
                                if(_saveImageCb)
                                    _saveImageCb(isSuccess);
                                
                            });
                            
                        });
                        img->autorelease();
                    });
                }
            }
            //发送邮件分享
            else if(requestCode == 2){
                if(m_sFilePath.size() > 0){
                    string path = m_sFilePath.at(0);
                    //重新生成一个Image对象
                    Image* img = new Image();
                    img->initWithImageFile(path);
                    //回到主线程
                    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
                        STSystemFunction _cfsys;
                        
                        string _shareFilePath = newSharePath();
                        img->saveToFile(_shareFilePath);
                        img->autorelease();
                        //邮件标题
                        string mailTitle = m_sMailContent.size() > 0 ? m_sMailContent.at(0) : "";
                        
                        //邮件内容
                        string mailcontent = m_sMailContent.size() == 2 ? m_sMailContent.at(1) : "I just made a delicious Food at this SUPER FUNNN app!!! Download it for FREE now! See if you can make a better one!";
                        
                        
                        string content;
#if (CC_TARGET_PLATFORM == CC_PLATFORM_IOS)
                        string appId = "";
                        auto map = FileUtils::getInstance()->getValueMapFromFile("AppConfig.plist");
                        auto itor = map.find("AppleId");
                        if(itor != map.end()){
                            auto value = itor->second;
                            if(value.getType() == Value::Type::STRING) {
                                appId = value.asString();
                            }
                        }
                        content = StringUtils::format("%s<p><a href=‘http://itunes.apple.com/app/%s’>http://itunes.apple.com/app/%s</a></p>",mailcontent.c_str(), appId.c_str(),appId.c_str());
#else
                        content = mailcontent;
#endif
                        _cfsys.sendEmailAndFilePic(mailTitle.c_str(), content.c_str(), _shareFilePath.c_str());
                        
                    });
                }
            }
        }else{
            //调用失败
            Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
                if(_saveImageCb)
                    _saveImageCb(false);
            });
            
        }
    };
    
    //调用申请权限接口的标识，会在你的回调方法中用到，可以是任何值
//    int requestCode = 1;
    //调用权限申请的方法,根据需要申请敏感权限
    RuntimePermissionManager::getInstance()->requestRuntimePermissions(requestCode, PERMISSION::kWriteExternalStorage);
    
}
//设置邮件内容和标题
void jsToCPP::setEmailContentAndTitle(const std::string& mailTitle,const std::string& mailcontent)
{
    m_sMailContent.clear();
    m_sMailContent.push_back(mailTitle);
    m_sMailContent.push_back(mailcontent);
    
}

std::string jsToCPP::newSharePath(){
    string name = "shareCache";
    
    FileUtility::createDirectory((FileUtility::getStoragePath()+ "/"+name).c_str());
    FileUtility::createDirectory((FileUtility::getStoragePath()+ "/"+name +"/"+ "share").c_str());
    string rootPath;
    rootPath = FileUtility::getStoragePath()+"/"+name + "/" + "share" + "/";
    
    struct timeval tv;
    gettimeofday(&tv,NULL);
    long nowtime =  tv.tv_sec * 1000 + tv.tv_usec / 1000;
    
    auto sharePath = StringUtils::format("%s%ld.png",rootPath.c_str(),nowtime);
    return sharePath;
}
//广告销毁
void jsToCPP::adsDestroy()
{
    AdsManager::getInstance()->destroy();
    
}
