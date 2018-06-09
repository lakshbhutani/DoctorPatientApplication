export class Login {
  user_name: string;
  password: string;
}

export class Patient {
  name: string;
  email: string;
  age: number;
  createdAt: string;
  id: string;
  status: string;
}

export class RequestObject {
  requested_by: string;
  requested_for: string;
}

export class ResponseRequestObject {
  id: string;
  status: string;
  requested_by: Requested_By;
}

export class Requested_By {
  age: number;
  email: string;
  id: number;
  role: number;
  name: string;
  user_name: string;
}

export class StatusObject {
  status: string;
}
