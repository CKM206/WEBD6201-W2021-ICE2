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
    /**
     * Contact Class Constructor
     * @param {string} fullName 
     * @param {string} contactNumber 
     * @param {string} emailAddress 
     */
    constructor(fullName = "", contactNumber = "", emailAddress = "") {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }
    // Methods
    toString() {
        return `Full Name     : ${this.m_fullName}\nContact Number: ${this.m_contactNumber}\nEmail Address : ${this.m_emailAddress}`;
    }

    /**
     *  toJSON() - This method is used to convert an object of the Contact class 
     *           into a JSON object made up of the Contact class properties.
     * @returns {object}
     */
    toJSON()
    {
        return {
            "fullName": this.fullName,
            "contactNumber": this.ContactNumber,
            "emailAddress": this.emailAddress
        }
    }

    /**
     * serialize() - This method converts an Object of the Contact class into a comma-
     *             seperated value string
     * 
     * @returns {string}
     */
    serialize()
    {
        return '${this.m_fullName},${this.m_contactNumber},${this.m_emailAddress}';
    }

    /**
     * 
     * 
     * @param {string} data 
     * @return {void}
     */
    deserialize(data)
    {

    }
}