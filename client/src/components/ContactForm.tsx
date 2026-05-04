import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

/**
 * ContactForm Component
 * Captures visitor inquiries with validation and submission feedback
 * Fields: Name, Email, Subject, Message, Project Type
 */

interface FormData {
  name: string;
  email: string;
  subject: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    projectType: "general",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Web3Forms API ကို သုံးပြီး Email ပို့မယ်
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "6a4a1b73-07d1-4d15-9263-d0fe668d3c75", // ဒီမှာ ခင်ဗျားရဲ့ Key ကို ထည့်ပါ
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          projectType: formData.projectType,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          projectType: "general",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }

      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setSubmitStatus("error");
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-mono font-semibold mb-2">
          Full Name <span className="text-primary">*</span>
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          className={`bg-card/50 border-border/50 focus:border-primary transition-colors ${
            errors.name ? "border-destructive" : ""
          }`}
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="text-destructive text-sm mt-1 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-mono font-semibold mb-2">
          Email Address <span className="text-primary">*</span>
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className={`bg-card/50 border-border/50 focus:border-primary transition-colors ${
            errors.email ? "border-destructive" : ""
          }`}
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="text-destructive text-sm mt-1 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-mono font-semibold mb-2">
          Subject <span className="text-primary">*</span>
        </label>
        <Input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What is this about?"
          className={`bg-card/50 border-border/50 focus:border-primary transition-colors ${
            errors.subject ? "border-destructive" : ""
          }`}
          disabled={isSubmitting}
        />
        {errors.subject && (
          <p className="text-destructive text-sm mt-1 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.subject}
          </p>
        )}
      </div>

      {/* Project Type Field */}
      <div>
        <label htmlFor="projectType" className="block text-sm font-mono font-semibold mb-2">
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-card/50 border border-border/50 text-foreground focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
          disabled={isSubmitting}
        >
          <option value="general">General Inquiry</option>
          <option value="flutter">Flutter App Development</option>
          <option value="python">Python Backend Development</option>
          <option value="design">Graphic Design & Canva</option>
          <option value="fullstack">Full-Stack Development</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-mono font-semibold mb-2">
          Message <span className="text-primary">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project, requirements, or inquiry..."
          rows={5}
          className={`bg-card/50 border-border/50 focus:border-primary transition-colors resize-none ${
            errors.message ? "border-destructive" : ""
          }`}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="text-destructive text-sm mt-1 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.message}
          </p>
        )}
        <p className="text-foreground/50 text-xs mt-2">
          {formData.message.length}/500 characters (minimum 10)
        </p>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting || submitStatus === "success"}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-mono group transition-all"
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
            Sending...
          </>
        ) : submitStatus === "success" ? (
          <>
            <CheckCircle className="w-4 h-4 mr-2" />
            Message Sent!
          </>
        ) : (
          <>
            <Mail className="w-4 h-4 mr-2 group-hover:-translate-y-0.5 transition-transform" />
            Send Message
          </>
        )}
      </Button>

      {/* Form Info */}
      <p className="text-foreground/50 text-xs text-center">
        I typically respond within 24-48 hours. Looking forward to connecting with you!
      </p>
    </form>
  );
}
