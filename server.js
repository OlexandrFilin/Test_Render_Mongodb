import  mongoose from "mongoose"
import app from './app.js'
const PSW= "4CIxKBfCP0OvGku4";
const MAME_BASE = "my-contacts"
const DB_HOST = `mongodb+srv://fas:${PSW}@cluster0.mxwzxhc.mongodb.net/${MAME_BASE}?retryWrites=true&w=majority`;
console.log('DB_HOST', DB_HOST)
mongoose.connect(DB_HOST)
.then(()=>{
  app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000")
})
})
.catch(error =>
   {
 console.log(error.message)
 process.exit(1);
});
 
