package com.lenka.framework.UIKit;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.os.Handler;
import android.os.Message;
import android.support.v4.content.ContextCompat;
import android.util.AttributeSet;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;

import com.lenka.framework.R;

import java.text.DecimalFormat;

/**
 * Created by ganwenjun on 2017/2/21.
 */

public class TickMarkView extends View{

    private final int defaultWidth = 600;

    private final int defaultHeight = 100;

    private final int defaultSpace = 20;

    private final int standardLineHeight = 70;

    private final int standardLineStrokeWidth = 5;

    private final int logTickLineHeight = 60;

    private final int middleTickLineHeight = 45;

    private final int shortTickLineHeight = 30;

    private final int tickLineStrokeWidth = 3;

    private int height;

    private int width;

    private float offsetStep = 0.01f;

    private float step = 0.1f;

    private float currentData = 60f;

    private float middleStep = 0.5f;

    private float logStep = 1;

    private float startX;

    private String tickColor = "#";

    private Handler handler = new Handler() {
        @Override
        public void handleMessage(Message msg) {
            super.handleMessage(msg);

            invalidate();
        }
    };


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
        /*new Thread(new Runnable() {
            @Override
            public void run() {
                while(true) {
                    try {
                        Thread.sleep(1);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    currentData += offsetStep;
                    handler.sendEmptyMessage(1);
                }
            }
        }).start();*/

    }

    public void setStep(float step) {
        this.step = step;
    }

    public void setMiddleStep(float middleStep) {
        this.middleStep = middleStep;
    }

    public void setLogStep(float logStep) {
        this.logStep = logStep;
    }

    public void setCurrentData(float currentData) {
        this.currentData = currentData;
    }

    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);

        int width = defaultWidth;
        int height = defaultHeight;

        setMeasuredDimension(makeMeasure(width, widthMeasureSpec), makeMeasure(height, heightMeasureSpec));
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        if(canvas == null) {
            return;
        }

        int width = getWidth();
        int height = getHeight();
        int centerX = width / 2;
        int alpha = 255;

        Paint standardLinePaint = new Paint();
        standardLinePaint.setColor(ContextCompat.getColor(getContext(), R.color.tick_mark_standard_line_color));
        standardLinePaint.setStrokeWidth(standardLineStrokeWidth);
        canvas.drawLine((centerX - standardLineStrokeWidth / 2), 0, (centerX - standardLineStrokeWidth / 2), standardLineHeight, standardLinePaint);

        Paint tickLinePaint = new Paint();
        tickLinePaint.setStrokeWidth(3);
        tickLinePaint.setColor(Color.GRAY);

        Paint tickTextPaint = new Paint();
        tickTextPaint.setColor(Color.GRAY);
        tickTextPaint.setTextSize(30);
        int tickTextWidth = getTextWidth(tickTextPaint, "70");

        currentData = formatFloat(currentData);
        float centerOffset = formatFloat(currentData % step);


        float leftPosition = 0;
        float rightPosition = 0;
        float leftData = 0;
        float rightData = 0;
        if(centerOffset == step || centerOffset == 0) {
            centerOffset = 0;
            leftPosition = centerX - defaultSpace;
            rightPosition = centerX + defaultSpace;
            leftData = formatFloat(currentData - step);
            rightData = formatFloat(currentData + step);
        } else {
            leftPosition = (centerX - (centerOffset / step * defaultSpace));
            rightPosition = (centerX + ((step - centerOffset) / step * defaultSpace));
            leftData = formatFloat(currentData - centerOffset);
            rightData = formatFloat(currentData + (step - centerOffset));
        }

        Log.i("info", "current-->" + currentData + "    leftData--->" + leftData + "     rightData-->" + rightData + "    centerOffset-->" + centerOffset);

        while(leftPosition > 0) {

            if(leftPosition < width / 4) {
                if(alpha > 30) {
                    alpha -= 30;
                }
                tickLinePaint.setAlpha(alpha);
            } else {
                tickLinePaint.setAlpha(255);
            }

            if(leftData % logStep == 0) {
                canvas.drawLine((leftPosition - tickLineStrokeWidth / 2), 0, (leftPosition - tickLineStrokeWidth / 2), logTickLineHeight, tickLinePaint);
                canvas.drawText((int)leftData + "", leftPosition - tickTextWidth / 2, logTickLineHeight + 5, tickTextPaint);
            } else {
                if(leftData % middleStep == 0) {
                    canvas.drawLine((leftPosition - tickLineStrokeWidth / 2), 0, (leftPosition - tickLineStrokeWidth / 2), middleTickLineHeight, tickLinePaint);
                } else {
                    canvas.drawLine((leftPosition - tickLineStrokeWidth / 2), 0, (leftPosition - tickLineStrokeWidth / 2), shortTickLineHeight, tickLinePaint);
                }
            }

            if(rightData % logStep == 0) {
                canvas.drawLine((rightPosition - tickLineStrokeWidth / 2), 0, (rightPosition - tickLineStrokeWidth / 2), logTickLineHeight, tickLinePaint);
                canvas.drawText((int)rightData + "", rightPosition - tickTextWidth / 2, logTickLineHeight + 5, tickTextPaint);
            } else {
                if(rightData % middleStep == 0) {
                    canvas.drawLine((rightPosition - tickLineStrokeWidth / 2), 0, (rightPosition - tickLineStrokeWidth / 2), middleTickLineHeight, tickLinePaint);
                } else {
                    canvas.drawLine((rightPosition - tickLineStrokeWidth / 2), 0, (rightPosition - tickLineStrokeWidth / 2), shortTickLineHeight, tickLinePaint);
                }
            }

            leftPosition = leftPosition - defaultSpace;
            rightPosition = rightPosition + defaultSpace;
            leftData = formatFloat(leftData - step);
            rightData = formatFloat(rightData + step);

        }

    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {

        int width = getWidth();
        int height = getHeight();
        int leftPadding = getPaddingLeft();
        int rightPadding = getPaddingRight();
        int topPadding = getPaddingTop();
        int bottomPadding = getPaddingBottom();

        int showWidth = width = leftPadding = rightPadding;

        float endX = 0;
        float currentX = 0;

        if(event.getAction() == MotionEvent.ACTION_MOVE) {
            currentX = event.getX();
            float offset = currentX - startX;
            float offsetAbs = Math.abs(offset);
            int count = (int) (offsetAbs / (defaultSpace / 10));
            if(offset > 0) {
                if(offsetAbs >= defaultSpace / 10) {
                    currentData -= (count * offsetStep);
                    startX = currentX;
                }
            } else {
                if(offsetAbs >= defaultSpace / 10) {
                    currentData += (count * offsetStep);
                    startX = currentX;
                }
            }

            invalidate();

        } else if(event.getAction() == MotionEvent.ACTION_DOWN) {
            startX = event.getX();
        } else if(event.getAction() == MotionEvent.ACTION_UP) {
            endX = event.getX();
            float offset = endX - startX;
            float offsetAbs = Math.abs(offset);
            int count = (int) (offsetAbs / (defaultSpace));
            if(offset > 0) {
                if(offsetAbs >= defaultSpace) {
                    currentData -= (count * step);
                }
            } else {
                if(offsetAbs >= defaultSpace) {
                    currentData += (count * step);
                }
            }
            currentData = (float)Math.round(currentData * 10)/10;
            Log.i("info",  "currentData-->" + currentData);

            invalidate();
        } else {
            return false;
        }

        return true;
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

    public static float formatFloat(float d) {
        return (float)Math.round(d*100)/100;
    }

    public static int getTextWidth(Paint paint, String str) {
        int iRet = 0;
        if (str != null && str.length() > 0) {
            int len = str.length();
            float[] widths = new float[len];
            paint.getTextWidths(str, widths);
            for (int j = 0; j < len; j++) {
                iRet += (int) Math.ceil(widths[j]);
            }
        }
        return iRet;
    }
}
