class FileContents {
  constructor(files, toDo) {
    this.files = files;
    this.fileContents = {};
    this.toDo = toDo;
  }

  #collectContents() {
    return this.files.map(file => {
      return { file, content: this.fileContents[file] };
    });
  }

  addFileContents(file, content) {
    this.fileContents[file] = content;
    if (Object.keys(this.fileContents).length === this.files.length) {
      this.toDo(this.#collectContents());
    }
  }
}

exports.FileContents = FileContents;
