export interface Users {
  id: string;
  address: string;
  email: string;
  name: string;
  phone: string;
}

export type UsersResponse = {
  getAllUsers: Users[];
};

export type QueryUsers = {
  listUsers: Users[];
};
