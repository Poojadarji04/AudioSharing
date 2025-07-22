import React, { useEffect, useRef, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Opacity } from '../../../global/GConstants';
import { images } from '../../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { ApiEndPoints, MethodType, StatusCode } from '../../../api/APIConstant';
import { showSnackbar } from '../../../global/snackbar';
import APIManager from '../../../api/APIManager';
import { resendOtpApi, validateAndVerifyOtp } from './useVerification';
import useUserStore from '../../../global/useUserStore';

const Verification = ({ route }: any) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRefs = useRef([]);
  const navigation = useNavigation();
  const userData = useUserStore(state => state.userData);
  const { id, email } = route.params;
  const [timeLeft, setTimeLeft] = useState(20);
  const [canResend, setCanResend] = useState(false);

  // Focus first input on mount
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  // Timer countdown
  useEffect(() => {
    if (timeLeft === 0) {
      setCanResend(true);
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];

    // Handle backspace/deletion
    if (value === '') {
      newOtp[index] = '';
      setOtp(newOtp);

      if (index > 0) {
        setActiveIndex(index - 1);
        setTimeout(() => {
          inputRefs.current[index - 1]?.focus();
        }, 10);
      }
      return;
    }

    // Only accept numeric input
    if (value.length === 1 && /^\d$/.test(value)) {
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < 3) {
        setActiveIndex(index + 1);
        setTimeout(() => {
          inputRefs.current[index + 1]?.focus();
        }, 10);
      }
    }
  };

  const handleKeyPress = (e, index) => {
    const key = e.nativeEvent.key;

    if (key === 'Backspace') {
      const newOtp = [...otp];

      if (otp[index] !== '') {
        newOtp[index] = '';
        setOtp(newOtp);
      } else if (index > 0) {
        newOtp[index - 1] = '';
        setOtp(newOtp);
        setActiveIndex(index - 1);
        setTimeout(() => {
          inputRefs.current[index - 1]?.focus();
        }, 10);
      }
    }
  };

  const handleInputFocus = index => {
    setActiveIndex(index);
  };

  const handleResendOtp = () => {
    console.log('Resend OTP triggered');
    setTimeLeft(20);
    setCanResend(false);
    resendOtpApi(id, navigation);
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.pop()}
          activeOpacity={Opacity}
        >
          <Image source={images.back} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            console.log('Header right pressed');
          }}
          activeOpacity={0.7}
        >
          <Image source={images.star} />
        </TouchableOpacity>
      ),
      headerTitle: () => <Text style={styles.headerTitle}></Text>,
    });
  }, [navigation]);

  return (
    <View style={styles.vwMain}>
      <Text style={styles.lblTitle}>Please check your email</Text>
      <Text style={styles.lblDesc}>
        We’ve sent a code to <Text style={styles.lblEmail}>{email}</Text>
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={ref => (inputRefs.current[index] = ref)}
            style={[
              styles.otpInput,
              activeIndex === index && styles.activeOtpInput,
              digit && styles.filledOtpInput,
            ]}
            value={digit}
            onChangeText={value => handleOtpChange(value, index)}
            onKeyPress={e => handleKeyPress(e, index)}
            onFocus={() => handleInputFocus(index)}
            keyboardType="numeric"
            maxLength={1}
            selectTextOnFocus={true}
          />
        ))}
      </View>

      <TouchableOpacity
        style={styles.vwVeify}
        onPress={() => validateAndVerifyOtp(otp, id, navigation)}
      >
        <Text style={styles.lblVerify}>Verify</Text>
      </TouchableOpacity>

      {canResend ? (
        <TouchableOpacity onPress={handleResendOtp}>
          <Text style={styles.lblCode}>Resend Code</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.lblCode}>
          Send code again 00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
        </Text>
      )}
    </View>
  );
};

export default Verification;
