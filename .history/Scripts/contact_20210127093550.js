"use strict"

// Contact Class
class Contact {


    // Getters
    get FullName() {
      return this.m_fullName;
    }
    get ContactNumber() {
      return this.m_contactNumber;
    }
    get EmailAddress() {
      return this.m_emailAddress;
    }
    // Setters
    set FullName(fullName) {
      this.m_fullName = fullName;
    }
    set ContactNumber(contactNumber) {
      this.m_contactNumber = contactNumber;
    }
    set EmailAddress(emailAddress) {
      this.m_emailAddress = emailAddress;
    }
    // Constructor
    constructor(fullName, contactNumber, emailAddress) {
      this.FullName = fullName;
      this.ContactNumber = contactNumber;
      this.EmailAddress = emailAddress;
    }
    // Methods
    toString() {
      return `Full Name     : ${this.m_fullName}\nContact Number: ${this.m_contactNumber}\nEmail Address : ${this.m_emailAddress}`;
    }
  }