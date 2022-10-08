const fs = require('fs');

let method = process.argv[2];
let path = process.argv[3];
let content = process.argv[4];


const CreateFile = (name) => {
    try {
        fs.createWriteStream(name);
        console.log("file created successfully");
    } catch (err) {
        console.error(err);
    }
}

const ReadFile = (path) => {
    try {
        const data = fs.readFileSync(path, 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

const WriteFile = (path,content) => {
    // const content = 'Some ms k wsams ksma skofmw klmdwsa kmeaes content!';

    try {
        fs.writeFileSync(path, content);
        console.log("file written successfully");
    } catch (err) {
        console.error(err);
    }
}

const AppendData = (path,content) => {
    
        fs.appendFile(path, content, (err)=>{
           err ? console.log(err) : ReadFile(path);
        });
        
}
const RenameFile = (path,name) => {
    try {
        fs.renameSync(path, name);
        console.log("Renamed successfully");
    } catch (err) {
        console.error(err);
    }
}

const DeleteFile = (path) => {

    try {
        fs.unlinkSync(path)
        console.log("Deleted successfully");
    } catch (err) {
        console.error(err);
    }

}

method === "write" ? WriteFile(path,content) : method === "read" ? ReadFile(path) : method === "create" ? CreateFile(path)
    : method === "append" ? AppendData(path,content) : method === "rename" ? RenameFile(path,content)
        : method === "delete" ? DeleteFile(path) : console.log("check your cmnd !");