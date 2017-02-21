package com.lenka.framework.reactnative.viewmanager;

import android.view.ViewGroup;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.lenka.framework.UIKit.TickMarkView;

/**
 * Created by ganwenjun on 17/2/21.
 */

public class ReactTickMarkViewManager extends SimpleViewManager<TickMarkView>{
    @Override
    public String getName() {
        return "TickMarkView";
    }

    @Override
    protected TickMarkView createViewInstance(ThemedReactContext reactContext) {
        return new TickMarkView(reactContext);
    }

}
