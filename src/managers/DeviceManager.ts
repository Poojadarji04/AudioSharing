// utils/DeviceManager.ts
import DeviceInfo from 'react-native-device-info';

class DeviceManager {
  // 🔋 Check if Battery Saver Mode is ON
  static async isBatterySaverOn(): Promise<boolean> {
    try {
      const state = await DeviceInfo.getPowerState();
      return state.lowPowerMode || false;
    } catch (error) {
      console.error('Error checking battery saver status:', error);
      return false;
    }
  }

  static async getBatteryPercenatge(): Promise<number> {
    try {
      const state = await DeviceInfo.getPowerState();
      console.log('🚀 ~ DeviceManager ~ getBatteryPercenatge ~ state:', state);
      return state.batteryLevel || 0;
    } catch (error) {
      console.error('Error checking battery saver status:', error);
      return 0;
    }
  }

  // 📱 Get App Name
  static getAppName(): string {
    return DeviceInfo.getApplicationName();
  }

  // 🆔 Get App Version
  static getAppVersion(): string {
    return DeviceInfo.getVersion();
  }

  // 🔢 Get Build Number
  static getBuildNumber(): string {
    return DeviceInfo.getBuildNumber();
  }

  // 🧠 Get Device ID (e.g., model name)
  static getDeviceId(): string {
    return DeviceInfo.getDeviceId();
  }

  // 📶 Get Carrier (if available)
  static async getCarrier(): Promise<string | null> {
    try {
      return await DeviceInfo.getCarrier();
    } catch (error) {
      console.error('Error getting carrier info:', error);
      return null;
    }
  }

  static async isSimulator(): Promise<boolean> {
    return await DeviceInfo.isEmulator();
  }
}

export default DeviceManager;
