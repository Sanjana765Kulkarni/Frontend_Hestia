import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import "../firebase"; // adjust path if needed

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.gender) {
  newErrors.gender = "Please select a gender";
  }
    return newErrors;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const fullName = `${formData.firstName} ${formData.lastName}`;
      await updateProfile(userCredential.user, {
        displayName: fullName,
      });
      localStorage.setItem("gender", formData.gender); // Save gender locally
      navigate("/chat");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div
      className="relative flex min-h-screen flex-col bg-black text-white overflow-x-hidden"
      style={{ fontFamily: "Manrope, Noto Sans, sans-serif" }}
    >
      <div className="flex flex-1 items-center justify-center py-12 px-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="h-16 w-16 bg-[#f4c653] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold text-2xl">H</span>
            </div>
            <h1 className="text-3xl font-bold mb-2">Join Hestia</h1>
            <p className="text-gray-400">Create your account and start your wellness journey</p>
          </div>

          <div className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
            <form onSubmit={handleSignup} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-[#483e23] rounded-lg focus:outline-none focus:border-[#f4c653] transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-[#483e23] rounded-lg focus:outline-none focus:border-[#f4c653] transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-[#483e23] rounded-lg focus:outline-none focus:border-[#f4c653] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
  <label htmlFor="gender" className="block text-sm font-medium mb-2">Gender</label>
  <select
    id="gender"
    name="gender"
    required
    value={formData.gender}
    onChange={handleChange}
    className={`w-full px-4 py-3 bg-black border rounded-lg focus:outline-none transition-colors ${
      errors.gender ? "border-red-500" : "border-[#483e23] focus:border-[#f4c653]"
    }`}
  >
    <option value="">Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="none">I prefer not to say</option>
  </select>
  {errors.gender && (
    <p className="text-red-400 text-sm mt-1">{errors.gender}</p>
  )}
</div>


              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black border rounded-lg focus:outline-none transition-colors ${
                    errors.password ? "border-red-500" : "border-[#483e23] focus:border-[#f4c653]"
                  }`}
                  placeholder="At least 8 characters"
                />
                {errors.password && (
                  <p className="text-red-400 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black border rounded-lg focus:outline-none transition-colors ${
                    errors.confirmPassword ? "border-red-500" : "border-[#483e23] focus:border-[#f4c653]"
                  }`}
                  placeholder="Repeat your password"
                />
                {errors.confirmPassword && (
                  <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>

              {error && <p className="text-red-500 text-sm text-center">{error}</p>}

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="w-4 h-4 text-[#f4c653] bg-black border-[#483e23] rounded focus:ring-[#f4c653] focus:ring-2 mt-1"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
                  I agree to the{" "}
                  <button
                    type="button"
                    onClick={() => navigate("/terms")}
                    className="text-[#f4c653] hover:underline"
                  >
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    onClick={() => navigate("/privacy")}
                    className="text-[#f4c653] hover:underline"
                  >
                    Privacy Policy
                  </button>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#f4c653] text-[#221d11] font-bold py-3 px-4 rounded-lg hover:bg-[#e6b347] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Already have an account?{" "}
                <button
                  onClick={() => navigate("/login")}
                  className="text-[#f4c653] hover:underline font-semibold"
                >
                  Sign in here
                </button>
              </p>
            </div>
          </div>

          <div className="mt-8 bg-yellow-900/20 border border-yellow-500 rounded-lg p-4">
            <p className="text-yellow-100 text-sm text-center">
              <strong>Important:</strong> Hestia provides AI-powered support, not professional therapy.
              If you're experiencing a mental health crisis, please contact a licensed professional or call 988.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
