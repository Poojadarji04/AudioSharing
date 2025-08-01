package com.audiosharing

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import android.os.Bundle
import com.zoontek.rnbootsplash.RNBootSplash

class MainActivity : ReactActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        RNBootSplash.init(this, R.style.SplashTheme) // ⬅️ initialize the splash screen with AppTheme
        super.onCreate(savedInstanceState) // super.onCreate(null) with react-native-screens
    }

    /**
     * Returns the name of the main component registered from JavaScript. This is used to schedule
     * rendering of the component.
     */
    override fun getMainComponentName(): String = "AudioSharing"

    /**
     * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
     * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
     */
    override fun createReactActivityDelegate(): ReactActivityDelegate =
        DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}