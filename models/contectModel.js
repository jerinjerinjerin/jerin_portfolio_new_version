import { Schema, model, models } from 'mongoose';

const contactSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    service: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Check if the model already exists in the models object, otherwise create it.
const ContactModel = models.Contact || model('Contact', contactSchema);

export default ContactModel;
