import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';

const SubTableItems = ({ email, mongoId, deleteEmail, date }) => {
  const emailDate = new Date(date);
  return (
    <tr className='bg-white border-b text-left'>
      <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
        {email ? email : "No Email"}
      </th>
      <td className='px-6 py-4 hidden sm:block'>{emailDate.toDateString()}</td>
      
      {/* Delete Action */}
      <td
        onClick={() => deleteEmail(mongoId)}
        className="px-6 py-4 text-red-500 cursor-pointer hover:text-red-700 transition-colors duration-200 text-center"
        title="Delete Blog"
      >

        
        <Image
          src={assets.delete_icon_1}
          alt="Delete Blog"
          width={20} 
          height={20} 
          className="inline-block"
        />
      </td>




      
    </tr>
  );
}

export default SubTableItems;
