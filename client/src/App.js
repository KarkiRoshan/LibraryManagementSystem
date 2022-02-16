import React, {useState} from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  //student
  const [crn,setCrn] = useState('')
  const [name,setName] = useState('')
  const [number,setNumber]= useState('')
  const [address,setAddress] = useState('')
  const [email,setEmail] = useState('')

  //book
  const [bookId,setBookId] = useState('')
  const [bookName,setBookName] = useState('')
  const [author,setAuthor] = useState('')
  const [genre,setGenre] = useState('')

  //borrower
  const [bId,setBId] = useState('')
  const [brBid,setBrBid] = useState('')
  const [bTitle,setBTitlee] = useState('')
  const [releaseDate,setReleaseDate] = useState('')
  const [dueDate,setDueDate] = useState('')
  const [returnDate,setReturnDate] = useState('')

  //display records
  const [recordList,setRecordList] = useState([])

//add student
  const addStudent=()=>{
    Axios.post('http://localhost:3000/api/v1/insertStudent',{
      student_crn:crn,
      student_name:name,
      student_number:number,
      student_address:address,
      student_email:email
    }).then((()=>{
      console.log("Success")
    }))
  }

//add Book
  const addBook=()=>{
    Axios.post('http://localhost:3000/api/v1/insertBook',{
      book_id:bookId,
      book_name:bookName,
      author:author,
      genre:genre
    }).then((()=>{
      console.log("Success")
    }))
  }

  //add borrower
  const addBorrower=()=>{
    Axios.post('http://localhost:3000/api/v1/insertBorrower',{
      borrower_id:bId,
      book_id:brBid,
      book_title:bTitle,
      releaseDate:releaseDate,
      dueDate:dueDate,
      returnDate:returnDate
    }).then((()=>{
      console.log("Success")
    }))
  }


  //display all records
  const displayAll=()=>{
    Axios.get('http://localhost:3000/api/v1/getAllRecords').then((response)=>{
      setRecordList(response.data)

    })
    console.log(recordList)
  }

  return (
    <div className="App">
    <h1>LIBRARY MANAGEMENT SYSTEM</h1>
      <div className="container">
        <div className="column-left">
          <label>Student CRN</label>
          <input type="text" onChange={(event)=>{
            setCrn(event.target.value)
            
          }}/>
          <br/>
          <label>Student Name</label>
          <input type="text" onChange={(event)=>{
            setName(event.target.value)
            // console.log(name)
          }}/>
          <br/>
          <label>Student Number</label>
          <input type="text" onChange={(event)=>{
            setNumber(event.target.value)
            // console.log(number)
          }} />
          <br/>
          <label>Student Address</label>
          <input type="text" onChange={(event)=>{
            setAddress(event.target.value)
            // console.log(address)
          }}/>
          <br/>
          <label>Student email</label>
          <input type="text" onChange={(event)=>{
            setEmail(event.target.value)
            // console.log(email)
          }}/>
          <br/>
          <button onClick={addStudent}>Inset Student Data</button>
        </div>
        <div className="column-center">
          <label>Book ID</label>
          <input type="text" onChange={(event)=>{
            setBookId(event.target.value)
            // console.log(bookId)
          }}/>
          <br/>
          <label>Book Name</label>
          <input type="text" onChange={(event)=>{
            setBookName(event.target.value)
            // console.log(bookName)
            
          }}/>
          <br/>
          <label>Author </label>
          <input type="text" onChange={(event)=>{
            setAuthor(event.target.value)
            // console.log(author)
          }}/>
          <br/>
          <label>Genre</label>
          <input type="text" onChange={(event)=>{
            setGenre(event.target.value)
            // console.log(genre)
          }}/>
          <br/>
          <button onClick={addBook}>Inset Book Data</button>
        </div>
        <div className="column-right">
          <label>Borrower Id</label>
          <input type="text" onChange={(event)=>{
            setBId(event.target.value)
            // console.log(bId)
          }}/>
          <br/>
          <label>Book id</label>
          <input type="text" onChange={(event)=>{
            setBrBid(event.target.value)
            // console.log(brBid)
          }}/>
          <br/>
          <label>Book title</label>
          <input type="text" onChange={(event)=>{
            setBTitlee(event.target.value)
            // console.log(bTitle)  
          }}/>
          <br/>
          <label>Release Date</label>
          <input type="Date" onChange={(event)=>{
            setReleaseDate(event.target.value)
            // console.log(`Release Date ${releaseDate}`)
          }}/>
          <br/>
          <label>Due Date</label>
          <input type="date" onChange={(event)=>{
            setDueDate(event.target.value)
            // console.log(`due Date ${dueDate}`)
          }}/>
          <br/>
          <label>Return Date</label>
          <input type="date" onChange={(event)=>{
            setReturnDate(event.target.value)
            // console.log(`Return Date ${returnDate}`)
          }}/>
          <br/>
          <button onClick={addBorrower}>Inset Borrower Data</button>
        </div>
      </div>
      <button onClick={displayAll}>Display All Records of Students who have borrowed Books</button>
         
      </div>
  );
}

export default App;
