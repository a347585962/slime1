/*
 * com_common_android_LaunchActivity.cpp
 *
 *  Created on: 2013-8-29
 *      Author: Steven.Xc.Tian
 */

#include "com_common_android_LaunchActivity.h"
#include "JNIHelper.h"


JNIEXPORT void JNICALL Java_com_common_android_LaunchActivity_nativeInit
(JNIEnv * pEnv, jobject jobj)
{
    LOGE("%s",__func__);
	JNIHelper::getInstance()->init(pEnv);
}

JNIEXPORT void JNICALL Java_com_common_android_LaunchActivity_nativeFinalize
(JNIEnv * pEnv, jobject)
{
//	JNIHelper::getInstance()->finalize();
	
}

JNIEXPORT void JNICALL Java_com_common_android_LaunchActivity_NativeSetupFinished
(JNIEnv * pEnv, jobject jobj, jboolean result)
{
	// init iap environment
	
}

JNIEXPORT void JNICALL Java_com_common_android_LaunchActivity_querySuccess
(JNIEnv *pEnv, jobject pIAPJava, jobjectArray skus)
{
    
}

JNIEXPORT void JNICALL Java_com_common_android_LaunchActivity_queryFailed
(JNIEnv * pEnv, jobject, jint errorCode)
{
	
}

JNIEXPORT void JNICALL Java_com_common_android_LaunchActivity_purchaseFailed
(JNIEnv * pEnv, jobject, jint errorCode)
{
	
}

JNIEXPORT void JNICALL Java_com_common_android_LaunchActivity_purchaseSuccess
(JNIEnv * pEnv, jobject, jstring sku)
{
	// Convert the JNI String (jstring) into C-String (char*)
	
}

JNIEXPORT void JNICALL Java_com_common_android_LaunchActivity_consumeSuccess
(JNIEnv * pEnv, jobject, jstring)
{
	/* Unused !*/
}

JNIEXPORT void JNICALL Java_com_common_android_LaunchActivity_consumeFailed
(JNIEnv * pEnv, jobject, jint, jstring)
{
	/* Unused !*/
}

