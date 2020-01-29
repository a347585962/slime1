#pragma once
#include "base/ccConfig.h"
#if (USE_VIDEO > 0) && (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID || CC_TARGET_PLATFORM == CC_PLATFORM_IOS) && !defined(CC_TARGET_OS_TVOS)

#include "cocos/scripting/js-bindings/jswrapper/SeApi.h"

extern se::Object* __jsb_jsToCPP_proto;
extern se::Class* __jsb_jsToCPP_class;

bool js_register_jsToCPP(se::Object* obj);
bool register_all_jsToCPP(se::Object* obj);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_sendEmailAndFilePic);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_openUrl);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_initAsync);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_showInterstitial);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_preLoadAllAds);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_hideBanner);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_checkNetworkAvailable);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_listAssetFiles);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_showMoreGame);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_setEmailContentAndTitle);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_rateUs);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_showPrivacy);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_showBanner);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_setMap);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_makeToast);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_getSDCardPath);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_adsDestroy);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_initOnAdsRewarded);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_initAdsLoadAsync);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_cacheMoreGame);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_sendEmail);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_preLoadAds);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_popAlertDialog);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_initOnAdsLoaded);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_showReward);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_initOnAdsLoadFailed);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_refreshDCIM);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_getMap);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_getArray);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_showCross);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_initOnAdsClicked);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_isTablet);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_doRuntimePermission);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_setArray);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_initOnAdsCollapsed);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_initOnAdsExpanded);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_static_func);
SE_DECLARE_FUNC(js_jsToCPP_jsToCPP_getInstance);

#endif //#if (USE_VIDEO > 0) && (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID || CC_TARGET_PLATFORM == CC_PLATFORM_IOS) && !defined(CC_TARGET_OS_TVOS)
