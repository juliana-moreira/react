import * as fs from 'fs-web';
import commentsJsonModel from './model/comments.json';

export default class Controller {

  static createCommentsFile() {
    /* Só cria o arquivo, se ele ainda não existir */
    let exists = this.fetchComments((exists) => {
      if (!exists) {
        fs.writeFile('/comments.json', JSON.stringify(commentsJsonModel))
        .then((success) => {
          console.log('Comments Created');
        })
        .catch((err) => {
          console.log(err.message);
        });
      }
    });
  }

  static storeCommentsFile(payload, updateFunction) {
    let commentsJson = Controller.fetchComments((commentsJson) => {
      commentsJson.comments.push(payload);
      fs.writeFile('/comments.json', JSON.stringify(commentsJson))
      .then((success) => {
        console.log('Comments Updated');
        updateFunction();
      })
      .catch((err) => {
        console.log(err.message);
      });
    });
  }

  static fetchComments(onSuccess) {
    let commentsJson = fs.readString(`/comments.json`)
    .then((commentsJson) => {
      commentsJson = JSON.parse(commentsJson);
      onSuccess(commentsJson);
    })
    .catch((err) => {
      onSuccess(false);
    });
  }
}
