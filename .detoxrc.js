module.exports = {
  configurations: {
    android: {
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build:
        'cd android && gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..',
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_2',
      },
    },
    ios: {
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build:
        'cd android && gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..',
      type: 'ios.simulator',
      device: {
        avdName: 'Pixel_2',
      },
    },
  },
};
