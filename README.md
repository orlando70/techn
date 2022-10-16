**Techinnover**
----
Techinnover is a tool that helps you set up reminders

Tech stack: `Typescript`, `NodeJs`, `Express`, `MySQL`

**Installation**
----
After cloning, run `npm install` in the project folder to install all dependencies

Run `npm run dev` to start the server

**Important Scripts**
----
`npm run dev` runs the server in the development environment

`npm run seed:user` seeds users to the database. Alternatively you can create a new user by sending a POST request to `/user` endpoint. Payload example 
```
{
  firstName: string,
  lastName: string
}
```

**Endpoints-User**
----
Creates a single user

* **URL**

  /user

* **Method:**

  `POST`
  
* **URL PARAMS**
 
  `None`
  
* **AUTHORIZATION HEADER**
 
  `None`
  
* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    
    ```
    {
        {
        "message": "User created Successfully",
        "data": {
          "firstName": "chima",
          "lastName": "daniel",
          "id": 6,
          "createdAt": "2022-10-16T21:54:46.511Z",
          "updatedAt": "2022-10-16T21:54:46.511Z"
     }
  }
    }
   ```
    
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `{ error : 'Error creating User' }`
    
 * **Sample Call:**

  ```javascript
    {
      "firstName": "clement",
      "lastName": "goodluck"
    }
  ```
  
  **Endpoints-Reminders**
----
Creates a single reminder

* **URL**

  /reminders

* **Method:**

  `POST`
  
* **URL PARAMS**
 
  `None`
  
* **AUTHORIZATION HEADER**
 
  `None`
  
* **Success Response:**

 * **Code:** 201 <br />
    **Content:** 
    
    ```
    {
        {
        "message": "Successful",
        "data": {
          "user": {
            "id": 1,
            "createdAt": "2022-10-16T09:03:10.866Z",
            "updatedAt": "2022-10-16T09:03:10.866Z",
            "firstName": "John",
            "lastName": "Doe"
          },
          "title": "sfassfsd",
          "description": "sdfafdsafdfsfdfa",
          "userId": 1,
          "id": 5,
          "createdAt": "2022-10-16T18:33:00.985Z",
          "updatedAt": "2022-10-16T18:33:00.985Z"
       }
      }
     }
    }
   ```

 * **Error Response:**

* **Code:** 404 <br />
  **Content:** `{ error : 'User not found' }`

* **Sample Call:**

  ```javascript
   {
    "userId": "1",
    "title": "Laundry",
    "description": "do laundry before noon"
  }
  ```
  
**Endpoints-Reminders**
----
Get a single reminder

* **URL**

  /reminders

* **Method:**

  `GET`
  
* **URL PARAMS**
 
  `id:[number]`
  
* **AUTHORIZATION HEADER**
 
  `None`
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    ```
    {
        {
        "message": "Successful",
        "data": {
          "id": 5,
          "createdAt": "2022-10-16T18:33:00.985Z",
          "updatedAt": "2022-10-16T18:33:00.985Z",
          "title": "sfassfsd",
          "description": "sdfafdsafdfsfdfa",
          "user": {
            "id": 1,
            "createdAt": "2022-10-16T09:03:10.866Z",
            "updatedAt": "2022-10-16T09:03:10.866Z",
            "firstName": "John",
            "lastName": "Doe"
          }
        }
    }
    }
   ```

* **Error Response:**

* **Code:** 404 <br />
  **Content:** `{ error : 'ID not found' }`

* **Sample Call:**

  ```javascript
   {}
  ```
  
 **Endpoints-Reminders**
----
Get all reminders

* **URL**

  /reminders

* **Method:**

  `GET`
  
* **URL PARAMS**
 
  `None`
  
* **AUTHORIZATION HEADER**
 
  `None`
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    ```
    {
      "message": "Successful",
      "data": {
        "reminders": [
          {
            "id": 1,
            "createdAt": "2022-10-16T09:04:13.384Z",
            "updatedAt": "2022-10-16T09:04:13.384Z",
            "title": "go shopping",
            "description": "go to market square",
            "user": {
              "id": 1,
              "createdAt": "2022-10-16T09:03:10.866Z",
              "updatedAt": "2022-10-16T09:03:10.866Z",
              "firstName": "John",
              "lastName": "Doe"
            }
          },
          {
            "id": 2,
            "createdAt": "2022-10-16T09:04:39.209Z",
            "updatedAt": "2022-10-16T09:04:39.209Z",
            "title": "do laundry",
            "description": "wash your clothes",
            "user": {
              "id": 2,
              "createdAt": "2022-10-16T09:03:10.887Z",
              "updatedAt": "2022-10-16T09:03:10.887Z",
              "firstName": "Mahama",
              "lastName": "Keith"
            }
          }
        ]
      }
    }
   ```

* **Error Response:**

* **Code:** 404 <br />
  **Content:** `{ error : 'Error fetching reminders' }`

* **Sample Call:**

  ```javascript
   {}
  ```
  
 **Endpoints-Reminders**
----
Gets all reminders for a user

* **URL**

  /reminders

* **Method:**

  `GET`
  
* **URL PARAMS**
 
  `user=[number]`
  
* **AUTHORIZATION HEADER**
 
  `None`
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    ```
    {
        {
        "message": "Successful",
        "data": {
          "user": {
            "id": 1,
            "createdAt": "2022-10-16T09:03:10.866Z",
            "updatedAt": "2022-10-16T09:03:10.866Z",
            "firstName": "John",
            "lastName": "Doe"
          },
          "title": "sfassfsd",
          "description": "sdfafdsafdfsfdfa",
          "userId": 1,
          "id": 5,
          "createdAt": "2022-10-16T18:33:00.985Z",
          "updatedAt": "2022-10-16T18:33:00.985Z"
       }
      }
     }
    }
   ```

* **Error Response:**

* **Code:** 404 <br />
  **Content:** `{ error : 'Error fetching reminders' }`

* **Sample Call:**

  ```javascript
   {}
  ```
  
 **Endpoints-Reminders**
----
Gets all reminders after a set date

* **URL**

  /reminders

* **Method:**

  `GET`
  
* **URL PARAMS**
 
  `after=[number]`
  
* **AUTHORIZATION HEADER**
 
  `None`
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    ```
    {
        {
        "message": "Successful",
        "data": {
          "user": {
            "id": 1,
            "createdAt": "2022-10-16T09:03:10.866Z",
            "updatedAt": "2022-10-16T09:03:10.866Z",
            "firstName": "John",
            "lastName": "Doe"
          },
          "title": "sfassfsd",
          "description": "sdfafdsafdfsfdfa",
          "userId": 1,
          "id": 5,
          "createdAt": "2022-10-16T18:33:00.985Z",
          "updatedAt": "2022-10-16T18:33:00.985Z"
       }
      }
     }
    }
   ```

* **Error Response:**

* **Code:** 404 <br />
  **Content:** `{ error : 'Error fetching reminders' }`

* **Sample Call:**

  ```javascript
   {}
  ```
  
 **Endpoints-Reminders**
----
Gets all reminders for a user after a set date

* **URL**

  /reminders

* **Method:**

  `GET`
  
* **URL PARAMS**
 
  `user=[number] & after=[number]`
  
* **AUTHORIZATION HEADER**
 
  `None`
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    ```
    {
        {
        "message": "Successful",
        "data": {
          "user": {
            "id": 1,
            "createdAt": "2022-10-16T09:03:10.866Z",
            "updatedAt": "2022-10-16T09:03:10.866Z",
            "firstName": "John",
            "lastName": "Doe"
          },
          "title": "sfassfsd",
          "description": "sdfafdsafdfsfdfa",
          "userId": 1,
          "id": 5,
          "createdAt": "2022-10-16T18:33:00.985Z",
          "updatedAt": "2022-10-16T18:33:00.985Z"
       }
      }
     }
    }
   ```

* **Error Response:**

* **Code:** 404 <br />
  **Content:** `{ error : 'Error fetching reminders' }`

* **Sample Call:**

  ```javascript
   {}
  ```
