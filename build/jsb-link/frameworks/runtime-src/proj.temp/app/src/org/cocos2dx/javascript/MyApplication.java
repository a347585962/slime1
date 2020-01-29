package org.cocos2dx.javascript;

import android.content.Context;

import androidx.multidex.MultiDex;
import androidx.multidex.MultiDexApplication;
//import android.support.multidex.MultiDex;
//import android.support.multidex.MultiDexApplication;

/**
 * Created by hujie2 on 15/11/5.
 */
public class MyApplication  extends MultiDexApplication
{
    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
        MultiDex.install(this);
    }
}

