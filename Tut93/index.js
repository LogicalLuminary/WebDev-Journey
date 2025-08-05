import fs from "fs/promises";
import fsn from "fs";
import path from "path";

let files = await fs.readdir(
    "C:\\Users\\asus\\OneDrive\\Desktop\\CODE\\WEB_DEV\\Tut93"
);
console.log(files);

let extensions = [];

const basepath ="C:\\Users\\asus\\OneDrive\\Desktop\\CODE\\WEB_DEV\\Tut93";

for (const item of files) {
    // console.log(item)
    let ext = item.split(".");
    ext = ext[ext.length - 1];
    if(ext.toString() === "js" || ext.toString() ==="json" || ext.length ==0 ) continue;
    // console.log(ext);

    let exists = extensions.indexOf(ext);
    if (exists == -1) {
        extensions.push(ext);
        exists = extensions.length - 1;
        // make dir
        fs.mkdir(ext, (err) => {
            if (err) {
                return console.error(err);
            }
            console.log("Directory created successfully!");
        });
    }

    const oldPath = path.join(basepath, item);

    const newPath = path.join(
        basepath, extensions[exists], item);

    fs.rename(oldPath, newPath, (err) => {
        if (err) {
            return console.error('Error moving file:', err);
        }
        console.log('File moved successfully!');
    });

    // exists gives idx now
}
