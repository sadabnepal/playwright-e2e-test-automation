# Mobilewright Setup Guide


## Prerequisites

|                  | Requirement |
|------------------|-------------|
| 🟢 **Runtime**   | Node.js `>= 18` |
| 📱 **Device**    | iOS simulator, Android emulator, or connected real device |
| 🔧 **Toolchain** | Xcode (for iOS) · Android SDK + ADB (for Android) |

---

## Verify Your Environment

List connected devices:
```bash
npx mobilewright devices
```

Check environment health:
```bash
npx mobilewright doctor
```

---

## Boot a Simulator

**Step 1 : List available simulators**
```bash
xcrun simctl list devices available
```

**Step 2 : Boot a device by name or UDID**
```bash
# Replace with your device name or UDID
xcrun simctl boot "iPhone 17"
```

**Step 3 : Open Simulator app**
```bash
open -a Simulator
```

> 💡 Having trouble? Check the [KnowledgeBase](./knowledgeBase/) for setup fixes.

---

<!-- ### Download and Setup app
Download both android and ios: https://github.com/webdriverio/native-demo-app/releases
1. Scroll to Assets section and download the apps
2. create folder as below
```
apps
    -> android (.apk file goes in this folder)
    -> ios (.zip file for ios goes in this folder)
```
3. Rename files as below
    - android apk file: <b> app.apk </b>
    - ios zip file: <b> app.zip </b> -->

<!-- ####  Refer Folder Structure

![folder-structure.png](./samples/folder-structure.png) -->

<!-- --- -->

###
Android:
```
sdkmanager "system-images;android-34;google_apis;arm64-v8a"
avdmanager create avd -n Pixel_7 -k "system-images;android-34;google_apis;arm64-v8a"
emulator -avd Pixel_7



SET ANDROID HOME PATH:
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/build-tools/34.0.0
```

check devices: adb devices

You should see something like:
```
List of devices attached
emulator-5554   device
```

---

## References

- [📖 **Mobilewright Getting started**](https://mobilewright.dev/docs/getting-started/writing-tests)
- [🐙 **Mobilewright Skills**](https://github.com/mobile-next/mobilewright-skill)


### If you want to setup new app devices

#### find bundleId
android
```
~/Library/Android/sdk/build-tools/34.0.0/aapt dump badging /path/to/app.apk | grep package
```

ios
```
unzip the app.zip file and look for 'Info.plist'
search for "CFBundleIdentifier" value
```
