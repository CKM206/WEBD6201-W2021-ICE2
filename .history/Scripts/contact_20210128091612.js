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

    /**
     * toString() - This method is used to convert a Contact object into a string.
     *            it overrides the built-in toString() function.
     * @returns {string}
     */
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
            "fullName": this.FullName,
            "contactNumber": this.ContactNumber,
            "emailAddress": this.EmailAddress
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
        if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "")
            {
        return `${this.FullName},${this.ContactNumber},${this.EmailAddress}`;
            }
            else
            {
                console.error("Contact is empty.");
                return null;
            }
    }

    /**
     * deserialize() - This method takes a comma-separated data string and assigns the
     *               values to a Contact Class Objects properties
     * 
     * @param {string} data 
     * @returns {void}
     */
    deserialize(data)
    {
        // This will split up the values found in data, delimmited by commas
        //-into a property Array.
        let propertyArray = data.split(",");

        this.FullName = propertyArray[0];
        this.ContactNumber = propertyArray[1];
        this.EmailAddress = propertyArray[2];
    }
}