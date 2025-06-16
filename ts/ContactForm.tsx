import React, { useState, useRef, ChangeEvent, FormEvent, DragEvent } from 'react';
import './ContactForm.css';
import DragAndDrop from './DragAndDrop';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  reasons: string[];
  message: string;
}

interface Errors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  reasons?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    reasons: [],
    message: '',
  });

  const [errors, setErrors] = useState<Errors>({});
  const [charCount, setCharCount] = useState<number>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [files, setFiles] = useState<File[]>([]);
  const [draggedFileIndex, setDraggedFileIndex] = useState<number | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;

    if (name === 'radioMessageType') {
      let updated = [...formData.reasons];
      if (checked) {
        updated.push(value);
      } else {
        updated = updated.filter((item) => item !== value);
      }
      setFormData({ ...formData, reasons: updated });
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (name === 'message') {
      setCharCount(value.length);
    }
  };

  const handleFilesAdded = (newFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleDragStart = (index: number) => (e: DragEvent<HTMLDivElement>) => {
    setDraggedFileIndex(index);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', files[index].name);
  };

  const handleDragEnd = (e: DragEvent<HTMLDivElement>) => {
    const dropEffect = e.dataTransfer.dropEffect;
    if (dropEffect === 'none' && draggedFileIndex !== null) {
      setFiles((prev) => prev.filter((_, i) => i !== draggedFileIndex));
    }
    setDraggedFileIndex(null);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const onFilesSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFilesAdded(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Errors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address (e.g., JohnSmith@Gmail.com).';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required.';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number (numbers only).';
    }

    if (formData.reasons.length === 0) newErrors.reasons = 'Please select at least one reason.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div id="formWrapper">
      <h1 id="title">Let's Connect!</h1>
      <p id="description">Contact me today if you have any questions or would like to just chat!</p>

      {!submitted ? (
        <form id="contactForm" onSubmit={handleSubmit}>
          <div id="row">
            <label>First Name (required):</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <p className="error-message">{errors.firstName}</p>}
          </div>

          <div id="row1">
            <label>Last Name (required):</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            {errors.lastName && <p className="error-message">{errors.lastName}</p>}
          </div>

          <div id="row2">
            <label>Email (required):</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div id="row3">
            <label>Phone Number (required):</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
            {errors.phone && <p className="error-message">{errors.phone}</p>}
          </div>

          <div id="row4" className="radio-options">
            <label>Please choose one or more reasons why you would like to connect (required):</label>
            <div className="radio-group" id="optionSelect">
              {['JobOpportunities', 'Mentorship', 'Social', 'Inquiries', 'Feedback'].map((type) => (
                <label key={type}>
                  <input
                    type="checkbox"
                    className="radio-item"
                    name="radioMessageType"
                    value={type}
                    checked={formData.reasons.includes(type)}
                    onChange={handleChange}
                  />
                  {type.replace(/([a-z])([A-Z])/g, '$1 $2')}
                </label>
              ))}
            </div>
            {errors.reasons && <p className="error-message">{errors.reasons}</p>}
          </div>

          <div id="row5">
            <label>Please describe why you would like to contact me (required):</label>
            <textarea
              name="message"
              id="message"
              rows={6}
              cols={50}
              maxLength={150}
              value={formData.message}
              onChange={handleChange}
            />
            <div id="charCount">{charCount} / 150 characters</div>
            {errors.message && <p className="error-message">{errors.message}</p>}
          </div>

          <h3 id="upload-title">Share your work:</h3>
          <div id="row6">
            <label>
              If you have a resume, project, documents, or any type of work that you would like to share,
              please drag and drop or directly upload your file here. (You may drag to remove an item)
            </label>

            <DragAndDrop onFilesAdded={handleFilesAdded} />
            <input
              type="file"
              multiple
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={onFilesSelected}
            />

            <button type="button" onClick={openFileDialog}>
              Browse Local Files
            </button>

            <div
              id="image-container"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => e.preventDefault()}
            >
              {files.map((file, index) => (
                <div
                  key={index}
                  className="file-item"
                  draggable
                  onDragStart={handleDragStart(index)}
                  onDragEnd={handleDragEnd}
                  style={{ userSelect: 'none', cursor: 'grab' }}
                >
                  {file.name}
                </div>
              ))}
            </div>
          </div>

          <button type="submit" id="submitBtn">
            Submit
          </button>
        </form>
      ) : (
        <div id="summaryMessage">Thank you! Your message has been sent.</div>
      )}
    </div>
  );
};

export default ContactForm;