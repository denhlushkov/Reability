class Diagnosis {
  constructor(diagnosis_id, title, description) {
    this.diagnosis_id = diagnosis_id;
    this.title = title;
    this.description = description;
  }
}

class Patient {
  constructor(patient_id, diagnosis_id, name, phone) {
    this.patient_id = patient_id;
    this.diagnosis_id = diagnosis_id;
    this.name = name;
    this.phone = phone;
  }

  get diagnosis() {}
}

class Therapist {
  constructor(therapist_id, name, specialization) {
    this.therapist_id = therapist_id;
    this.name = name;
    this.specialization = specialization;
  }
}

class Procedure {
  constructor(procedure_id, title, cost) {
    this.procedure_id = procedure_id;
    this.title = title;
    this.cost = cost;
  }
}

class Session {
  constructor(session_id, patient_id, therapist_id, procedure_id, date, duration_minutes) {
    this.session_id = session_id;
    this.patient_id = patient_id;
    this.therapist_id = therapist_id;
    this.procedure_id = procedure_id;
    this.date = date;
    this.duration_minutes = duration_minutes;
  }

  get patient() {}

  get therapist() {}

  get procedure() {}
}

class Invoice {
  constructor(invoice_id, session_id, amount, issue_date, payment_status) {
    this.invoice_id = invoice_id;
    this.session_id = session_id;
    this.amount = amount;
    this.issue_date = issue_date;
    this.payment_status = payment_status;
  }
  
  get session() {}
}

class TherapistProcedure {
  constructor(therapist_id, procedure_id) {
    this.therapist_id = therapist_id;
    this.procedure_id = procedure_id;
  }
  
  get therapist() {}
  
  get procedure() {}
}