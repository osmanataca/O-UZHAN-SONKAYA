package com.example

import android.annotation.SuppressLint
import android.graphics.Bitmap
import android.os.Bundle
import android.view.ViewGroup
import android.webkit.WebChromeClient
import android.webkit.WebResourceError
import android.webkit.WebResourceRequest
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.activity.compose.BackHandler
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.statusBarsPadding
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.viewinterop.AndroidView
import com.example.ui.theme.MyApplicationTheme

class MainActivity : ComponentActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    enableEdgeToEdge()
    setContent {
      MyApplicationTheme {
        KpssAppScreen()
      }
    }
  }
}

@SuppressLint("SetJavaScriptEnabled")
@Composable
fun KpssAppScreen() {
  var webViewInstance by remember { mutableStateOf<WebView?>(null) }
  var canGoBackInWebView by remember { mutableStateOf(false) }

  // Handle Android hardware/gesture back press
  BackHandler(enabled = true) {
    webViewInstance?.let { wv ->
      // Check if webview has an active dialog or history
      wv.evaluateJavascript(
        "(function() { " +
        "  if (typeof currentQuiz !== 'undefined' && currentQuiz && currentQuiz.isRunning) { " +
        "    if (confirm('Sınavı durdurup ana ekrana dönmek istiyor musunuz?')) { " +
        "      persistActiveQuiz(); " +
        "      if (typeof quizTimerInterval !== 'undefined') clearInterval(quizTimerInterval); " +
        "      showScreen('screen-home'); " +
        "    } " +
        "    return true; " +
        "  } else { " +
        "    var activeScreen = document.querySelector('.screen.active'); " +
        "    if (activeScreen && activeScreen.id !== 'screen-home') { " +
        "      showScreen('screen-home'); " +
        "      return true; " +
        "    } " +
        "  } " +
        "  return false; " +
        "})();"
      ) { result ->
        if (result == "false" && wv.canGoBack()) {
          wv.goBack()
        }
      }
    }
  }

  Box(
    modifier = Modifier
      .fillMaxSize()
      .statusBarsPadding()
      .background(MaterialTheme.colorScheme.background)
      .testTag("kpss_main_screen")
  ) {
    AndroidView(
      modifier = Modifier
        .fillMaxSize()
        .testTag("kpss_webview"),
      factory = { context ->
        WebView(context).apply {
          layoutParams = ViewGroup.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT,
            ViewGroup.LayoutParams.MATCH_PARENT
          )

          settings.apply {
            javaScriptEnabled = true
            domStorageEnabled = true
            databaseEnabled = true
            allowFileAccess = true
            allowContentAccess = true
            cacheMode = WebSettings.LOAD_DEFAULT
            useWideViewPort = true
            loadWithOverviewMode = true
            builtInZoomControls = false
            displayZoomControls = false
            mediaPlaybackRequiresUserGesture = false
            mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
          }

          webChromeClient = object : WebChromeClient() {}

          webViewClient = object : WebViewClient() {
            override fun onPageStarted(view: WebView?, url: String?, favicon: Bitmap?) {
              super.onPageStarted(view, url, favicon)
              canGoBackInWebView = view?.canGoBack() == true
            }

            override fun onPageFinished(view: WebView?, url: String?) {
              super.onPageFinished(view, url)
              canGoBackInWebView = view?.canGoBack() == true
            }

            override fun onReceivedError(
              view: WebView?,
              request: WebResourceRequest?,
              error: WebResourceError?
            ) {
              super.onReceivedError(view, request, error)
            }
          }

          loadUrl("file:///android_asset/index.html")
          webViewInstance = this
        }
      },
      update = { wv ->
        webViewInstance = wv
      }
    )
  }

  DisposableEffect(Unit) {
    onDispose {
      webViewInstance?.destroy()
    }
  }
}
