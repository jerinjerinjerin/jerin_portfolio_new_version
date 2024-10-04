"use server";

import ContactModel from "../models/contectModel";  // Corrected file name
import connectDB from "../config/database";  // Ensure this connects to MongoDB

export async function saveContact(data) {
  try {
    // Establish a connection to the database
    await connectDB();

    // Create a new contact document in the database
    const newContact = new ContactModel({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      phone: data.phone,
      service: data.service,
      message: data.message,
    });

    // Save the contact to the database
    await newContact.save();

    // Return a success message
    return { msg: "Contact saved successfully" };
  } catch (error) {
    // Return the error message in case of failure
    return { errMsg: error.message };
  }
}
