import React, { useRef, useState } from "react";

import { ArrowLeft, Phone, Shield, Smartphone } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { HOME_PAGE_URL } from "data/navigations";

const LoginPage = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState("mobile");
    const [mobileNumber, setMobileNumber] = useState("");
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const otpRefs = useRef([]);
    const mobileInputRef = useRef(null);

    // Handle mobile number input
    const handleMobileSubmit = async (e) => {
        e.preventDefault();
        if (mobileNumber.length < 10) {
            setError("Please enter a valid mobile number");
            return;
        }

        setLoading(true);
        setError("");

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setLoading(false);
        setCurrentStep("otp");
    };

    // Handle OTP input
    const handleOtpChange = (index, value) => {
        if (value.length > 1) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 3) {
            otpRefs.current[index + 1]?.focus();
        }
    };

    // Handle OTP verification
    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        if (otp.some((digit) => !digit)) {
            setError("Please enter complete OTP");
            return;
        }

        setLoading(true);
        setError("");

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setLoading(false);
        // setCurrentStep("home");
        navigate(HOME_PAGE_URL)
    };

    // Handle OTP backspace
    const handleOtpKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            otpRefs.current[index - 1]?.focus();
        }
    };

    // mobile input screen
    const viewMobileInputScreen = () => {
        return (
            <>
                <div className="text-center mb-8">
                    {/* <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                                    <Smartphone className="h-8 w-8 text-white" />
                                </div> */}
                    <h1 className="text-3xl font-semibold text-gray-900 mb-2">Login/SignUp on JRFAdda</h1>
                    <p className="text-gray-600">Please provide your Mobile No. to Login/SignUp on JRFAdda</p>
                </div>
                <form onSubmit={handleMobileSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Phone className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ""))}
                                placeholder="Enter your mobile number"
                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                maxLength={10}
                            />
                        </div>
                    </div>
                    {error && <div className="text-red-600 text-sm text-center bg-red-50 py-2 px-3 rounded-lg">{error}</div>}

                    <button
                        type="submit"
                        disabled={loading || mobileNumber.length < 10}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                        {loading ? (
                            <div className="flex items-center justify-center">
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                Sending OTP...
                            </div>
                        ) : (
                            "Send OTP"
                        )}
                    </button>
                </form>
            </>
        );
    };

    // Mobile Input Screen
    const MobileInputScreen = () => (
        <div className="w-full max-w-md mx-auto">
            <div className="text-center mb-8">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                <p className="text-gray-600">Enter your mobile number to get started</p>
            </div>
            <form onSubmit={handleMobileSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            ref={mobileInputRef}
                            type="tel"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ""))}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="Enter your mobile number"
                            maxLength={10}
                        />
                    </div>
                </div>

                {error && <div className="text-red-600 text-sm text-center bg-red-50 py-2 px-3 rounded-lg">{error}</div>}

                <button
                    type="submit"
                    disabled={loading || mobileNumber.length < 10}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                    {loading ? (
                        <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending OTP...
                        </div>
                    ) : (
                        "Send OTP"
                    )}
                </button>
            </form>
        </div>
    );

    // OTP Verification Screen
    const OTPScreen = () => {
        return (
            <>
                <div className="text-center mb-8">
                    {/* <button onClick={() => setCurrentStep("mobile")} className="absolute top-6 left-6 p-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <ArrowLeft className="h-5 w-5" />
                    </button> */}

                    {/* <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                        <Shield className="h-8 w-8 text-white" />
                    </div> */}
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Verify OTP</h1>
                    <p className="text-gray-600">
                        Enter the 4-digit code sent to
                        <br />
                        <span className="font-semibold">+91 {mobileNumber}</span>
                    </p>
                </div>

                <form onSubmit={handleOtpSubmit} className="space-y-6">
                    <div className="flex justify-center space-x-3">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => (otpRefs.current[index] = el)}
                                type="tel"
                                value={digit}
                                onChange={(e) => handleOtpChange(index, e.target.value)}
                                onKeyDown={(e) => handleOtpKeyDown(index, e)}
                                className="w-14 h-14 text-center text-xl font-bold border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                maxLength={1}
                                pattern="[0-9]"
                            />
                        ))}
                    </div>

                    {error && <div className="text-red-600 text-sm text-center bg-red-50 py-2 px-3 rounded-lg">{error}</div>}

                    <button
                        type="submit"
                        disabled={loading || otp.some((digit) => !digit)}
                        className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-green-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                        {loading ? (
                            <div className="flex items-center justify-center">
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                Verifying...
                            </div>
                        ) : (
                            "Verify OTP"
                        )}
                    </button>
                    <div className="text-center space-y-3">
                        <button
                            type="button"
                            onClick={() => {
                                setCurrentStep("mobile");
                                setOtp(["", "", "", ""]);
                                setError("");
                            }}
                            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                        >
                            Change mobile number
                        </button>

                        <div className="text-sm text-gray-500">
                            Didn't receive the code?{" "}
                            <button
                                type="button"
                                onClick={() => {
                                    // Simulate resend OTP
                                    setError("");
                                    // You can add resend logic here
                                }}
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                Resend OTP
                            </button>
                        </div>
                    </div>

                    {/* <button type="button" onClick={() => setCurrentStep("mobile")} className="w-full text-blue-600 hover:text-blue-800 font-medium transition-colors">
                        Change mobile number
                    </button> */}
                </form>
            </>
        );
    };
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
                <div className="flex items-center justify-center min-h-screen p-4">
                    <div className="w-full max-w-6xl">
                        <div className="relative">
                            <div className="w-full max-w-md mx-auto border p-6 shadow-md">
                                {currentStep === "mobile" && viewMobileInputScreen()}
                                {currentStep === "otp" && OTPScreen()}
                            </div>
                        </div>
                        {/* <div className="relative">
                            {currentStep === "mobile" && <MobileInputScreen />}
                            {currentStep === "otp" && <OTPScreen />}
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
