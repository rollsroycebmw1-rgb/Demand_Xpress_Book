import React from 'react';
import { Users, Search } from 'lucide-react';
import { Contact } from '../types/Contact';
import ContactItem from './ContactItem';

interface ContactListProps {
  contacts: Contact[];
  onDeleteContact: (id: string) => void;
}

/**
 * Contact list component that displays all contacts or empty state
 */
const ContactList: React.FC<ContactListProps> = ({ contacts, onDeleteContact }) => {
  if (contacts.length === 0) {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-12 text-center">
        <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No Contacts Yet</h3>
        <p className="text-gray-500">
          Add your first contact using the form above to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
      <div className="flex items-center gap-3 mb-6">
        <Users className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">
          Your Contacts ({contacts.length})
        </h2>
      </div>
      
      <div className="space-y-4">
        {contacts.map((contact, index) => (
          <div
            key={contact.id}
            className="animate-fadeIn"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: 'both'
            }}
          >
            <ContactItem
              contact={contact}
              onDelete={onDeleteContact}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;