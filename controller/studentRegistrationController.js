


const studentDAO = require("../datastore/datastore") ;

const student = require("../model/register") ;


const studentController = (function () {
        const getStudent = function (req, res) {
            return studentDAO.getData() ;
        }

        const savaStudent = function (req, res) {
                const id = studentDAO.getData.length + 1;
                
                const studentIdNumber  = req.body.studentIdNumber;
                
                const fullName = req.body.fullName;
               
                const levelOfStudy = req.body.levelOfStudey;
            
                const account = new student(id, studentIdNumber , fullName, levelOfStudy);
            
            return studentDAO.savaccount(account);
            }   
            return{
                getStudent:getStudent,
                savaStudent:savaStudent
            
            }
            })();
            module.exports = studentController;