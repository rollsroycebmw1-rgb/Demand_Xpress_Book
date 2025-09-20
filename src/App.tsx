import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { Contact } from './types/Contact';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

/**
 * Main App component - Contact Book application
 */
const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  /**
   * Adds a new contact to the list
   */
  const handleAddContact = (newContact: Omit<Contact, 'id'>) => {
    const contact: Contact = {
      ...newContact,
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9)
    };
    
    setContacts(prev => [contact, ...prev]);
  };

  /**
   * Deletes a contact from the list
   */
  const handleDeleteContact = (contactId: string) => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-blue-600 rounded-2xl shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Contact Book
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Organize and manage your contacts with ease. Add, view, and delete contacts with a beautiful, responsive interface.
          </p>
        </header>

        {/* Main Content */}
        <main className="space-y-8">
          {/* Contact Form */}
          <section>
            <ContactForm onAddContact={handleAddContact} />
          </section>

          {/* Contact List */}
          <section>
            <ContactList 
              contacts={contacts}
              onDeleteContact={handleDeleteContact}
            />
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center mt-12 py-6 text-gray-500 text-sm">
          <p>Built with React, TypeScript, and Tailwind CSS</p>
        </footer>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default App;