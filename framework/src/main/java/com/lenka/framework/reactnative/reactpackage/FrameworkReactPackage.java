package com.lenka.framework.reactnative.reactpackage;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.lenka.framework.reactnative.viewmanager.ReactTickMarkViewManager;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * Created by ganwenjun on 17/2/21.
 */

public class FrameworkReactPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Arrays.<ViewManager>asList(new ReactTickMarkViewManager());
    }
}
