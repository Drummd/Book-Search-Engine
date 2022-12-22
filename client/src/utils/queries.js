// this will hold the query GET_ME whicch will exeute the me query
//set up using Apollo server

import { gql } from '@apollo/client';

export const GET_ME = gql`
    query me {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                title
                description
                image
                link
            }
        }
    }

`;



























