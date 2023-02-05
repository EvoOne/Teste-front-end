import { Occurence } from './core/models/occurence.model';
import { User } from './core/models/user.model';
import {gql} from 'graphql-tag'


//users query constant and response interface

export const LIST_USERS_QUERY = gql`
  query listUsers {
    listUsers {
      id
      address
      email
      name
      phone
    }
  }
`
;

export interface listUsersQueryResponse {
  listUsers: User[];
  loading: boolean
}

//occurences query constant and response interface

export const LIST_OCCURENCES_QUERY = gql`
  query listOccurences {
    listOccurences {
      address
      data
      id
      image
      title
      user
      status
    }
  }
  `
;

export interface listOccurencesQueryResponse {
  listOccurences: Occurence[]
  loading: boolean
}
