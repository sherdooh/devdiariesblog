'use client';
import ContactTableItems from '@/components/AdminComponents/ContactTableItems';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Page = () => {
    const [contacts, setContacts] = useState([]);

    const fetchContacts = async () => {
        try {
            const response = await axios.get('/api/contact');
            if (response.data.success) { 
                console.log("Fetched Contacts:", response.data.contacts); 
                setContacts(response.data.contacts || []); 
            } else {
                console.error("Failed to fetch contacts:", response.data.error);
                toast.error("Failed to fetch contact messages");
            }
        } catch (error) {
            console.error("Error fetching contacts:", error);
            toast.error("Failed to fetch contact messages");
        }
    };

    const deleteContact = async (mongoId) => {
        try {
            const response = await axios.delete('/api/contact', {
                params: { id: mongoId }
            });
            toast.success(response.data.msg);
            fetchContacts();
        } catch (error) {
            console.error("Error deleting contact:", error);
            toast.error("Failed to delete contact");
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    useEffect(() => {
        console.log("Current Contacts State:", contacts); 
    }, [contacts]);

    return (
        <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
            <h1>All Contact Messages</h1>
            <div className='container mx-auto px-4 h-[90vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
                <table className='w-full text-sm text-gray-500'>
                    <thead className='text-sm text-bg-gray-700 text-left uppercase bg-gray-50'>
                        <tr>
                            <th scope='col' className='hidden sm:block px-6 py-3'>
                                Name
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Email
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Subject
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Message
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Date
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.length > 0 ? (
                            contacts.map((item) => (
                                <ContactTableItems
                                    key={item._id}
                                    mongoId={item._id}
                                    name={item.name}
                                    email={item.email}
                                    subject={item.subject}
                                    message={item.message}
                                    date={item.date}
                                    deleteContact={deleteContact}
                                />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className='text-center py-3'>No messages found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page;
