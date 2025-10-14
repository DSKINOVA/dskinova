import React, { useEffect, useMemo, useState } from "react";

// -----------------------------------------------------------
// 1. Success Modal Component/Block (Purely for display)
// -----------------------------------------------------------
function SuccessModalView({ form, onClose, onNewAppointment }) {
    return (
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-8 text-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#4ade80"
                className="w-16 h-16 mx-auto mb-4"
            >
                <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.882l-3.236 4.536-1.844-1.844a.75.75 0 0 0-1.06 1.06l2.394 2.393a.75.75 0 0 0 1.06-.01L15.61 10.186Z"
                    clipRule="evenodd"
                />
            </svg>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Appointment Booked!
            </h3>
            <p className="text-gray-600 mb-6">
                Thank you, <span className="font-medium text-[#c98963]">{form.name}</span>. Your request has been sent successfully.
                <br />
                We will contact you shortly to confirm your appointment for:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg text-left inline-block">
                <p className="text-gray-700"><strong>Date:</strong> {form.date}</p>
                <p className="text-gray-700"><strong>Time:</strong> {form.time}</p>
                <p className="text-gray-700"><strong>Concern:</strong> {form.concern}</p>
            </div>
            
            <div className="mt-8 flex flex-col gap-3">
                <button
                    type="button"
                    onClick={onClose}
                    className="bg-[#c98963] hover:bg-[#be7f58] text-white px-6 py-3 rounded-md font-medium transition-colors w-full"
                >
                    Close
                </button>
                <button
                    type="button"
                    onClick={onNewAppointment}
                    className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 px-6 py-3 rounded-md w-full"
                >
                    Book Another Appointment
                </button>
            </div>
        </div>
    );
}
// -----------------------------------------------------------


export default function AppointmentModal({ open, onClose, onSubmit }) {
    const FORM_ACTION = "https://formsubmit.co/kunalking01grd@gmail.com";

    const { today, maxDateString } = useMemo(() => {
        const d = new Date();
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, "0");
        const dd = String(d.getDate()).padStart(2, "0");
        const todayStr = `${yyyy}-${mm}-${dd}`;

        const max = new Date();
        max.setFullYear(max.getFullYear() + 2);
        const maxYYYY = max.getFullYear();
        const maxMM = String(max.getMonth() + 1).padStart(2, "0");
        const maxDD = String(max.getDate()).padStart(2, "0");
        const maxStr = `${maxYYYY}-${maxMM}-${maxDD}`;

        return { today: todayStr, maxDateString: maxStr };
    }, []);

    const initialFormState = {
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        concern: "",
    };

    const [form, setForm] = useState(initialFormState);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    
    // NEW STATE: To control the success view
    const [isSuccess, setIsSuccess] = useState(false); 

    useEffect(() => {
        function onEsc(e) {
            if (e.key === "Escape") onClose?.();
        }
        if (open) document.addEventListener("keydown", onEsc);
        return () => document.removeEventListener("keydown", onEsc);
    }, [open, onClose]);

    // Reset state when modal closes
    useEffect(() => {
        if (!open) {
            setTimeout(() => {
                setSubmitted(false);
                setErrors({});
                setIsSuccess(false); // Reset success state
                setForm(initialFormState); // Reset form data
            }, 200);
        }
    }, [open]);

    // Function to handle "Book Another Appointment" button
    const handleNewAppointment = () => {
        setIsSuccess(false); // Show the form again
        setForm(initialFormState); // Clear form data
    };

    function updateField(key, value) {
        // 1. LIMIT PHONE NUMBER TO 10 DIGITS ONLY (Filtering input)
        if (key === "phone") {
            value = value.replace(/\D/g, "").slice(0, 10);
        }

        // 2. NAME FIELD ONLY ALPHABETS (Filtering input)
        if (key === "name") {
            // Allows letters, spaces, and hyphens
            value = value.replace(/[^a-zA-Z\s-]/g, ""); 
        }

        setForm((f) => ({ ...f, [key]: value }));
    }

    // UPDATED: Centralized Date Validation
    function handleDateChange(e) {
        const value = e.target.value;
        
        // Check against the calculated max future date string
        if (value && value > maxDateString) {
            setErrors(e => ({ ...e, date: "Date cannot be more than 2 years ahead" }));
            updateField("date", ""); // Clear the invalid input
        } else if (value && value < today) {
            setErrors(e => ({ ...e, date: "Date cannot be in the past" }));
            updateField("date", "");
        } 
        else {
            setErrors(e => ({ ...e, date: undefined }));
            updateField("date", value);
        }
    }


    function validate() {
        const e = {};
        
        // Name Validation
        if (!form.name.trim()) {
            e.name = "Please enter your name";
        } else if (!/^[a-zA-Z\s-]+$/.test(form.name.trim())) {
            e.name = "Name can only contain letters and spaces";
        }

        // Contact Validation
        if (!form.phone.trim() && !form.email.trim()) {
            e.contact = "Provide a phone number or an email";
        } else if (form.phone.trim() && !/^\d{10}$/.test(form.phone.trim())) {
            e.phone = "Phone number must be exactly 10 digits";
        }
        
        // Date Validation
        if (!form.date) {
            e.date = "Select a date";
        } else {
            const selectedDate = new Date(form.date);
            const todayDate = new Date(today);
            const maxDate = new Date(maxDateString);

            todayDate.setHours(0, 0, 0, 0); 
            selectedDate.setHours(0, 0, 0, 0);

            if (isNaN(selectedDate.getTime())) {
                e.date = "Select a valid date";
            } else if (selectedDate < todayDate) {
                e.date = "Date cannot be in the past";
            } else if (selectedDate > maxDate) {
                e.date = "Date cannot be more than 2 years ahead";
            }
        }

        // Time Validation
        if (!form.time) e.time = "Select a time";
        
        // Concern Validation
        if (!form.concern) e.concern = "Choose a concern";

        setErrors(e);
        return Object.keys(e).length === 0;
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!validate()) return;

        const fd = new FormData();
        fd.append("Name", form.name);
        if (form.phone) fd.append("Phone", form.phone);
        if (form.email) fd.append("Email", form.email);
        fd.append("Date", form.date);
        fd.append("Time", form.time);
        fd.append("Concern", form.concern);

        fd.append("_captcha", "false");
        fd.append("_template", "table");
        fd.append("_subject", "New Appointment Request");

        setSubmitted(true);

        fetch(FORM_ACTION, {
            method: "POST",
            body: fd,
            headers: { Accept: "application/json" },
        })
            .then(async (res) => {
                if (!res.ok) throw new Error("Failed to submit form");
                onSubmit?.({ ...form });
                
                // KEY CHANGE 1: Set success state instead of resetting form immediately
                setIsSuccess(true);
                setSubmitted(false); // Submission is complete

                // Note: The form and close logic is moved/removed.
                // The form fields (stored in `form` state) are needed for the success message.
            })
            .catch(() => {
                setSubmitted(false);
            });
    }

    if (!open) return null;

    // Render the Success Modal if isSuccess is true
    if (isSuccess) {
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
                    onClick={onClose}
                />
                {/* Success Modal */}
                <div className="relative z-[101] w-full max-w-lg sm:max-w-xl">
                    <SuccessModalView 
                        form={form} 
                        onClose={onClose} 
                        onNewAppointment={handleNewAppointment}
                    />
                </div>
            </div>
        );
    }

    // Otherwise, render the main Appointment Form Modal
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="relative z-[101] w-full max-w-lg sm:max-w-xl">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="flex items-center justify-between px-5 sm:px-6 py-4 bg-[#e0a075] text-white">
                        <h3 className="text-lg sm:text-xl font-semibold">
                            Book an Appointment
                        </h3>
                        <button
                            type="button"
                            aria-label="Close appointment form"
                            onClick={onClose}
                            className="p-2 hover:text-white/90"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 1 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 0 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 0 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>

                    <form
                        action={FORM_ACTION}
                        method="POST"
                        onSubmit={handleSubmit}
                        className="px-5 sm:px-6 py-5 grid grid-cols-1 gap-4"
                    >
                        {/* Hidden FormSubmit controls */}
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_subject" value="New Appointment Request" />

                        {/* Name */}
                        <div>
                            <label className="block text-sm text-gray-700 mb-1">Name <span className="text-red-600">*</span></label>
                            <input
                                type="text"
                                value={form.name}
                                onChange={(e) => updateField("name", e.target.value)}
                                placeholder="Your full name"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963]"
                            />
                            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                        </div>

                        {/* Contact */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-gray-700 mb-1">Phone <span className="text-red-600">*</span></label>
                                <input
                                    type="tel"
                                    maxLength={10} 
                                    value={form.phone}
                                    onChange={(e) => updateField("phone", e.target.value)}
                                    placeholder="(+91) 9xxxxxxxxx (10 digits)"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963]"
                                />
                                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                            </div>
                            <div>
                                <label className="block text-sm text-gray-700 mb-1">Email <span className="text-red-600">*</span></label>
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => updateField("email", e.target.value)}
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963]"
                                />
                            </div>
                        </div>
                        {errors.contact && <p className="-mt-2 text-sm text-red-600">{errors.contact}</p>}

                        {/* Date & Time */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-gray-700 mb-1">Date <span className="text-red-600">*</span></label>
                                <input
                                    type="date"
                                    min={today} // Restrict past dates in the browser UI
                                    max={maxDateString} // Restrict far future dates in the browser UI
                                    value={form.date}
                                    onChange={handleDateChange}
                                    required
                                    // 🚀 NEW ATTRIBUTES TO DISABLE MANUAL INPUT:
                                    onKeyDown={(e) => e.preventDefault()} // Blocks keyboard typing
                                    onPaste={(e) => e.preventDefault()} // Blocks pasting a date string
                                    // 'caret-transparent' hides the blinking cursor, visually indicating no typing
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963] caret-transparent" 
                                />
                                {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
                            </div>
                            <div>
                                <label className="block text-sm text-gray-700 mb-1">Time <span className="text-red-600">*</span></label>
                                <input
                                    type="time"
                                    value={form.time}
                                    onChange={(e) => updateField("time", e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                                {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time}</p>}
                            </div>
                        </div>

                        {/* Concern */}
                        <div>
                            <label className="block text-sm text-gray-700 mb-1">Concern <span className="text-red-600">*</span></label>
                            <select
                                value={form.concern}
                                onChange={(e) => updateField("concern", e.target.value)}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#c98963]"
                            >
                                <option value="">Select a concern</option>
                                <option>Anti-aging solutions</option>
                                <option>Deep peelings</option>
                                <option>Facials</option>
                                <option>Laser hair removal</option>
                                <option>Laser skin therapy</option>
                                <option>Mesotherapy</option>
                                <option>Microdermabrasion</option>
                                <option>Pigmentation solutions</option>
                                <option>Skin tightening</option>
                                <option>Hair PRP</option>
                                <option>HAIR GFC</option>
                                <option>Hair regrowth laser</option>
                                <option>Korean Skin Treatment</option>
                                <option>Eczema</option>
                                <option>Psoriasis</option>
                                <option>Dermatitis</option>
                                <option>Alopecia Areata</option>
                                <option>Others</option>
                            </select>
                            {errors.concern && <p className="mt-1 text-sm text-red-600">{errors.concern}</p>}
                        </div>

                        {/* Submit */}
                        <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
                            <button
                                type="submit"
                                disabled={submitted}
                                className="w-full sm:w-auto bg-[#c98963] disabled:bg-gray-400 hover:bg-[#be7f58] text-white px-6 py-3 rounded-md font-medium transition-colors"
                            >
                                {submitted ? 'Submitting...' : 'Confirm Booking'}
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="w-full sm:w-auto bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-md"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}