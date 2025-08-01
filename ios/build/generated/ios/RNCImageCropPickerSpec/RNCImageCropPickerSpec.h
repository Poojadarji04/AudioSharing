/**
 * This code was generated by [react-native-codegen](https://www.npmjs.com/package/react-native-codegen).
 *
 * Do not edit this file as changes may cause incorrect behavior and will be lost
 * once the code is regenerated.
 *
 * @generated by codegen project: GenerateModuleObjCpp
 *
 * We create an umbrella header (and corresponding implementation) here since
 * Cxx compilation in BUCK has a limitation: source-code producing genrule()s
 * must have a single output. More files => more genrule()s => slower builds.
 */

#ifndef __cplusplus
#error This file must be compiled as Obj-C++. If you are importing it, you must change your file extension to .mm.
#endif

// Avoid multiple includes of RNCImageCropPickerSpec symbols
#ifndef RNCImageCropPickerSpec_H
#define RNCImageCropPickerSpec_H

#import <Foundation/Foundation.h>
#import <RCTRequired/RCTRequired.h>
#import <RCTTypeSafety/RCTConvertHelpers.h>
#import <RCTTypeSafety/RCTTypedModuleConstants.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTCxxConvert.h>
#import <React/RCTManagedPointer.h>
#import <ReactCommon/RCTTurboModule.h>
#import <optional>
#import <vector>


NS_ASSUME_NONNULL_BEGIN
namespace JS {
  namespace NativeImageCropPicker {
    struct PickerOptions {
      NSString *mediaType() const;
      std::optional<bool> multiple() const;
      std::optional<bool> includeBase64() const;
      std::optional<bool> includeExif() const;
      std::optional<bool> cropping() const;
      std::optional<double> width() const;
      std::optional<double> height() const;
      NSString *cropperActiveWidgetColor() const;
      NSString *cropperStatusBarColor() const;
      NSString *cropperToolbarColor() const;
      NSString *cropperToolbarTitle() const;
      NSString *cropperToolbarWidgetColor() const;
      std::optional<bool> cropperCircleOverlay() const;
      std::optional<bool> freeStyleCropEnabled() const;
      std::optional<bool> showCropGuidelines() const;
      std::optional<bool> showCropFrame() const;
      std::optional<bool> hideBottomControls() const;
      std::optional<bool> enableRotationGesture() const;
      std::optional<bool> disableCropperColorSetters() const;
      std::optional<bool> useFrontCamera() const;

      PickerOptions(NSDictionary *const v) : _v(v) {}
    private:
      NSDictionary *_v;
    };
  }
}

@interface RCTCxxConvert (NativeImageCropPicker_PickerOptions)
+ (RCTManagedPointer *)JS_NativeImageCropPicker_PickerOptions:(id)json;
@end
@protocol NativeImageCropPickerSpec <RCTBridgeModule, RCTTurboModule>

- (void)openPicker:(JS::NativeImageCropPicker::PickerOptions &)options
           resolve:(RCTPromiseResolveBlock)resolve
            reject:(RCTPromiseRejectBlock)reject;
- (void)openCamera:(JS::NativeImageCropPicker::PickerOptions &)options
           resolve:(RCTPromiseResolveBlock)resolve
            reject:(RCTPromiseRejectBlock)reject;
- (void)openCropper:(JS::NativeImageCropPicker::PickerOptions &)options
            resolve:(RCTPromiseResolveBlock)resolve
             reject:(RCTPromiseRejectBlock)reject;
- (void)clean:(RCTPromiseResolveBlock)resolve
       reject:(RCTPromiseRejectBlock)reject;
- (void)cleanSingle:(NSString *)path
            resolve:(RCTPromiseResolveBlock)resolve
             reject:(RCTPromiseRejectBlock)reject;

@end

@interface NativeImageCropPickerSpecBase : NSObject {
@protected
facebook::react::EventEmitterCallback _eventEmitterCallback;
}
- (void)setEventEmitterCallback:(EventEmitterCallbackWrapper *)eventEmitterCallbackWrapper;


@end

namespace facebook::react {
  /**
   * ObjC++ class for module 'NativeImageCropPicker'
   */
  class JSI_EXPORT NativeImageCropPickerSpecJSI : public ObjCTurboModule {
  public:
    NativeImageCropPickerSpecJSI(const ObjCTurboModule::InitParams &params);
  };
} // namespace facebook::react
inline NSString *JS::NativeImageCropPicker::PickerOptions::mediaType() const
{
  id const p = _v[@"mediaType"];
  return RCTBridgingToOptionalString(p);
}
inline std::optional<bool> JS::NativeImageCropPicker::PickerOptions::multiple() const
{
  id const p = _v[@"multiple"];
  return RCTBridgingToOptionalBool(p);
}
inline std::optional<bool> JS::NativeImageCropPicker::PickerOptions::includeBase64() const
{
  id const p = _v[@"includeBase64"];
  return RCTBridgingToOptionalBool(p);
}
inline std::optional<bool> JS::NativeImageCropPicker::PickerOptions::includeExif() const
{
  id const p = _v[@"includeExif"];
  return RCTBridgingToOptionalBool(p);
}
inline std::optional<bool> JS::NativeImageCropPicker::PickerOptions::cropping() const
{
  id const p = _v[@"cropping"];
  return RCTBridgingToOptionalBool(p);
}
inline std::optional<double> JS::NativeImageCropPicker::PickerOptions::width() const
{
  id const p = _v[@"width"];
  return RCTBridgingToOptionalDouble(p);
}
inline std::optional<double> JS::NativeImageCropPicker::PickerOptions::height() const
{
  id const p = _v[@"height"];
  return RCTBridgingToOptionalDouble(p);
}
inline NSString *JS::NativeImageCropPicker::PickerOptions::cropperActiveWidgetColor() const
{
  id const p = _v[@"cropperActiveWidgetColor"];
  return RCTBridgingToOptionalString(p);
}
inline NSString *JS::NativeImageCropPicker::PickerOptions::cropperStatusBarColor() const
{
  id const p = _v[@"cropperStatusBarColor"];
  return RCTBridgingToOptionalString(p);
}
inline NSString *JS::NativeImageCropPicker::PickerOptions::cropperToolbarColor() const
{
  id const p = _v[@"cropperToolbarColor"];
  return RCTBridgingToOptionalString(p);
}
inline NSString *JS::NativeImageCropPicker::PickerOptions::cropperToolbarTitle() const
{
  id const p = _v[@"cropperToolbarTitle"];
  return RCTBridgingToOptionalString(p);
}
inline NSString *JS::NativeImageCropPicker::PickerOptions::cropperToolbarWidgetColor() const
{
  id const p = _v[@"cropperToolbarWidgetColor"];
  return RCTBridgingToOptionalString(p);
}
inline std::optional<bool> JS::NativeImageCropPicker::PickerOptions::cropperCircleOverlay() const
{
  id const p = _v[@"cropperCircleOverlay"];
  return RCTBridgingToOptionalBool(p);
}
inline std::optional<bool> JS::NativeImageCropPicker::PickerOptions::freeStyleCropEnabled() const
{
  id const p = _v[@"freeStyleCropEnabled"];
  return RCTBridgingToOptionalBool(p);
}
inline std::optional<bool> JS::NativeImageCropPicker::PickerOptions::showCropGuidelines() const
{
  id const p = _v[@"showCropGuidelines"];
  return RCTBridgingToOptionalBool(p);
}
inline std::optional<bool> JS::NativeImageCropPicker::PickerOptions::showCropFrame() const
{
  id const p = _v[@"showCropFrame"];
  return RCTBridgingToOptionalBool(p);
}
inline std::optional<bool> JS::NativeImageCropPicker::PickerOptions::hideBottomControls() const
{
  id const p = _v[@"hideBottomControls"];
  return RCTBridgingToOptionalBool(p);
}
inline std::optional<bool> JS::NativeImageCropPicker::PickerOptions::enableRotationGesture() const
{
  id const p = _v[@"enableRotationGesture"];
  return RCTBridgingToOptionalBool(p);
}
inline std::optional<bool> JS::NativeImageCropPicker::PickerOptions::disableCropperColorSetters() const
{
  id const p = _v[@"disableCropperColorSetters"];
  return RCTBridgingToOptionalBool(p);
}
inline std::optional<bool> JS::NativeImageCropPicker::PickerOptions::useFrontCamera() const
{
  id const p = _v[@"useFrontCamera"];
  return RCTBridgingToOptionalBool(p);
}
NS_ASSUME_NONNULL_END
#endif // RNCImageCropPickerSpec_H
