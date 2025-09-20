import React, { useState } from 'react';
import { Trash2, User, Mail, Phone } from 'lucide-react';
import { Contact } from '../types/Contact';
import { formatPhoneNumber } from '../utils/validation';

interface ContactItemProps {
  contact: Contact;
  onDelete: (id: string) => void;
}

/**
 * Individual contact item component with delete functionality
 */
const ContactItem: React.FC<ContactItemProps> = ({ contact, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  /**
   * Handles contact deletion with confirmation
   */
  const handleDelete = async () => {
    if (isDeleting) return;
    
    setIsDeleting(true);
    
    // Add slight delay for better UX
    setTimeout(() => {
      onDelete(contact.id);
      setIsDeleting(false);
    }, 300);
  };

  return (
    <div className={`bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 p-6 transition-all duration-300 hover:shadow-lg hover:border-gray-300/50 ${
      isDeleting ? 'opacity-50 scale-95' : 'hover:scale-[1.02]'
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex-1 space-y-3">
          {/* Name */}
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold text-gray-800 break-words">
              {contact.name}
            </h3>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-green-600 flex-shrink-0" />
            <p className="text-gray-600 break-all">
              {contact.email}
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <p className="text-gray-600 font-mono">
              {formatPhoneNumber(contact.phone)}
            </p>
          </div>
        </div>

        {/* Delete Button */}
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className={`ml-4 p-3 rounded-xl transition-all duration-200 flex-shrink-0 ${
            isDeleting
              ? 'bg-gray-200 cursor-not-allowed'
              : 'bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 hover:scale-110 active:scale-95'
          }`}
          title="Delete contact"
        >
          {isDeleting ? (
            <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <Trash2 className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ContactItem;