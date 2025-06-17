import React, { useState, useRef } from 'react';
import './ContactForm.css';
import DragAndDrop from '../components/DragAndDrop';

//manages form input values
const ContactForm = () => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    reasons: [],
    message: '',
  };

  //useState for validation errors, character count, form submission, storing uploaded files. 
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [charCount, setCharCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState ([])
  const [draggedFileIndex, setDraggedFileIndex] = useState(null);

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    //radio type check boxes when selections are chosen
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
    //character count
    if (name === 'message') {
      setCharCount(value.length);
    }
  };
  // append files that are dragged and dropped
  const handleFilesAdded = (newFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  // dragging items to remove them
  const handleDragStart = (index) => (e) => {
    setDraggedFileIndex(index);
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', files[index].name);
  };
  const handleDragEnd = (e) => {
    const dropEffect = e.dataTransfer.dropEffect;
    if (dropEffect === 'none' && draggedFileIndex !== null) {
        setFiles((prev) => prev.filter((_, i) => i !== draggedFileIndex));
    }
    setDraggedFileIndex(null);
  }

  //opens and selects files from browse local files is selected
  const openFileDialog = () => {
    if (fileInputRef.current) {
        fileInputRef.current.click();
    }
  };
  const onFilesSelected = (e) => {
    if (e.target.files.length > 0) {
        handleFilesAdded(Array.from(e.target.files));
    }
  }

  //form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    //form validation
    const newErrors = {};
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

    //when no validation occurs, set submitted to true to log the form data
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      console.log('Form submitted:', formData);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
    setCharCount(0);
    setFiles([]);
    setSubmitted(false);
  }

  return (
    <div id="formWrapper">
      <h1 id="title">Let's Connect!</h1>
      <p id="description">
        Contact me today if you have any questions or would like to just chat!
      </p>  

      {submitted ? (
        <div id="summaryMessage">
          <p>Thank you! Your message has been sent.</p>
          <button onClick={resetForm} id="backButton">
            Back to Form
          </button>
        </div>
      ) : (  
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
            rows="6"
            cols="50"
            maxLength="150"
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


        {/* container when items are dragged to the dropzone */}
          <div id="image-container"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => e.preventDefault()}>
            {files.map((file, index) => (
              <div 
                key={index}
                className="file-item"
                draggable
                onDragStart={handleDragStart(index)}
                onDragEnd={handleDragEnd}
                style={{ userSelect: 'none', cursor: 'grab'}}
            >
                {file.name}
            </div>    
            ))}
            </div>
          </div>  

        <button type="submit" id="submitBtn">Submit</button>
      </form>  
      )} 
    </div>
  );
};

export default ContactForm;
