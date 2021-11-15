==============================>MongoDb command<==========================================
1. Database creation
    use MyDatabase

2. Display all database
    show dbs

3. show current database
     db

4. drop database
    db.dropDatabase()

5. create collection
    db.createCollection('collection's Name');

6. Show Collection
    show collections();

7. insert document into the collection
    db.studentRecord.insert({name:"Md Eesha",Marks:95, Remark:"Excellent"})==> for single document
	db.studentRecord.insert([{name:"Raman",Marks:85},{name:"Shivam",Marks:75}])=>More than one document


8. Display all document
    db.collection's name.find()
    db.StudentRecord.find();

9.Delete single document{record} from the collections
   db.studentRecord.deleteOne({name:"Md Eesha"})

10. Delete many document from the collection
     db.studentRecord.deleteMany({name:"Md Eesha"})  => if more than one record is present with same name .