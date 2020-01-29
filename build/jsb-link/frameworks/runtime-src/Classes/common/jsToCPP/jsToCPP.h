//
//  jsToCPP.h
//  hello_world-mobile
//
//  Created by wusonglin on 2019/8/9.
//

#ifndef jsToCPP_hpp
#define jsToCPP_hpp

#include <stdio.h>
#include <string.h>
#include <map>
#include <vector>
#include <functional>

using namespace std;
class jsToCPP
{
public:
    //  单例
    static jsToCPP* getInstance();
    
    // 静态方法
    static void static_func();
    
    
    
    // 数组
    void setArray(string str);
    vector<string> getArray();
    
    // map
    void setMap(map<string, string> param);
    map<string, string> getMap();
    
    // 回调函数
    void initAsync(const function<void(int, string)>& cb);
    
    template<typename TypeOne, typename TypeTwo>
    string mapToString(map<TypeOne, TypeTwo>& m);
    
    //展示banner
    void showBanner();
    
    //
    void hideBanner();
    
    //展示全屏
    bool showInterstitial();
    
    //展示Cross
    bool showCross();
    
    
    //reward
    bool showReward();

    //广告回调
    void initAdsLoadAsync(const function<void(int)>& cb);

    void preLoadAllAds();
    
    void preLoadAds(int type);

    
    void initOnAdsLoaded(const function<void(int)>& cb);
    void initOnAdsClicked(const function<void(int)>& cb);
    void initOnAdsExpanded(const function<void(int)>& cb);
    void initOnAdsCollapsed(const function<void(int)>& cb);
    
    void initOnAdsLoadFailed(const function<void(std::string, int)>& cb);
    void initOnAdsRewarded(const function<void(std::string, int, bool)>& cb);
    
    //系统方法
    /**
     *  @brief Send Email by system default.
     *
     *  @param subject email subject.
     *  @param content email content.
     */
    void sendEmail(string subject, string body);
    
    /**
     *  @brief Send Email with pic by system default.
     *
     *  @param subject email subject.
     *  @param content email content.(html style)
     *  @param content email fileName.
     */
    void sendEmailAndFilePic(string subject, string message, string fileName);
    /**
     * @brief pop a system default dialog
     *
     * @param message
     */
    void popAlertDialog(string message);
    
    /**
     *  @brief  check network is available
     *
     *  @return true:network is connective.
     */
    bool checkNetworkAvailable();
    
    /**
     *  @brief  check current device is tablet(android)/ipad(ios).
     *
     *  @return true:is tablet(android)/ipad(ios)
     */
    bool isTablet();
    
    /**
     *  @brief save image to album
     *
     *  @param Image*   img->get from RenderTexture->newImage
     *  @param callback callback called after complete save img.
     */
//    virtual void saveToAlbum(Image*,std::function<void(bool)> callback,std::string proDir = "default");
    
    int listAssetFiles(const std::string& path);
    /***********************some function for common libs.*********************/
    /**
     *  @brief show more game page.
     */
    void showMoreGame();
    
    void cacheMoreGame();
    /**
     *  @brief show privacy page
     */
    void showPrivacy();
    
    /**
     *  @brief show NewsBlast
     *
     *  @param NewsBlastMode  NewsModeLaunch  or  NewsModeResume
     */
//    virtual void showNewsBlast(NewsBlastMode);
    
    /***********************some function only valid for Android.*********************/
    /**
     *  @brief  get SD card path.only valid for android OS.
     *
     *  @return SD card path.
     */
    std::string getSDCardPath();
    
    /**
     *  @brief only valid for android OS.
     *
     *  @param message
     */
    void makeToast(string message);
    
    /**
     *  @brief refresh .only valid for Android OS.
     *
     *  @param sFileDir path
     */
    void refreshDCIM(const std::string& sFileDir);
    
    /**
     *  @brief rateUs.
     */
    void rateUs();
    /********************these functions will be CDEPRECATED_ATTRIBUTE*****************/
//    void rating();
//    void go2MarketDetail(std::string packagename);
//    void contactUs();
//    float densityScale();
    void openUrl(const std::string& path);
    
    /**
     *   申请保存相册权限 js调用
        sFileDir 传入保存的图片路径
        requestCode 保存方法  1代表保存到相册 2代表分享按钮  发邮件
        cb 回调
     */
    void doRuntimePermission(const std::string& sFileDir, const int requestCode, const function<void(bool)>& cb);
    
    //设置邮件标题和内容
    void setEmailContentAndTitle(const std::string& mailTitle,const std::string& mailcontent);
    
    //广告销毁
    void adsDestroy();
    
public:
    int age;
    
    function<void(int, string)> _initCb;
    std::function<void(int)> _onAdsLoadedCb;
    std::function<void(int)> _onAdsClickedCb;
    std::function<void(int)> _onAdsExpandedCb;
    std::function<void(int)> _onAdsCollapsedCb;
    
    std::function<void(std::string, int)> _onAdsLoadFailed;
    std::function<void(std::string, int, bool)> _onAdsRewardedCb;
    
    //保存相册回调
    std::function<void(int)> _saveImageCb;
private:
    string getString(const int32_t& a);
    string getString(const int64_t& a);
    string getString(const string& s);
    
    std::string newSharePath();
private:
    vector<string> _mArray;
    map<string, string> _mMap;
    vector<string> m_sFilePath;
    vector<string> m_sMailContent;
};

#endif /* jsToCPP_hpp */
