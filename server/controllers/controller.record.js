

const db = require('../db/connect')


//insert to student
const insertStudent=  (req,res)=>{
    const crn = req.body.student_crn
    const name = req.body.student_name
    const number = req.body.student_number
    const address = req.body.student_address
    const email = req.body.student_email

    db.query("INSERT INTO student (student_crn,student_name,student_number,student_address,student_email) VALUES (?,?,?,?,?)",[crn,name,number,address,email],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.status(200).send("Data inserted")
        }
    })
 }


 //insert to Book
const insertBook = (req,res)=>{
    const bookId = req.body.book_id
    const bookName = req.body.book_name
    const author = req.body.author
    const  genre = req.body.genre
    db.query("INSERT INTO book (book_id,book_name,author,genre)  VALUES (?,?,?,?)",[bookId,bookName,author,genre],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.status(200).send("Data inserted")
        }
    })
    
}

//insert to borrower
const insertBorrower= (req,res)=>{
    const crn = req.body.borrower_id
    const bookId = req.body.book_id
    const bookTitle = req.body.book_title
    const releaseDate = req.body.releaseDate
    const dueDate = req.body.dueDate
    const returnDate = req.body.returnDate
    db.query("INSERT INTO borrowerrecord (borrower_id,book_id,book_title,releaseDate,dueDate,returnDate) VALUES (?,?,?,?,?,?)",[crn,bookId,bookTitle,releaseDate,dueDate,returnDate],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.status(200).send("Data inserted")
        }
    })


}



//to receive all the datas
const getAllRecords = (req,res)=>{
 
   db.query("SELECT * FROM student INNER JOIN borrowerrecord on borrowerrecord.borrower_id=student.student_crn INNER JOIN BOOK ON borrowerrecord.book_id=book.book_id",(err,result)=>{
       if(err){
           return res.status(404).json(err);
       }
       return res.status(200).json(result);
   })
}

module.exports = {insertStudent, getAllRecords,insertBook,insertBorrower}