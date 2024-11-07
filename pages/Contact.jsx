'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const data = {
            email,
            name,
            subject,
            message,
        };

        try {
            const response = await axios.post('/api/contact', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.data.success) {
                toast.success(response.data.msg);
                setEmail('');
                setName('');
                setSubject('');
                setMessage('');
            } else {
                toast.error('Error');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
        }
    };

    return (
        <div className="mt-20 rounded-lg p-8">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Contact US</h3>
            <p className="text-lg text-gray-600 mb-8">
                Feel free to reach out to me for any questions or opportunities!
            </p>
            <form onSubmit={onSubmitHandler} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                            Your Email
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                            Your Name
                        </label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="text"
                            id="name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">
                        Subject
                    </label>
                    <input
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                        placeholder="Subject of your message"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                        Message
                    </label>
                    <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        id="message"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                        rows="5"
                        placeholder="Type your message here..."
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="px-4 py-3 font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                >
                    Email Me 🚀
                </button>
            </form>
            
        </div>
    );
};

export default Contact;
