"use client";
import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Name is required",
      });
      return false;
    }

    if (!formData.phone.trim() && !formData.email.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Please enter at least a phone number or email address",
      });
      return false;
    }

    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Invalid email address",
      });
      return false;
    }

    if (!formData.message.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Message is required",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const dataToSend = {
        name: formData.name.trim(),
        phone: formData.phone.trim() || " ",
        email: formData.email.trim() || " ",
        message: formData.message.trim(),
      };

      // استخدام FormData بدلاً من JSON لتجنب CORS issues
      const formDataToSend = new FormData();
      formDataToSend.append("name", dataToSend.name);
      formDataToSend.append("phone", dataToSend.phone);
      formDataToSend.append("email", dataToSend.email);
      formDataToSend.append("message", dataToSend.message);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxkjxTt0INkBsnXlA9Rm7ivS9P3BWOU4Vrs5ys_xi-1AmY-SstqVtI9eZwBdJSe-JalGA/exec",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        const result = await response.json();
        if (result.result === "success") {
          setSubmitStatus({
            type: "success",
            message: "Message sent successfully!",
          });
          setTimeout(() => {
            setSubmitStatus({ type: null, message: "" });
          }, 3000);
          setFormData({
            name: "",
            phone: "",
            email: "",
            message: "",
          });
        } else {
          throw new Error(result.message || "Failed to send");
        }
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "An error occurred while sending. Please try again.",
      });
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaUser className="h-4 w-4 text-[var(--text-muted)]" />
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name *"
            className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-white/20 text-[var(--text-secondary)] placeholder-[var(--text-muted)] transition-all duration-300"
            style={{
              backgroundColor: "var(--nav-bg)",
              boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.1) inset",
            }}
          />
        </div>

        {/* Phone and Email Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaPhone className="h-4 w-4 text-[var(--text-muted)]" />
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-white/20 text-[var(--text-secondary)] placeholder-[var(--text-muted)] transition-all duration-300"
              style={{
                backgroundColor: "var(--nav-bg)",
                boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.1) inset",
              }}
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaEnvelope className="h-4 w-4 text-[var(--text-muted)]" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-white/20 text-[var(--text-secondary)] placeholder-[var(--text-muted)] transition-all duration-300"
              style={{
                backgroundColor: "var(--nav-bg)",
                boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.1) inset",
              }}
            />
          </div>
        </div>

        <p className="text-xs text-[var(--text-muted)] text-center">
          Please enter at least a phone number or email address *
        </p>

        {/* Message Field */}
        <div className="relative">
          <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
            <FaMessage className="h-4 w-4 text-[var(--text-muted)] mt-1" />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message *"
            rows={5}
            className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-white/20 text-[var(--text-secondary)] placeholder-[var(--text-muted)] resize-vertical transition-all duration-300"
            style={{
              backgroundColor: "var(--nav-bg)",
              boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.1) inset",
            }}
          />
        </div>

        {/* Submit Status */}
        {submitStatus.type && (
          <div
            className={`p-3 rounded-lg text-center text-sm border ${
              submitStatus.type === "success"
                ? "bg-green-500/10 border-green-500/20 text-green-400"
                : "bg-red-500/10 border-red-500/20 text-red-400"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 border border-white/10 ${
            isSubmitting
              ? "opacity-60 cursor-not-allowed"
              : "hover:border-white/20 hover:scale-[1.02] cursor-pointer"
          } text-[var(--text-secondary)] shadow-lg`}
          style={{
            backgroundColor: "var(--text-secondary)",
            color: "var(--bg-primary)",
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting) {
              e.currentTarget.style.backgroundColor = "var(--text-hover)";
            }
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting) {
              e.currentTarget.style.backgroundColor = "var(--text-secondary)";
            }
          }}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-1">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[var(--bg-primary)] ml-2"></div>
              Sending ...
            </div>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
