#include "jsb_jstocpp_auto.hpp"
#if (USE_VIDEO > 0) && (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID || CC_TARGET_PLATFORM == CC_PLATFORM_IOS) && !defined(CC_TARGET_OS_TVOS)
#include "scripting/js-bindings/manual/jsb_conversions.hpp"
#include "scripting/js-bindings/manual/jsb_global.h"
#include "jsToCPP.h"

se::Object* __jsb_jsToCPP_proto = nullptr;
se::Class* __jsb_jsToCPP_class = nullptr;

static bool js_jsToCPP_jsToCPP_sendEmailAndFilePic(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_sendEmailAndFilePic : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 3) {
        std::string arg0;
        std::string arg1;
        std::string arg2;
        ok &= seval_to_std_string(args[0], &arg0);
        ok &= seval_to_std_string(args[1], &arg1);
        ok &= seval_to_std_string(args[2], &arg2);
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_sendEmailAndFilePic : Error processing arguments");
        cobj->sendEmailAndFilePic(arg0, arg1, arg2);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 3);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_sendEmailAndFilePic)

static bool js_jsToCPP_jsToCPP_openUrl(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_openUrl : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::string arg0;
        ok &= seval_to_std_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_openUrl : Error processing arguments");
        cobj->openUrl(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_openUrl)

static bool js_jsToCPP_jsToCPP_initAsync(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_initAsync : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::function<void (int, std::string)> arg0;
        do {
            if (args[0].isObject() && args[0].toObject()->isFunction())
            {
                se::Value jsThis(s.thisObject());
                se::Value jsFunc(args[0]);
                jsThis.toObject()->attachObject(jsFunc.toObject());
                auto lambda = [=](int larg0, std::string larg1) -> void {
                    se::ScriptEngine::getInstance()->clearException();
                    se::AutoHandleScope hs;
        
                    CC_UNUSED bool ok = true;
                    se::ValueArray args;
                    args.resize(2);
                    ok &= int32_to_seval(larg0, &args[0]);
                    ok &= std_string_to_seval(larg1, &args[1]);
                    se::Value rval;
                    se::Object* thisObj = jsThis.isObject() ? jsThis.toObject() : nullptr;
                    se::Object* funcObj = jsFunc.toObject();
                    bool succeed = funcObj->call(args, thisObj, &rval);
                    if (!succeed) {
                        se::ScriptEngine::getInstance()->clearException();
                    }
                };
                arg0 = lambda;
            }
            else
            {
                arg0 = nullptr;
            }
        } while(false)
        ;
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_initAsync : Error processing arguments");
        cobj->initAsync(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_initAsync)

static bool js_jsToCPP_jsToCPP_showInterstitial(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_showInterstitial : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        bool result = cobj->showInterstitial();
        ok &= boolean_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_showInterstitial : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_showInterstitial)

static bool js_jsToCPP_jsToCPP_preLoadAllAds(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_preLoadAllAds : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        cobj->preLoadAllAds();
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_preLoadAllAds)

static bool js_jsToCPP_jsToCPP_hideBanner(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_hideBanner : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        cobj->hideBanner();
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_hideBanner)

static bool js_jsToCPP_jsToCPP_checkNetworkAvailable(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_checkNetworkAvailable : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        bool result = cobj->checkNetworkAvailable();
        ok &= boolean_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_checkNetworkAvailable : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_checkNetworkAvailable)

static bool js_jsToCPP_jsToCPP_listAssetFiles(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_listAssetFiles : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::string arg0;
        ok &= seval_to_std_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_listAssetFiles : Error processing arguments");
        int result = cobj->listAssetFiles(arg0);
        ok &= int32_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_listAssetFiles : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_listAssetFiles)

static bool js_jsToCPP_jsToCPP_showMoreGame(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_showMoreGame : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        cobj->showMoreGame();
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_showMoreGame)

static bool js_jsToCPP_jsToCPP_setEmailContentAndTitle(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_setEmailContentAndTitle : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 2) {
        std::string arg0;
        std::string arg1;
        ok &= seval_to_std_string(args[0], &arg0);
        ok &= seval_to_std_string(args[1], &arg1);
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_setEmailContentAndTitle : Error processing arguments");
        cobj->setEmailContentAndTitle(arg0, arg1);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 2);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_setEmailContentAndTitle)

static bool js_jsToCPP_jsToCPP_rateUs(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_rateUs : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        cobj->rateUs();
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_rateUs)

static bool js_jsToCPP_jsToCPP_showPrivacy(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_showPrivacy : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        cobj->showPrivacy();
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_showPrivacy)

static bool js_jsToCPP_jsToCPP_showBanner(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_showBanner : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        cobj->showBanner();
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_showBanner)

static bool js_jsToCPP_jsToCPP_setMap(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_setMap : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::map<std::string, std::string> arg0;
        ok &= seval_to_std_map_string_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_setMap : Error processing arguments");
        cobj->setMap(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_setMap)

static bool js_jsToCPP_jsToCPP_makeToast(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_makeToast : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::string arg0;
        ok &= seval_to_std_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_makeToast : Error processing arguments");
        cobj->makeToast(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_makeToast)

static bool js_jsToCPP_jsToCPP_getSDCardPath(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_getSDCardPath : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getSDCardPath();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_getSDCardPath : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_getSDCardPath)

static bool js_jsToCPP_jsToCPP_adsDestroy(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_adsDestroy : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        cobj->adsDestroy();
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_adsDestroy)

static bool js_jsToCPP_jsToCPP_initOnAdsRewarded(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_initOnAdsRewarded : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::function<void (std::string, int, bool)> arg0;
        do {
            if (args[0].isObject() && args[0].toObject()->isFunction())
            {
                se::Value jsThis(s.thisObject());
                se::Value jsFunc(args[0]);
                jsThis.toObject()->attachObject(jsFunc.toObject());
                auto lambda = [=](std::string larg0, int larg1, bool larg2) -> void {
                    se::ScriptEngine::getInstance()->clearException();
                    se::AutoHandleScope hs;
        
                    CC_UNUSED bool ok = true;
                    se::ValueArray args;
                    args.resize(3);
                    ok &= std_string_to_seval(larg0, &args[0]);
                    ok &= int32_to_seval(larg1, &args[1]);
                    ok &= boolean_to_seval(larg2, &args[2]);
                    se::Value rval;
                    se::Object* thisObj = jsThis.isObject() ? jsThis.toObject() : nullptr;
                    se::Object* funcObj = jsFunc.toObject();
                    bool succeed = funcObj->call(args, thisObj, &rval);
                    if (!succeed) {
                        se::ScriptEngine::getInstance()->clearException();
                    }
                };
                arg0 = lambda;
            }
            else
            {
                arg0 = nullptr;
            }
        } while(false)
        ;
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_initOnAdsRewarded : Error processing arguments");
        cobj->initOnAdsRewarded(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_initOnAdsRewarded)

static bool js_jsToCPP_jsToCPP_initAdsLoadAsync(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_initAdsLoadAsync : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::function<void (int)> arg0;
        do {
            if (args[0].isObject() && args[0].toObject()->isFunction())
            {
                se::Value jsThis(s.thisObject());
                se::Value jsFunc(args[0]);
                jsThis.toObject()->attachObject(jsFunc.toObject());
                auto lambda = [=](int larg0) -> void {
                    se::ScriptEngine::getInstance()->clearException();
                    se::AutoHandleScope hs;
        
                    CC_UNUSED bool ok = true;
                    se::ValueArray args;
                    args.resize(1);
                    ok &= int32_to_seval(larg0, &args[0]);
                    se::Value rval;
                    se::Object* thisObj = jsThis.isObject() ? jsThis.toObject() : nullptr;
                    se::Object* funcObj = jsFunc.toObject();
                    bool succeed = funcObj->call(args, thisObj, &rval);
                    if (!succeed) {
                        se::ScriptEngine::getInstance()->clearException();
                    }
                };
                arg0 = lambda;
            }
            else
            {
                arg0 = nullptr;
            }
        } while(false)
        ;
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_initAdsLoadAsync : Error processing arguments");
        cobj->initAdsLoadAsync(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_initAdsLoadAsync)

static bool js_jsToCPP_jsToCPP_cacheMoreGame(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_cacheMoreGame : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        cobj->cacheMoreGame();
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_cacheMoreGame)

static bool js_jsToCPP_jsToCPP_sendEmail(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_sendEmail : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 2) {
        std::string arg0;
        std::string arg1;
        ok &= seval_to_std_string(args[0], &arg0);
        ok &= seval_to_std_string(args[1], &arg1);
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_sendEmail : Error processing arguments");
        cobj->sendEmail(arg0, arg1);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 2);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_sendEmail)

static bool js_jsToCPP_jsToCPP_preLoadAds(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_preLoadAds : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        int arg0 = 0;
        do { int32_t tmp = 0; ok &= seval_to_int32(args[0], &tmp); arg0 = (int)tmp; } while(false);
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_preLoadAds : Error processing arguments");
        cobj->preLoadAds(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_preLoadAds)

static bool js_jsToCPP_jsToCPP_popAlertDialog(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_popAlertDialog : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::string arg0;
        ok &= seval_to_std_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_popAlertDialog : Error processing arguments");
        cobj->popAlertDialog(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_popAlertDialog)

static bool js_jsToCPP_jsToCPP_initOnAdsLoaded(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_initOnAdsLoaded : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::function<void (int)> arg0;
        do {
            if (args[0].isObject() && args[0].toObject()->isFunction())
            {
                se::Value jsThis(s.thisObject());
                se::Value jsFunc(args[0]);
                jsThis.toObject()->attachObject(jsFunc.toObject());
                auto lambda = [=](int larg0) -> void {
                    se::ScriptEngine::getInstance()->clearException();
                    se::AutoHandleScope hs;
        
                    CC_UNUSED bool ok = true;
                    se::ValueArray args;
                    args.resize(1);
                    ok &= int32_to_seval(larg0, &args[0]);
                    se::Value rval;
                    se::Object* thisObj = jsThis.isObject() ? jsThis.toObject() : nullptr;
                    se::Object* funcObj = jsFunc.toObject();
                    bool succeed = funcObj->call(args, thisObj, &rval);
                    if (!succeed) {
                        se::ScriptEngine::getInstance()->clearException();
                    }
                };
                arg0 = lambda;
            }
            else
            {
                arg0 = nullptr;
            }
        } while(false)
        ;
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_initOnAdsLoaded : Error processing arguments");
        cobj->initOnAdsLoaded(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_initOnAdsLoaded)

static bool js_jsToCPP_jsToCPP_showReward(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_showReward : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        bool result = cobj->showReward();
        ok &= boolean_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_showReward : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_showReward)

static bool js_jsToCPP_jsToCPP_initOnAdsLoadFailed(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_initOnAdsLoadFailed : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::function<void (std::string, int)> arg0;
        do {
            if (args[0].isObject() && args[0].toObject()->isFunction())
            {
                se::Value jsThis(s.thisObject());
                se::Value jsFunc(args[0]);
                jsThis.toObject()->attachObject(jsFunc.toObject());
                auto lambda = [=](std::string larg0, int larg1) -> void {
                    se::ScriptEngine::getInstance()->clearException();
                    se::AutoHandleScope hs;
        
                    CC_UNUSED bool ok = true;
                    se::ValueArray args;
                    args.resize(2);
                    ok &= std_string_to_seval(larg0, &args[0]);
                    ok &= int32_to_seval(larg1, &args[1]);
                    se::Value rval;
                    se::Object* thisObj = jsThis.isObject() ? jsThis.toObject() : nullptr;
                    se::Object* funcObj = jsFunc.toObject();
                    bool succeed = funcObj->call(args, thisObj, &rval);
                    if (!succeed) {
                        se::ScriptEngine::getInstance()->clearException();
                    }
                };
                arg0 = lambda;
            }
            else
            {
                arg0 = nullptr;
            }
        } while(false)
        ;
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_initOnAdsLoadFailed : Error processing arguments");
        cobj->initOnAdsLoadFailed(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_initOnAdsLoadFailed)

static bool js_jsToCPP_jsToCPP_refreshDCIM(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_refreshDCIM : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::string arg0;
        ok &= seval_to_std_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_refreshDCIM : Error processing arguments");
        cobj->refreshDCIM(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_refreshDCIM)

static bool js_jsToCPP_jsToCPP_getMap(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_getMap : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::map<std::string, std::string> result = cobj->getMap();
        ok &= std_map_string_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_getMap : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_getMap)

static bool js_jsToCPP_jsToCPP_getArray(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_getArray : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::vector<std::string> result = cobj->getArray();
        ok &= std_vector_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_getArray : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_getArray)

static bool js_jsToCPP_jsToCPP_showCross(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_showCross : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        bool result = cobj->showCross();
        ok &= boolean_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_showCross : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_showCross)

static bool js_jsToCPP_jsToCPP_initOnAdsClicked(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_initOnAdsClicked : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::function<void (int)> arg0;
        do {
            if (args[0].isObject() && args[0].toObject()->isFunction())
            {
                se::Value jsThis(s.thisObject());
                se::Value jsFunc(args[0]);
                jsThis.toObject()->attachObject(jsFunc.toObject());
                auto lambda = [=](int larg0) -> void {
                    se::ScriptEngine::getInstance()->clearException();
                    se::AutoHandleScope hs;
        
                    CC_UNUSED bool ok = true;
                    se::ValueArray args;
                    args.resize(1);
                    ok &= int32_to_seval(larg0, &args[0]);
                    se::Value rval;
                    se::Object* thisObj = jsThis.isObject() ? jsThis.toObject() : nullptr;
                    se::Object* funcObj = jsFunc.toObject();
                    bool succeed = funcObj->call(args, thisObj, &rval);
                    if (!succeed) {
                        se::ScriptEngine::getInstance()->clearException();
                    }
                };
                arg0 = lambda;
            }
            else
            {
                arg0 = nullptr;
            }
        } while(false)
        ;
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_initOnAdsClicked : Error processing arguments");
        cobj->initOnAdsClicked(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_initOnAdsClicked)

static bool js_jsToCPP_jsToCPP_isTablet(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_isTablet : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        bool result = cobj->isTablet();
        ok &= boolean_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_isTablet : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_isTablet)

static bool js_jsToCPP_jsToCPP_doRuntimePermission(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_doRuntimePermission : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 3) {
        std::string arg0;
        int arg1 = 0;
        std::function<void (bool)> arg2;
        ok &= seval_to_std_string(args[0], &arg0);
        do { int32_t tmp = 0; ok &= seval_to_int32(args[1], &tmp); arg1 = (int)tmp; } while(false);
        do {
            if (args[2].isObject() && args[2].toObject()->isFunction())
            {
                se::Value jsThis(s.thisObject());
                se::Value jsFunc(args[2]);
                jsThis.toObject()->attachObject(jsFunc.toObject());
                auto lambda = [=](bool larg0) -> void {
                    se::ScriptEngine::getInstance()->clearException();
                    se::AutoHandleScope hs;
        
                    CC_UNUSED bool ok = true;
                    se::ValueArray args;
                    args.resize(1);
                    ok &= boolean_to_seval(larg0, &args[0]);
                    se::Value rval;
                    se::Object* thisObj = jsThis.isObject() ? jsThis.toObject() : nullptr;
                    se::Object* funcObj = jsFunc.toObject();
                    bool succeed = funcObj->call(args, thisObj, &rval);
                    if (!succeed) {
                        se::ScriptEngine::getInstance()->clearException();
                    }
                };
                arg2 = lambda;
            }
            else
            {
                arg2 = nullptr;
            }
        } while(false)
        ;
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_doRuntimePermission : Error processing arguments");
        cobj->doRuntimePermission(arg0, arg1, arg2);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 3);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_doRuntimePermission)

static bool js_jsToCPP_jsToCPP_setArray(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_setArray : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::string arg0;
        ok &= seval_to_std_string(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_setArray : Error processing arguments");
        cobj->setArray(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_setArray)

static bool js_jsToCPP_jsToCPP_initOnAdsCollapsed(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_initOnAdsCollapsed : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::function<void (int)> arg0;
        do {
            if (args[0].isObject() && args[0].toObject()->isFunction())
            {
                se::Value jsThis(s.thisObject());
                se::Value jsFunc(args[0]);
                jsThis.toObject()->attachObject(jsFunc.toObject());
                auto lambda = [=](int larg0) -> void {
                    se::ScriptEngine::getInstance()->clearException();
                    se::AutoHandleScope hs;
        
                    CC_UNUSED bool ok = true;
                    se::ValueArray args;
                    args.resize(1);
                    ok &= int32_to_seval(larg0, &args[0]);
                    se::Value rval;
                    se::Object* thisObj = jsThis.isObject() ? jsThis.toObject() : nullptr;
                    se::Object* funcObj = jsFunc.toObject();
                    bool succeed = funcObj->call(args, thisObj, &rval);
                    if (!succeed) {
                        se::ScriptEngine::getInstance()->clearException();
                    }
                };
                arg0 = lambda;
            }
            else
            {
                arg0 = nullptr;
            }
        } while(false)
        ;
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_initOnAdsCollapsed : Error processing arguments");
        cobj->initOnAdsCollapsed(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_initOnAdsCollapsed)

static bool js_jsToCPP_jsToCPP_initOnAdsExpanded(se::State& s)
{
    jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_jsToCPP_jsToCPP_initOnAdsExpanded : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::function<void (int)> arg0;
        do {
            if (args[0].isObject() && args[0].toObject()->isFunction())
            {
                se::Value jsThis(s.thisObject());
                se::Value jsFunc(args[0]);
                jsThis.toObject()->attachObject(jsFunc.toObject());
                auto lambda = [=](int larg0) -> void {
                    se::ScriptEngine::getInstance()->clearException();
                    se::AutoHandleScope hs;
        
                    CC_UNUSED bool ok = true;
                    se::ValueArray args;
                    args.resize(1);
                    ok &= int32_to_seval(larg0, &args[0]);
                    se::Value rval;
                    se::Object* thisObj = jsThis.isObject() ? jsThis.toObject() : nullptr;
                    se::Object* funcObj = jsFunc.toObject();
                    bool succeed = funcObj->call(args, thisObj, &rval);
                    if (!succeed) {
                        se::ScriptEngine::getInstance()->clearException();
                    }
                };
                arg0 = lambda;
            }
            else
            {
                arg0 = nullptr;
            }
        } while(false)
        ;
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_initOnAdsExpanded : Error processing arguments");
        cobj->initOnAdsExpanded(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_initOnAdsExpanded)

static bool js_jsToCPP_jsToCPP_static_func(se::State& s)
{
    const auto& args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        jsToCPP::static_func();
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_static_func)

static bool js_jsToCPP_jsToCPP_getInstance(se::State& s)
{
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        jsToCPP* result = jsToCPP::getInstance();
        ok &= native_ptr_to_seval<jsToCPP>((jsToCPP*)result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_jsToCPP_jsToCPP_getInstance : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_jsToCPP_jsToCPP_getInstance)



static bool js_jsToCPP_finalize(se::State& s)
{
    CCLOGINFO("jsbindings: finalizing JS object %p (jsToCPP)", s.nativeThisObject());
    auto iter = se::NonRefNativePtrCreatedByCtorMap::find(s.nativeThisObject());
    if (iter != se::NonRefNativePtrCreatedByCtorMap::end())
    {
        se::NonRefNativePtrCreatedByCtorMap::erase(iter);
        jsToCPP* cobj = (jsToCPP*)s.nativeThisObject();
        delete cobj;
    }
    return true;
}
SE_BIND_FINALIZE_FUNC(js_jsToCPP_finalize)

bool js_register_jsToCPP_jsToCPP(se::Object* obj)
{
    auto cls = se::Class::create("jsToCPP", obj, nullptr, nullptr);

    cls->defineFunction("sendEmailAndFilePic", _SE(js_jsToCPP_jsToCPP_sendEmailAndFilePic));
    cls->defineFunction("openUrl", _SE(js_jsToCPP_jsToCPP_openUrl));
    cls->defineFunction("initAsync", _SE(js_jsToCPP_jsToCPP_initAsync));
    cls->defineFunction("showInterstitial", _SE(js_jsToCPP_jsToCPP_showInterstitial));
    cls->defineFunction("preLoadAllAds", _SE(js_jsToCPP_jsToCPP_preLoadAllAds));
    cls->defineFunction("hideBanner", _SE(js_jsToCPP_jsToCPP_hideBanner));
    cls->defineFunction("checkNetworkAvailable", _SE(js_jsToCPP_jsToCPP_checkNetworkAvailable));
    cls->defineFunction("listAssetFiles", _SE(js_jsToCPP_jsToCPP_listAssetFiles));
    cls->defineFunction("showMoreGame", _SE(js_jsToCPP_jsToCPP_showMoreGame));
    cls->defineFunction("setEmailContentAndTitle", _SE(js_jsToCPP_jsToCPP_setEmailContentAndTitle));
    cls->defineFunction("rateUs", _SE(js_jsToCPP_jsToCPP_rateUs));
    cls->defineFunction("showPrivacy", _SE(js_jsToCPP_jsToCPP_showPrivacy));
    cls->defineFunction("showBanner", _SE(js_jsToCPP_jsToCPP_showBanner));
    cls->defineFunction("setMap", _SE(js_jsToCPP_jsToCPP_setMap));
    cls->defineFunction("makeToast", _SE(js_jsToCPP_jsToCPP_makeToast));
    cls->defineFunction("getSDCardPath", _SE(js_jsToCPP_jsToCPP_getSDCardPath));
    cls->defineFunction("adsDestroy", _SE(js_jsToCPP_jsToCPP_adsDestroy));
    cls->defineFunction("initOnAdsRewarded", _SE(js_jsToCPP_jsToCPP_initOnAdsRewarded));
    cls->defineFunction("initAdsLoadAsync", _SE(js_jsToCPP_jsToCPP_initAdsLoadAsync));
    cls->defineFunction("cacheMoreGame", _SE(js_jsToCPP_jsToCPP_cacheMoreGame));
    cls->defineFunction("sendEmail", _SE(js_jsToCPP_jsToCPP_sendEmail));
    cls->defineFunction("preLoadAds", _SE(js_jsToCPP_jsToCPP_preLoadAds));
    cls->defineFunction("popAlertDialog", _SE(js_jsToCPP_jsToCPP_popAlertDialog));
    cls->defineFunction("initOnAdsLoaded", _SE(js_jsToCPP_jsToCPP_initOnAdsLoaded));
    cls->defineFunction("showReward", _SE(js_jsToCPP_jsToCPP_showReward));
    cls->defineFunction("initOnAdsLoadFailed", _SE(js_jsToCPP_jsToCPP_initOnAdsLoadFailed));
    cls->defineFunction("refreshDCIM", _SE(js_jsToCPP_jsToCPP_refreshDCIM));
    cls->defineFunction("getMap", _SE(js_jsToCPP_jsToCPP_getMap));
    cls->defineFunction("getArray", _SE(js_jsToCPP_jsToCPP_getArray));
    cls->defineFunction("showCross", _SE(js_jsToCPP_jsToCPP_showCross));
    cls->defineFunction("initOnAdsClicked", _SE(js_jsToCPP_jsToCPP_initOnAdsClicked));
    cls->defineFunction("isTablet", _SE(js_jsToCPP_jsToCPP_isTablet));
    cls->defineFunction("doRuntimePermission", _SE(js_jsToCPP_jsToCPP_doRuntimePermission));
    cls->defineFunction("setArray", _SE(js_jsToCPP_jsToCPP_setArray));
    cls->defineFunction("initOnAdsCollapsed", _SE(js_jsToCPP_jsToCPP_initOnAdsCollapsed));
    cls->defineFunction("initOnAdsExpanded", _SE(js_jsToCPP_jsToCPP_initOnAdsExpanded));
    cls->defineStaticFunction("static_func", _SE(js_jsToCPP_jsToCPP_static_func));
    cls->defineStaticFunction("getInstance", _SE(js_jsToCPP_jsToCPP_getInstance));
    cls->defineFinalizeFunction(_SE(js_jsToCPP_finalize));
    cls->install();
    JSBClassType::registerClass<jsToCPP>(cls);

    __jsb_jsToCPP_proto = cls->getProto();
    __jsb_jsToCPP_class = cls;

    se::ScriptEngine::getInstance()->clearException();
    return true;
}

bool register_all_jsToCPP(se::Object* obj)
{
    // Get the global ns
    se::Object* ns = se::ScriptEngine::getInstance()->getGlobalObject();

    js_register_jsToCPP_jsToCPP(ns);
    return true;
}

#endif //#if (USE_VIDEO > 0) && (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID || CC_TARGET_PLATFORM == CC_PLATFORM_IOS) && !defined(CC_TARGET_OS_TVOS)
