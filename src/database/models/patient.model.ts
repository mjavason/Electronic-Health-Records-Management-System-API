import { Schema, model, Document } from 'mongoose';
import autopopulate from 'mongoose-autopopulate';
import IPatient from '../../interfaces/patient.interface';
import { DATABASES } from '../../constants';

const patientSchema = new Schema<IPatient>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: DATABASES.USER, // Reference to the User model (replace 'User' with your actual User model name)
      autopopulate: true, // Enable autopopulation
      required: true,
    },
    pt_number: {
      type: String,
      required: true,
      unique: true,
    },
    birth_date: {
      type: Date,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    deleted: {
      type: Boolean,
      required: false,
      select: false,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// Apply the autopopulate plugin to the schema
patientSchema.plugin(autopopulate);

const PatientModel = model<IPatient>(DATABASES.PATIENT, patientSchema);

export default PatientModel;
