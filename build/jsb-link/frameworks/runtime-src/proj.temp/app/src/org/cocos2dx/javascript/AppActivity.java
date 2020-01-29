/****************************************************************************
Copyright (c) 2015-2016 Chukong Technologies Inc.
Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
http://www.cocos2d-x.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
****************************************************************************/
package org.cocos2dx.javascript;

import org.cocos2dx.lib.Cocos2dxActivity;
import org.cocos2dx.lib.Cocos2dxGLSurfaceView;

import android.os.Bundle;

import android.content.Intent;
import android.content.res.Configuration;
import android.view.View;
import android.view.WindowManager;
import android.widget.FrameLayout;
import android.widget.ImageView;

import com.common.android.utils.Utils;

import com.common.android.PlatformCode;
import com.common.android.jni.MoreGamesActivityForJNI;
import com.common.android.jni.STSystemFunction;
import com.common.android.permission.PermissionJNI;
import com.common.android.utils.Utils;

import com.common.ads.AdsManager;
import com.common.ads.AdsType;
//import com.common.android.LaunchActivity;
public class AppActivity extends Cocos2dxActivity {
    private static Cocos2dxActivity sCocos2dxActivity;
    private static ImageView sSplashBgImageView = null;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // Workaround in https://stackoverflow.com/questions/16283079/re-launch-of-activity-on-home-button-but-only-the-first-time/16447508
        if (!isTaskRoot()) {
            // Android launched another instance of the root activity into an existing task
            //  so just quietly finish and go away, dropping the user back into the activity
            //  at the top of the stack (ie: the last state of this task)
            // Don't need to finish it again since it's finished in super.onCreate .
            return;
        }
//        MoreGamesActivityForJNI
        // DO OTHER INITIALIZATION BELOW
        SDKWrapper.getInstance().init(this);
        AdsManager.getInstance(this).setUpWithJni(AdsType.BANNER | AdsType.REWARD | AdsType.INTERSTITIAL | AdsType.CROSS);
//
        setupNativeEnvironment();

        // 第一步：在第二阶段加入我们的背景View
        sCocos2dxActivity = this;
//        showSplash();
    }
    /**
     * 这是给 CC JS 调用的隐藏原生开屏背景的方法
     */
    public static void hideSplash() {
        sCocos2dxActivity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (sSplashBgImageView != null) {
                    sSplashBgImageView.setVisibility(View.GONE);
                }
            }
        });
    }
    private static void showSplash() {
        sSplashBgImageView = new ImageView(sCocos2dxActivity);
//        sSplashBgImageView.setBackgroundColor(
//                sCocos2dxActivity.getResources().getColor(R.color.splashBg)
//        );
        sSplashBgImageView.setImageResource(R.mipmap.loading_bg);
        sSplashBgImageView.setScaleType(ImageView.ScaleType.FIT_XY);
        sCocos2dxActivity.addContentView(sSplashBgImageView,
                new WindowManager.LayoutParams(
                        FrameLayout.LayoutParams.MATCH_PARENT,
                        FrameLayout.LayoutParams.MATCH_PARENT
                )
        );
    }
    @Override
    public boolean getDebugMode() {
        return true;
    }
    @Override
    public int getAnalyticsCode() {
        return 0;
    }
    @Override
    public boolean enableEvent() {
        return !getDebugMode();
    }
    @Override
    public Cocos2dxGLSurfaceView onCreateView() {
        Cocos2dxGLSurfaceView glSurfaceView = new Cocos2dxGLSurfaceView(this);
        // TestCpp should create stencil buffer
        glSurfaceView.setEGLConfigChooser(5, 6, 5, 0, 16, 8);
        SDKWrapper.getInstance().setGLSurfaceView(glSurfaceView, this);

        return glSurfaceView;
    }
    //    private native void nativeInit();
    public int getPlatformCode() {
        String platCodeName  = Utils.getMetaData(this,"PlatformCode");
        if("GOOGLEPLAY".equals(platCodeName))
            return com.common.android.PlatformCode.GOOGLEPLAY;
        else
            return  com.common.android.PlatformCode.AMAZON;
    }
    @Override
    protected void onResume() {
        super.onResume();
        SDKWrapper.getInstance().onResume();

    }

    @Override
    protected void onPause() {
        super.onPause();
        SDKWrapper.getInstance().onPause();

    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        SDKWrapper.getInstance().onDestroy();

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        SDKWrapper.getInstance().onActivityResult(requestCode, resultCode, data);
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        SDKWrapper.getInstance().onNewIntent(intent);
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        SDKWrapper.getInstance().onRestart();
    }

    @Override
    protected void onStop() {
        super.onStop();
        SDKWrapper.getInstance().onStop();
    }

    @Override
    public void onBackPressed() {
        SDKWrapper.getInstance().onBackPressed();
        super.onBackPressed();
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        SDKWrapper.getInstance().onConfigurationChanged(newConfig);
        super.onConfigurationChanged(newConfig);
    }

    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        SDKWrapper.getInstance().onRestoreInstanceState(savedInstanceState);
        super.onRestoreInstanceState(savedInstanceState);
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        SDKWrapper.getInstance().onSaveInstanceState(outState);
        super.onSaveInstanceState(outState);
    }

    @Override
    protected void onStart() {
        SDKWrapper.getInstance().onStart();
        super.onStart();
    }
}
