import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';

const ContactTableItems = ({ email, name, subject, message, date, deleteContact, mongoId }) => {
  const ContactDate = date ? new Date(date) : null;

  console.log("ContactTableItems Props:", { email, name, subject, message, date, deleteContact, mongoId });

  return (
    <tr className="bg-white border-b hover:bg-gray-100 transition duration-200">
      <td className="px-6 py-4 text-gray-700 font-semibold truncate max-w-xs">
        {email || "No email"}
      </td>
      <td className="px-6 py-4 text-gray-700 font-semibold truncate max-w-xs">
        {name || "No name"}
      </td>
      <td className="px-6 py-4 text-gray-700 font-semibold truncate max-w-xs">
        {subject || "No subject"}
      </td>
      <td className="px-6 py-4 text-gray-700 font-semibold truncate max-w-xs">
        {message || "No message"}
      </td>
      <td className="px-6 py-4 text-gray-500 text-sm">
        {ContactDate
          ? ContactDate.toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' })
          : "No date"}
      </td>
      <td
        onClick={() => {
          console.log("Delete button clicked for:", mongoId);
          deleteContact && deleteContact(mongoId);
        }}
        className="px-6 py-4 text-red-500 cursor-pointer hover:text-red-700 transition-colors duration-200 text-center"
        title="Delete Contact"
      >
        <Image
          src={assets.delete_icon_1}
          alt="Delete Contact"
          width={20}
          height={20} 
          className="inline-block"
        />
      </td>
    </tr>
  );
};

export default ContactTableItems;
