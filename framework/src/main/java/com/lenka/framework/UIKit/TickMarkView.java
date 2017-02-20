package com.lenka.framework.UIKit;

import android.content.Context;
import android.graphics.Canvas;
import android.util.AttributeSet;
import android.view.View;

/**
 * Created by ganwenjun on 2017/2/21.
 */

public class TickMarkView extends View{

    private int height;

    private int width;


    public TickMarkView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init(context);
    }

    public TickMarkView(Context context, AttributeSet attrs) {
        super(context, attrs, 0);
        init(context);
    }

    public TickMarkView(Context context) {
        super(context, null, 0);
        init(context);
    }

    private void init(Context context) {

    }

    public void setHeight(int height) {
        this.height = height;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);

        setMeasuredDimension(makeMeasure(width, widthMeasureSpec), makeMeasure(height, heightMeasureSpec));
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        if(canvas == null) {
            return;
        }


    }

    private int makeMeasure(int size, int measureSpec) {

        int result = 0;
        int specMode = MeasureSpec.getMode(measureSpec);
        int specSize = MeasureSpec.getSize(measureSpec);

        if(specMode == MeasureSpec.AT_MOST) {
            result = size;
        } else if(specMode == MeasureSpec.EXACTLY) {
            result = specSize;
        } else if(specMode == MeasureSpec.UNSPECIFIED) {
            result = size;
        }

        return result;

    }
}
